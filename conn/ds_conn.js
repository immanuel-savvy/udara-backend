import GDS from "generalised-datastore";

let USERS,
  WALLETS,
  TRANSACTIONS,
  OFFERS,
  ONSALE,
  HASHES,
  CHATS,
  MESSAGES,
  ONBOARDINGS,
  UTILS,
  PAYMENT_ACCOUNTS,
  FIAT_ACCOUNTS,
  DISPUTES,
  LOGS,
  BANK_ACCOUNTS,
  MY_OFFERS,
  VERIFICATION_DETAILS,
  OFFER_NEED,
  NOTIFICATIONS,
  gds;

let ds_conn = () => {
  gds = new GDS("udara");
  gds.sync();

  USERS = gds.folder("users");
  WALLETS = gds.folder("wallets");
  TRANSACTIONS = gds.folder("transactions", "wallet");
  CHATS = gds.folder("chats", "offer");
  LOGS = gds.folder("logs");
  MESSAGES = gds.folder("messages", "chat", "attachment");
  HASHES = gds.folder("hashes", "user");
  ONBOARDINGS = gds.folder("onboardings");
  MY_OFFERS = gds.folder("my_offers", "user", new Array("onsale", "offer"));
  ONSALE = gds.folder("onsale", "currency", "seller");
  OFFERS = gds.folder("offers", "onsale", ["user", "offer_need"]);
  DISPUTES = gds.folder("disputes", "offer", "offer");
  PAYMENT_ACCOUNTS = gds.folder("payment_accounts");
  BANK_ACCOUNTS = gds.folder("bank_account", "user");
  NOTIFICATIONS = gds.folder("notifications", "user");
  FIAT_ACCOUNTS = gds.folder("fiat_accounts", "user");
  OFFER_NEED = gds.folder("offer_need");
  VERIFICATION_DETAILS = gds.folder("verification_details");
  UTILS = gds.folder("utils", "util");

  console.log("Datastore is ready.");

  return;
};

export default ds_conn;
export {
  USERS,
  WALLETS,
  TRANSACTIONS,
  HASHES,
  ONBOARDINGS,
  NOTIFICATIONS,
  CHATS,
  MESSAGES,
  ONSALE,
  UTILS,
  DISPUTES,
  VERIFICATION_DETAILS,
  LOGS,
  MY_OFFERS,
  OFFERS,
  OFFER_NEED,
  PAYMENT_ACCOUNTS,
  FIAT_ACCOUNTS,
  BANK_ACCOUNTS,
};
