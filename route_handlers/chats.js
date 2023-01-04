import { CHATS, MESSAGES, OFFERS } from "../conn/ds_conn";
import fs from "fs";
import { generate_reference_number } from "./entry";
import { new_notification } from "./wallet";

const new_chat = (req, res) => {
  let { offer, from, to } = req.body;
  let chat = { offer, from, to };

  chat.user = new Array(from, to);
  let result = CHATS.write(chat);

  if (!result) res.json({ ok: false, message: "unable to write chat" });

  chat._id = result._id;
  chat.created = result.created;
  chat.updated = result.updated;

  res.json({ ok: true, message: "chat created", data: chat });
};

const new_message = (req, res) => {
  let { message } = req.body;

  if (message.attachment) {
    let filename = `${generate_reference_number()}.jpg`;
    fs.writeFileSync(
      `${__dirname
        .split("/")
        .slice(0, -1)
        .join("/")}/Assets/Images/${filename}`,
      Buffer.from(message.attachment[0]),
      "base64"
    );
    message.attachment[0] = filename;
  }
  let result = MESSAGES.write(message, { subfolder: message.chat });
  message._id = result._id;
  message.created = result.created;
  message.updated = result.updated;

  res.json({ ok: true, message: "Messages appended", data: message });
};

const clear_new_messages = (req, res) => {
  let { offer, onsale, user } = req.body;
  let offer_ = OFFERS.readone({ _id: offer, onsale }),
    offer_update;
  if (!offer_) return res.json({ ok: false });

  if (offer_.user._id === user) offer_update = { buyer_new_messages: 0 };
  else offer_update = { seller_new_messages: 0 };

  OFFERS.update({ _id: offer, onsale }, offer_update);

  res.json({ ok: true, message: "Messages seen", data: offer });
};

const chat = (req, res) => {
  let { offer, user } = req.body;

  let chat = CHATS.readone({ offer, user });

  res.json({ ok: true, message: "chat fetched", data: chat });
};

const messages = (req, res) => {
  let { chat, user, reset_pager } = req.body;

  let messages = MESSAGES.read(
    { chat },
    {
      limit: 10,
      paging: `${chat}_${user}`,
      reset_pager,
      reverse: true,
    }
  );

  res.json({ ok: true, message: "messages fetched", data: messages });
};

export { messages, chat, new_chat, clear_new_messages, new_message };
