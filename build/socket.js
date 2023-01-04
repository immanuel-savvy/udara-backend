"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on_offer_update = exports.on_offer = exports.on_message_write = exports.on_chat = void 0;

var _ds_conn = require("../conn/ds_conn");

var _entry = require("./entry");

var _fs = _interopRequireDefault(require("fs"));

var _wallet = require("./wallet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var on_chat = function on_chat(req, res) {
  var _req$body = req.body,
      chat = _req$body.chat,
      offer = _req$body.offer;
  res.json({
    data: _ds_conn.CHATS.readone(chat, {
      subfolder: offer
    })
  });
};

exports.on_chat = on_chat;

var on_message_write = function on_message_write(req, res) {
  var message = req.body.message;

  try {
    if (message.attachment && message.attachment.length) {
      var filename = "".concat((0, _entry.generate_reference_number)(), ".jpg");

      _fs["default"].writeFileSync("".concat(__dirname.split("/").slice(0, -1).join("/"), "/Assets/Images/").concat(filename), Buffer.from(message.attachment[0], "base64"));

      message.attachment[0] = filename;
    }
  } catch (e) {}

  var result = _ds_conn.MESSAGES.write(message);

  res.json({
    data: result
  });
};

exports.on_message_write = on_message_write;

var on_offer = function on_offer(req, res) {
  var _req$body2 = req.body,
      offer = _req$body2.offer,
      onsale = _req$body2.onsale;
  res.json({
    data: _ds_conn.OFFERS.readone({
      _id: offer,
      onsale: onsale
    })
  });
};

exports.on_offer = on_offer;

var on_offer_update = function on_offer_update(req, res) {
  var _req$body3 = req.body,
      offer = _req$body3.offer,
      onsale = _req$body3.onsale,
      currency = _req$body3.currency,
      message = _req$body3.message,
      chat = _req$body3.chat,
      offer_update = _req$body3.offer_update,
      notify = _req$body3.notify;
  (0, _wallet.new_notification)(notify, "New message", new Array(message, chat, offer, onsale), {
    currency: currency
  });
  res.json({
    data: _ds_conn.OFFERS.update({
      _id: offer,
      onsale: onsale
    }, offer_update)
  });
};

exports.on_offer_update = on_offer_update;