import "core-js/stable";
import "regenerator-runtime/runtime";

import http from "http";
import { default as io_ } from "socket.io";
import post_request from "./post_request";

const port = 3602;

const platform_id = `users~platform_user~3000`;

let users_et_socket = new Object();
let sockets_et_users = new Object();
let active_chats = new Object();

let server = http.createServer();

let io = io_(server);

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.emit("user_id", socket.id);

  socket.on("user_id_return", ({ user }) => {
    users_et_socket[user] = socket;
    sockets_et_users[socket.id] = user;
  });

  socket.on("is_typing", ({ to, chat }) => {
    let user_sock = users_et_socket[to];
    user_sock && user_sock.emit("is_typing", chat);
  });

  socket.on("not_typing", ({ to, chat }) => {
    let user_sock = users_et_socket[to];
    user_sock && user_sock.emit("not_typing", chat);
  });

  const message_payload = async ({ to, message, chat }) => {
    try {
      let user_sock = users_et_socket[to];
      let { offer, onsale, currency } = message;

      if (!chat) {
        chat = await post_request("on_chat", {
          chat: message.chat,
          user: message.to === platform_id ? message.from : message.to,
          onsale,
          offer,
        });
        active_chats[chat._id] = chat;
      }
      let res = await post_request("on_message_write", { message });
      message._id = res._id;
      message.created = res.created;
      message.updated = res.updated;

      if (user_sock) user_sock.emit("new_message", message);
      else {
        let offer_ = await post_request("on_offer", { offer, onsale }),
          offer_update;

        let notify = offer_.seller;
        if (offer_.user && offer_.user._id === to) {
          notify = offer_.user._id;
          offer_update = { buyer_new_messages: { $inc: 1 } };
        } else offer_update = { seller_new_messages: { $inc: 1 } };

        await post_request("on_offer_update", {
          offer,
          onsale,
          offer_update,
          notify,
          message: message._id,
          chat: message.chat,
          currency,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  socket.on("message", message_payload);

  socket.on("offer_status", ({ user, payload }) => {
    let u_sock = users_et_socket[user];
    u_sock && u_sock.emit("offer_status", payload);
  });

  socket.on("disconnect", () => {
    delete users_et_socket[sockets_et_users[socket.id]];
    delete sockets_et_users[socket.id];
  });
});

server.listen(port, () =>
  console.log("Udara Socket started listening on :" + port)
);

setInterval(async () => {
  let data = await post_request("any_new_notifications");

  if (data)
    for (const user in data) {
      let sock = users_et_socket[user];
      if (!sock) continue;

      sock.emit("new_notification", data[user]);
    }
}, 3 * 60 * 1000);
