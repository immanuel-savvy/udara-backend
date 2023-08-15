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
  ADMINS,
  UTILS,
  PAYMENT_ACCOUNTS,
  FIAT_ACCOUNTS,
  DISPUTES,
  LOGS,
  BANK_ACCOUNTS,
  MY_OFFERS,
  VERIFICATION_DETAILS,
  OFFER_NEED,
  BRASS_SUBACCOUNTS,
  PENDING_TRANSACTIONS,
  CONTACT_MESSAGES,
  NOTIFICATIONS,
  gds;

let ds_conn = () => {
  gds = new GDS("udara");
  gds.sync();

  USERS = gds.folder("users");
  BRASS_SUBACCOUNTS = gds.folder("brass_subaccounts");
  WALLETS = gds.folder("wallets", null, "brass_account");
  TRANSACTIONS = gds.folder("transactions", "wallet");
  CHATS = gds.folder("chats", "offer");
  LOGS = gds.folder("logs");
  CONTACT_MESSAGES = gds.folder("contact_messages");
  PENDING_TRANSACTIONS = gds.folder("pending_transactions", null, "user");
  MESSAGES = gds.folder("messages", "chat", "attachment");
  HASHES = gds.folder("hashes", "user");
  ONBOARDINGS = gds.folder("onboardings");
  MY_OFFERS = gds.folder("my_offers", "user", new Array("onsale", "offer"));
  ADMINS = gds.folder("admins", null, "user");
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
  CONTACT_MESSAGES,
  WALLETS,
  TRANSACTIONS,
  HASHES,
  PENDING_TRANSACTIONS,
  ADMINS,
  ONBOARDINGS,
  NOTIFICATIONS,
  CHATS,
  BRASS_SUBACCOUNTS,
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
