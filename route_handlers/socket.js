import { CHATS, MESSAGES, OFFERS } from "../conn/ds_conn";
import { generate_reference_number } from "./entry";
import fs from "fs";

const on_chat = (req, res) => {
  let { chat, offer } = req.body;

  res.json({ data: CHATS.readone(chat, { subfolder: offer }) });
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

  res.json({ data: MESSAGES.write(message) });
};

const on_offer = (req, res) => {
  let { offer, onsale } = req.body;

  res.json({ data: OFFERS.readone({ _id: offer, onsale }) });
};

const on_offer_update = (req, res) => {
  let { offer, onsale, offer_update } = req.body;

  res.json({ data: OFFERS.update({ _id: offer, onsale }, offer_update) });
};

export { on_chat, on_offer, on_offer_update, on_message_write };
