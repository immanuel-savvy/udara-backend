import {
  chat,
  messages,
  new_chat,
  clear_new_messages,
  new_message,
} from "./route_handlers/chats";
import {
  account_verification,
  forgot_password,
  get_verification_detail,
  logging_in,
  onboardings,
  request_otp,
  unverified_details,
  update_password,
  update_phone,
  update_user_data,
  user_refresh,
  verify_account,
  verify_email,
  verify_otp,
} from "./route_handlers/entry";
import {
  notifications,
  notifications_seen,
} from "./route_handlers/notifications";
import {
  username_updated,
  change_password,
  get_code_by_country,
  currencies,
  get_conversion_rates,
} from "./route_handlers/settings";
import {
  direct_message,
  on_chat,
  on_message_write,
  on_offer,
  on_offer_update,
} from "./route_handlers/socket";
import { country_codes, purposes } from "./route_handlers/utils";
import {
  place_sale,
  onsale,
  onsale_currency,
  remove_sale,
  topup,
  transactions,
  withdraw,
  update_fav_currency,
  like_sale,
  dislike_sale,
  onsale_offers,
  make_offer,
  offer,
  my_offers,
  accept_offer,
  decline_offer,
  remove_offer,
  deposit_to_escrow,
  fulfil_offer,
  confirm_offer,
  extend_time,
  request_time_extension,
  transaction_offer,
  offer_in_dispute,
  my_sales,
  resolve_dispute,
  dispute,
  disputes,
  refund_buyer,
  paga_deposit,
  add_fiat_account,
  request_account_details,
  add_bank_account,
  remove_bank_account,
  bank_accounts,
  get_banks,
  refresh_wallet,
  buyer_offers,
  state_offer_need,
  brass_callback,
  resolve_bank_account_name,
  user_brass_account,
  paycheck_bank_account,
} from "./route_handlers/wallet";

const routes = (app) => {
  /* GET */
  app.get("/onboardings", onboardings);
  app.get("/user_refresh/:user", user_refresh);
  app.get("/onsale_currency/:onsale", onsale_currency);
  app.get("/country_codes", country_codes);
  app.get("/currencies", currencies);
  app.get("/purposes", purposes);
  app.get("/refresh_wallet/:wallet", refresh_wallet);
  app.get("/dispute/:offer", dispute);
  app.get("/bank_accounts/:user", bank_accounts);
  app.get("/onsale_offers/:onsale/:status", onsale_offers);
  app.get("/conversion_rates", get_conversion_rates);
  app.get("/get_banks", get_banks);
  app.get("/paycheck_bank_account", paycheck_bank_account);
  app.get("/user_brass_account/:user", user_brass_account);
  app.get("/get_verification_detail/:user", get_verification_detail);
  app.get("/get_code_by_country/:country", get_code_by_country);

  /* POST */
  app.post("/add_bank_account", add_bank_account);
  app.post("/remove_bank_account", remove_bank_account);
  app.post("/request_otp", request_otp);
  app.post("/verify_otp", verify_otp);
  app.post("/buyer_offers", buyer_offers);
  app.post("/update_phone", update_phone);
  app.post("/update_password", update_password);
  app.post("/forgot_password", forgot_password);
  app.post("/verify_email", verify_email);
  app.post("/logging_in", logging_in);
  app.post("/state_offer_need", state_offer_need);
  app.post("/onsale", onsale);
  app.post("/topup", topup);
  app.post("/dislike_sale", dislike_sale);
  app.post("/like_sale", like_sale);
  app.post("/withdraw", withdraw);
  app.post("/place_sale", place_sale);
  app.post("/make_offer", make_offer);
  app.post("/offer", offer);
  app.post("/remove_offer", remove_offer);
  app.post("/chat", chat);
  app.post("/new_chat", new_chat);
  app.post("/messages", messages);
  app.post("/my_offers", my_offers);
  app.post("/disputes", disputes);
  app.post("/clear_new_messages", clear_new_messages);
  app.post("/accept_offer", accept_offer);
  app.post("/fulfil_offer", fulfil_offer);
  app.post("/deposit_to_escrow", deposit_to_escrow);
  app.post("/confirm_offer", confirm_offer);
  app.post("/decline_offer", decline_offer);
  app.post("/offer_in_dispute", offer_in_dispute);
  app.post("/resolve_dispute", resolve_dispute);
  app.post("/extend_time", extend_time);
  app.post("/request_time_extension", request_time_extension);
  app.post("/refund_buyer", refund_buyer);
  app.post("/remove_sale", remove_sale);
  app.post("/transactions", transactions);
  app.post("/transaction_offer", transaction_offer);
  app.post("/update_fav_currency", update_fav_currency);
  app.post("/username_updated", username_updated);
  app.post("/change_password/:user", change_password);
  app.post("/my_sales/:seller", my_sales);
  app.post("/add_fiat_account", add_fiat_account);
  app.post("/new_message", new_message);
  app.post("/direct_message", direct_message);
  app.post("/account_verification", account_verification);
  app.post("/unverified_details", unverified_details);
  app.post("/verify_account/:detail", verify_account);
  app.post("/notifications/:user", notifications);
  app.post("/notifications_seen/:user", notifications_seen);
  app.post("/update_user_data", update_user_data);

  // Paga Web hook
  app.post("/paga_deposit/:user", paga_deposit);
  app.post("/request_account_details", request_account_details);

  // Socket webpoints
  app.post("/on_chat", on_chat);
  app.post("/on_message_write", on_message_write);
  app.post("/on_offer", on_offer);
  app.post("/on_offer_update", on_offer_update);

  // Brass
  app.post("/brass_callback", brass_callback);
  app.post("/resolve_bank_account_name", resolve_bank_account_name);
};

export default routes;
