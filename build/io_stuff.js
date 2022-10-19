"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users_et_socket = exports["default"] = void 0;

var _socket = _interopRequireDefault(require("socket.io"));

var _ds_conn = require("./conn/ds_conn");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var users_et_socket = new Object();
exports.users_et_socket = users_et_socket;
var sockets_et_users = new Object();
var active_chats = new Object();

var IO = function IO(server) {
  var io = (0, _socket["default"])(server);
  io.on("connection", function (socket) {
    socket.emit("user_id", socket.id);
    socket.on("user_id_return", function (_ref) {
      var user = _ref.user;
      users_et_socket[user] = socket;
      sockets_et_users[socket.id] = user;
    });
    socket.on("is_typing", function (_ref2) {
      var to = _ref2.to,
          chat = _ref2.chat;
      var user_sock = users_et_socket[to];
      user_sock && user_sock.emit("is_typing", chat);
    });
    socket.on("not_typing", function (_ref3) {
      var to = _ref3.to,
          chat = _ref3.chat;
      var user_sock = users_et_socket[to];
      user_sock && user_sock.emit("not_typing", chat);
    });
    socket.on("message", function (_ref4) {
      var to = _ref4.to,
          message = _ref4.message;
      var user_sock = users_et_socket[to];
      var offer = message.offer,
          onsale = message.onsale,
          chat;
      chat = active_chats[message.chat];

      if (!chat) {
        chat = _ds_conn.CHATS.readone(message.chat, {
          subfolder: offer
        });
        active_chats[chat._id] = chat;
      }

      var res = _ds_conn.MESSAGES.write(message);

      message._id = res._id;
      message.created = res.created;
      message.updated = res.updated;
      if (user_sock) user_sock.emit("new_message", message);else {
        var offer_ = _ds_conn.OFFERS.readone({
          _id: offer,
          onsale: onsale
        }),
            offer_update;

        if (offer_.user._id === to) offer_update = {
          buyer_new_messages: {
            $inc: 1
          }
        };else offer_update = {
          seller_new_messages: {
            $inc: 1
          }
        };

        _ds_conn.OFFERS.update({
          _id: offer,
          onsale: onsale
        }, offer_update);
      }
    });
    socket.on("disconnect", function () {
      delete users_et_socket[sockets_et_users[socket.id]];
      delete sockets_et_users[socket.id];
    });
  });
};

var _default = IO;
exports["default"] = _default;