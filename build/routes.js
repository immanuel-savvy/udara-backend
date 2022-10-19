"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chats = require("./route_handlers/chats");

var _entry = require("./route_handlers/entry");

var _settings = require("./route_handlers/settings");

var _utils = require("./route_handlers/utils");

var _wallet = require("./route_handlers/wallet");

var routes = function routes(app) {
  /* GET */
  app.get("/onboardings", _entry.onboardings);
  app.get("/user_refresh/:user", _entry.user_refresh);
  app.get("/onsale_currency/:onsale", _wallet.onsale_currency);
  app.get("/country_codes", _utils.country_codes);
  app.get("/currencies", _settings.currencies);
  app.get("/dispute/:offer", _wallet.dispute);
  app.get("/onsale_offers/:onsale/:status", _wallet.onsale_offers);
  app.get("/conversion_rates", _settings.get_conversion_rates);
  app.get("/get_code_by_country/:country", _settings.get_code_by_country);
  /* POST */

  app.post("/request_otp", _entry.request_otp);
  app.post("/verify_otp", _entry.verify_otp);
  app.post("/update_phone", _entry.update_phone);
  app.post("/update_password", _entry.update_password);
  app.post("/logging_in", _entry.logging_in);
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
  app.post("/add_fiat_account", _wallet.add_fiat_account); // Paga Web hook

  app.post("/paga_deposit", _wallet.paga_deposit);
};

var _default = routes;
exports["default"] = _default;