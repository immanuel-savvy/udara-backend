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

export { on_chat, on_offer, on_offer_update, on_message_write };
