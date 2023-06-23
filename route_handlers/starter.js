import { BANK_ACCOUNTS, HASHES, USERS, WALLETS } from "../conn/ds_conn";
import { create_brass_subaccount } from "./entry";
import {
  platform_bank_account,
  platform_user,
  platform_wallet,
} from "./wallet";

const conversion_rates = new Object();

const refresh_conversion_rates = async () => {};

const create_platform_wallet = async () => {
  let admin;

  if (!WALLETS.readone(platform_wallet)) {
    WALLETS.write({
      _id: platform_wallet,
      naira: 0,
      profits: 0,
      user: platform_user,
    });
    admin = {
      username: "admin",
      firstname: "admin",
      lastname: "udara",
      email: "admin@udaralinksapp.com",
      country: "nigeria",
      country_code: "+234",
      is_admin: true,
      _id: platform_user,
      wallet: platform_wallet,
    };
  }
  !USERS.readone(platform_user) &&
    create_brass_subaccount(admin.username, admin._id);

  USERS.write(admin);

  HASHES.write({ user: platform_user, hash: "admin3000" });

  !BANK_ACCOUNTS.readone({ user: platform_user, _id: platform_bank_account }) &&
    BANK_ACCOUNTS.write({
      bank: "035",
      bank_name: "Wema Bank",
      bank_id: "bnk_2VuZw1v8QFXh3ragc2qaVm",
      account_name: "UDARALINKS LIMITED",
      account_number: "8216931828",
      user: platform_user,
      _id: platform_bank_account,
    });
};

export { create_platform_wallet, conversion_rates, refresh_conversion_rates };
