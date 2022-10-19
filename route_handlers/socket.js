import { CHATS, MESSAGES, OFFERS } from "../conn/ds_conn";

const on_chat = (req, res) => {
  let { chat, offer } = req.body;

  res.json({ data: CHATS.readone(chat, { subfolder: offer }) });
};

const on_message_write = (req, res) => {
  let { message } = req.body;

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
