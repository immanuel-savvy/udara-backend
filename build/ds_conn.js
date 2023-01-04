"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WALLETS = exports.VERIFICATION_DETAILS = exports.UTILS = exports.USERS = exports.TRANSACTIONS = exports.PAYMENT_ACCOUNTS = exports.ONSALE = exports.ONBOARDINGS = exports.OFFERS = exports.NOTIFICATIONS = exports.MY_OFFERS = exports.MESSAGES = exports.LOGS = exports.HASHES = exports.FIAT_ACCOUNTS = exports.DISPUTES = exports.CHATS = exports.BANK_ACCOUNTS = void 0;

var _generalisedDatastore = _interopRequireDefault(require("generalised-datastore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var USERS, WALLETS, TRANSACTIONS, OFFERS, ONSALE, HASHES, CHATS, MESSAGES, ONBOARDINGS, UTILS, PAYMENT_ACCOUNTS, FIAT_ACCOUNTS, DISPUTES, LOGS, BANK_ACCOUNTS, MY_OFFERS, VERIFICATION_DETAILS, NOTIFICATIONS, gds;
exports.NOTIFICATIONS = NOTIFICATIONS;
exports.VERIFICATION_DETAILS = VERIFICATION_DETAILS;
exports.MY_OFFERS = MY_OFFERS;
exports.BANK_ACCOUNTS = BANK_ACCOUNTS;
exports.LOGS = LOGS;
exports.DISPUTES = DISPUTES;
exports.FIAT_ACCOUNTS = FIAT_ACCOUNTS;
exports.PAYMENT_ACCOUNTS = PAYMENT_ACCOUNTS;
exports.UTILS = UTILS;
exports.ONBOARDINGS = ONBOARDINGS;
exports.MESSAGES = MESSAGES;
exports.CHATS = CHATS;
exports.HASHES = HASHES;
exports.ONSALE = ONSALE;
exports.OFFERS = OFFERS;
exports.TRANSACTIONS = TRANSACTIONS;
exports.WALLETS = WALLETS;
exports.USERS = USERS;

var ds_conn = function ds_conn() {
  gds = new _generalisedDatastore["default"]("udara");
  gds.sync();
  exports.USERS = USERS = gds.folder("users");
  exports.WALLETS = WALLETS = gds.folder("wallets");
  exports.TRANSACTIONS = TRANSACTIONS = gds.folder("transactions", "wallet");
  exports.CHATS = CHATS = gds.folder("chats", "offer");
  exports.LOGS = LOGS = gds.folder("logs");
  exports.MESSAGES = MESSAGES = gds.folder("messages", "chat", "attachment");
  exports.HASHES = HASHES = gds.folder("hashes", "user");
  exports.ONBOARDINGS = ONBOARDINGS = gds.folder("onboardings");
  exports.MY_OFFERS = MY_OFFERS = gds.folder("my_offers", "user", new Array("onsale", "offer"));
  exports.ONSALE = ONSALE = gds.folder("onsale", "currency", "seller");
  exports.OFFERS = OFFERS = gds.folder("offers", "onsale", "user");
  exports.DISPUTES = DISPUTES = gds.folder("disputes", "offer", "offer");
  exports.PAYMENT_ACCOUNTS = PAYMENT_ACCOUNTS = gds.folder("payment_accounts");
  exports.BANK_ACCOUNTS = BANK_ACCOUNTS = gds.folder("bank_account", "user");
  exports.NOTIFICATIONS = NOTIFICATIONS = gds.folder("notifications", "user");
  exports.FIAT_ACCOUNTS = FIAT_ACCOUNTS = gds.folder("fiat_accounts", "user");
  exports.VERIFICATION_DETAILS = VERIFICATION_DETAILS = gds.folder("verification_details");
  exports.UTILS = UTILS = gds.folder("utils", "util");
  console.log("Datastore is ready.");
  return;
};

var _default = ds_conn;
exports["default"] = _default;