import { CHATS, MESSAGES, OFFERS } from "../conn/ds_conn";
import { generate_reference_number } from "./entry";
import fs from "fs";
import { new_notification } from "./wallet";

const on_chat = (req, res) => {
  let { chat, offer, user } = req.body;

  res.json({ data: CHATS.readone({ _id: chat, user }, { subfolder: offer }) });
};

const on_message_write = (req, res) => {
  let { message } = req.body;

  try {
    if (message.attachment && message.attachment.length) {
      let filename = `${generate_reference_number()}.jpg`;

      fs.writeFileSync(
        `${__dirname
          .split("/")
          .slice(0, -1)
          .join("/")}/Assets/Images/${filename}`,
        Buffer.from(message.attachment[0], "base64")
      );
      message.attachment[0] = filename;
    }
  } catch (e) {}

  let result = MESSAGES.write(message);
  message._id = result._id;

  new_notification(
    message.to,
    `New Message request in Offer`,
    new Array(message.offer, message.onsale, message.chat, message._id),
    { currency: message.currency }
  );

  res.json({ data: result });
};

const on_offer = (req, res) => {
  let { offer, onsale } = req.body;

  res.json({ data: OFFERS.readone({ _id: offer, onsale }) });
};

const on_offer_update = (req, res) => {
  let { offer, onsale, currency, message, chat, offer_update, notify } =
    req.body;

  new_notification(
    notify,
    `New message`,
    new Array(message, chat, offer, onsale),
    { currency }
  );

  res.json({ data: OFFERS.update({ _id: offer, onsale }, offer_update) });
};

const direct_message = (req, res) => {
  let payload = req.body;

  let { chat, message } = payload;
  let { offer, onsale, currency } = message;

  if (!chat) {
    on_chat(
      {
        body: {
          chat: message.chat,
          user: message.to === platform_id ? message.from : message.to,
          onsale,
          offer,
        },
      },
      { json: (d) => d && d.data }
    );
  }
  let resp =
    on_message_write({ body: { message } }, { json: (d) => d && d.data }) || {};
  message._id = resp._id;
  message.created = resp.created;
  message.updated = resp.updated;

  res.end();
};

export { on_chat, on_offer, on_offer_update, on_message_write, direct_message };
