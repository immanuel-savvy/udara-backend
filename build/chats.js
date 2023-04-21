"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.new_message = exports.new_chat = exports.messages = exports.clear_new_messages = exports.chat = void 0;

var _ds_conn = require("../conn/ds_conn");

var _fs = _interopRequireDefault(require("fs"));

var _entry = require("./entry");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var new_chat = function new_chat(req, res) {
  var _req$body = req.body,
      offer = _req$body.offer,
      from = _req$body.from,
      to = _req$body.to;
  var chat = {
    offer: offer,
    from: from,
    to: to
  };
  chat.user = new Array(from, to);

  var result = _ds_conn.CHATS.write(chat);

  if (!result) res.json({
    ok: false,
    message: "unable to write chat"
  });
  chat._id = result._id;
  chat.created = result.created;
  chat.updated = result.updated;
  res.json({
    ok: true,
    message: "chat created",
    data: chat
  });
};

exports.new_chat = new_chat;

var new_message = function new_message(req, res) {
  var message = req.body.message;

  if (message.attachment) {
    var filename = "".concat((0, _entry.generate_reference_number)(), ".jpg");

    _fs["default"].writeFileSync("".concat(__dirname.split("/").slice(0, -1).join("/"), "/Assets/Images/").concat(filename), Buffer.from(message.attachment[0]), "base64");

    message.attachment[0] = filename;
  }

  var result = _ds_conn.MESSAGES.write(message, {
    subfolder: message.chat
  });

  message._id = result._id;
  message.created = result.created;
  message.updated = result.updated;
  res.json({
    ok: true,
    message: "Messages appended",
    data: message
  });
};

exports.new_message = new_message;

var clear_new_messages = function clear_new_messages(req, res) {
  var _req$body2 = req.body,
      offer = _req$body2.offer,
      onsale = _req$body2.onsale,
      user = _req$body2.user;

  var offer_ = _ds_conn.OFFERS.readone({
    _id: offer,
    onsale: onsale
  }),
      offer_update;

  if (!offer_) return res.json({
    ok: false
  });
  if (offer_.user._id === user) offer_update = {
    buyer_new_messages: 0
  };else offer_update = {
    seller_new_messages: 0
  };

  _ds_conn.OFFERS.update({
    _id: offer,
    onsale: onsale
  }, offer_update);

  res.json({
    ok: true,
    message: "Messages seen",
    data: offer
  });
};

exports.clear_new_messages = clear_new_messages;

var chat = function chat(req, res) {
  var _req$body3 = req.body,
      offer = _req$body3.offer,
      user = _req$body3.user;

  var chat = _ds_conn.CHATS.readone({
    offer: offer,
    user: user
  });

  res.json({
    ok: true,
    message: "chat fetched",
    data: chat
  });
};

exports.chat = chat;

var messages = function messages(req, res) {
  var _req$body4 = req.body,
      chat = _req$body4.chat,
      user = _req$body4.user,
      reset_pager = _req$body4.reset_pager;

  var messages = _ds_conn.MESSAGES.read({
    chat: chat
  }, {
    limit: 10,
    paging: "".concat(chat, "_").concat(user),
    reset_pager: reset_pager,
    reverse: true
  });

  res.json({
    ok: true,
    message: "messages fetched",
    data: messages
  });
};

exports.messages = messages;