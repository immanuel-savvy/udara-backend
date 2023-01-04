import {
  MESSAGES,
  NOTIFICATIONS,
  OFFERS,
  ONSALE,
  USERS,
  VERIFICATION_DETAILS,
} from "../conn/ds_conn";

const clean_notification_data = (data) => {
  let offers = new Array(),
    onsales = new Array(),
    messages = new Array(),
    chats = new Array(),
    verifications = new Array(),
    currencies = new Array();

  data.map((datum) => {
    datum.data.map((d) => {
      if (d.startsWith("offer")) offers.push(d);
      else if (d.startsWith("onsale")) onsales.push(d);
      else if (d.startsWith("message")) messages.push(d);
      else if (d.startsWith("chat")) chats.push(d);
      else if (d.startsWith("verification")) verifications.push(d);
    });
    datum.metadata && currencies.push(datum.metadata.currency);
  });

  offers = OFFERS.read(offers, { subfolder: onsales });
  onsales = ONSALE.read(onsales, { subfolder: currencies });
  messages = MESSAGES.read(messages, { subfolder: chats });
  verifications = VERIFICATION_DETAILS.read(verifications);

  data = data.map((datum) => {
    datum.data = datum.data.map((d) => {
      if (d.startsWith("offer")) d = offers.find((offer) => offer._id === d);
      else if (d.startsWith("onsale"))
        d = onsales.find((onsale) => onsale._id === d);
      else if (d.startsWith("message"))
        d = messages.find((message) => message._id === d);
      else if (d.startsWith("verification"))
        d = verifications.finc((verify) => verify._id === d);

      return d;
    });
    return datum;
  });

  return data;
};

const notifications = (req, res) => {
  let { limit, skip } = req.body;
  let { user } = req.params;

  let data = NOTIFICATIONS.read({ user }, { limit, skip });

  data = clean_notification_data(data);

  res.json({ ok: true, message: "Notifications retrived", data });
};

const notifications_seen = (req, res) => {
  let { user } = req.params;

  USERS.update(user, { new_notification: 0 });

  res.end();
};

export { notifications, notifications_seen };
