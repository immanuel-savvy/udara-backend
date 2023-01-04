"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notifications_seen = exports.notifications = void 0;

var _ds_conn = require("../conn/ds_conn");

var clean_notification_data = function clean_notification_data(data) {
  var offers = new Array(),
      onsales = new Array(),
      messages = new Array(),
      chats = new Array(),
      verifications = new Array(),
      currencies = new Array();
  data.map(function (datum) {
    datum.data.map(function (d) {
      if (d.startsWith("offer")) offers.push(d);else if (d.startsWith("onsale")) onsales.push(d);else if (d.startsWith("message")) messages.push(d);else if (d.startsWith("chat")) chats.push(d);else if (d.startsWith("verification")) verifications.push(d);
    });
    datum.metadata && currencies.push(datum.metadata.currency);
  });
  offers = _ds_conn.OFFERS.read(offers, {
    subfolder: onsales
  });
  onsales = _ds_conn.ONSALE.read(onsales, {
    subfolder: currencies
  });
  messages = _ds_conn.MESSAGES.read(messages, {
    subfolder: chats
  });
  verifications = _ds_conn.VERIFICATION_DETAILS.read(verifications);
  data = data.map(function (datum) {
    datum.data = datum.data.map(function (d) {
      if (d.startsWith("offer")) d = offers.find(function (offer) {
        return offer._id === d;
      });else if (d.startsWith("onsale")) d = onsales.find(function (onsale) {
        return onsale._id === d;
      });else if (d.startsWith("message")) d = messages.find(function (message) {
        return message._id === d;
      });else if (d.startsWith("verification")) d = verifications.finc(function (verify) {
        return verify._id === d;
      });
      return d;
    });
    return datum;
  });
  return data;
};

var notifications = function notifications(req, res) {
  var _req$body = req.body,
      limit = _req$body.limit,
      skip = _req$body.skip;
  var user = req.params.user;

  var data = _ds_conn.NOTIFICATIONS.read({
    user: user
  }, {
    limit: limit,
    skip: skip
  });

  data = clean_notification_data(data);
  res.json({
    ok: true,
    message: "Notifications retrived",
    data: data
  });
};

exports.notifications = notifications;

var notifications_seen = function notifications_seen(req, res) {
  var user = req.params.user;

  _ds_conn.USERS.update(user, {
    new_notification: 0
  });

  res.end();
};

exports.notifications_seen = notifications_seen;