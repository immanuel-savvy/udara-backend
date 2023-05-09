"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chats = require("./route_handlers/chats");

var _entry = require("./route_handlers/entry");

var _notifications = require("./route_handlers/notifications");

var _settings = require("./route_handlers/settings");

var _socket = require("./route_handlers/socket");

var _utils = require("./route_handlers/utils");

var _wallet = require("./route_handlers/wallet");

var routes = function routes(app) {
  /* GET */
  app.get("/onboardings", _entry.onboardings);
  app.get("/user_refresh/:user", _entry.user_refresh);
  app.get("/onsale_currency/:onsale", _wallet.onsale_currency);
  app.get("/country_codes", _utils.country_codes);
  app.get("/currencies", _settings.currencies);
  app.get("/purposes", _utils.purposes);
  app.get("/refresh_wallet/:wallet", _wallet.refresh_wallet);
  app.get("/dispute/:offer", _wallet.dispute);
  app.get("/bank_accounts/:user", _wallet.bank_accounts);
  app.get("/onsale_offers/:onsale/:status", _wallet.onsale_offers);
  app.get("/conversion_rates", _settings.get_conversion_rates);
  app.get("/get_banks", _wallet.get_banks);
  app.get("/paycheck_bank_account", _wallet.paycheck_bank_account);
  app.get("/user_brass_account/:user", _wallet.user_brass_account);
  app.get("/get_verification_detail/:user", _entry.get_verification_detail);
  app.get("/get_code_by_country/:country", _settings.get_code_by_country);
  /* POST */

  app.post("/add_bank_account", _wallet.add_bank_account);
  app.post("/remove_bank_account", _wallet.remove_bank_account);
  app.post("/request_otp", _entry.request_otp);
  app.post("/verify_otp", _entry.verify_otp);
  app.post("/buyer_offers", _wallet.buyer_offers);
  app.post("/update_phone", _entry.update_phone);
  app.post("/update_password", _entry.update_password);
  app.post("/forgot_password", _entry.forgot_password);
  app.post("/verify_email", _entry.verify_email);
  app.post("/logging_in", _entry.logging_in);
  app.post("/state_offer_need", _wallet.state_offer_need);
  app.post("/onsale", _wallet.onsale);
  app.post("/topup", _wallet.topup);
  app.post("/dislike_sale", _wallet.dislike_sale);
  app.post("/like_sale", _wallet.like_sale);
  app.post("/withdraw", _wallet.withdraw);
  app.post("/place_sale", _wallet.place_sale);
  app.post("/make_offer", _wallet.make_offer);
  app.post("/offer", _wallet.offer);
  app.post("/remove_offer", _wallet.remove_offer);
  app.post("/chat", _chats.chat);
  app.post("/new_chat", _chats.new_chat);
  app.post("/messages", _chats.messages);
  app.post("/my_offers", _wallet.my_offers);
  app.post("/disputes", _wallet.disputes);
  app.post("/clear_new_messages", _chats.clear_new_messages);
  app.post("/accept_offer", _wallet.accept_offer);
  app.post("/fulfil_offer", _wallet.fulfil_offer);
  app.post("/deposit_to_escrow", _wallet.deposit_to_escrow);
  app.post("/confirm_offer", _wallet.confirm_offer);
  app.post("/decline_offer", _wallet.decline_offer);
  app.post("/offer_in_dispute", _wallet.offer_in_dispute);
  app.post("/resolve_dispute", _wallet.resolve_dispute);
  app.post("/extend_time", _wallet.extend_time);
  app.post("/request_time_extension", _wallet.request_time_extension);
  app.post("/refund_buyer", _wallet.refund_buyer);
  app.post("/remove_sale", _wallet.remove_sale);
  app.post("/transactions", _wallet.transactions);
  app.post("/transaction_offer", _wallet.transaction_offer);
  app.post("/update_fav_currency", _wallet.update_fav_currency);
  app.post("/username_updated", _settings.username_updated);
  app.post("/change_password/:user", _settings.change_password);
  app.post("/my_sales/:seller", _wallet.my_sales);
  app.post("/add_fiat_account", _wallet.add_fiat_account);
  app.post("/new_message", _chats.new_message);
  app.post("/direct_message", _socket.direct_message);
  app.post("/account_verification", _entry.account_verification);
  app.post("/unverified_details", _entry.unverified_details);
  app.post("/verify_account/:detail", _entry.verify_account);
  app.post("/notifications/:user", _notifications.notifications);
  app.post("/notifications_seen/:user", _notifications.notifications_seen);
  app.post("/update_user_data", _entry.update_user_data);
  app.post("/ready_for_transaction", _wallet.ready_for_transaction);
  app.post("/not_ready_for_transaction", _wallet.not_ready_for_transaction); 
  
  // Paga Web hook
  app.post("/paga_deposit/:user", _wallet.paga_deposit);
  app.post("/request_account_details", _wallet.request_account_details); // Socket webpoints

  app.post("/on_chat", _socket.on_chat);
  app.post("/on_message_write", _socket.on_message_write);
  app.post("/on_offer", _socket.on_offer);
  app.post("/on_offer_update", _socket.on_offer_update); // Brass

  app.post("/brass_callback", _wallet.brass_callback);
  app.post("/resolve_bank_account_name", _wallet.resolve_bank_account_name);
};

var _default = routes;
exports["default"] = _default;