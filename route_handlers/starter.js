import { HASHES, USERS, WALLETS } from "../conn/ds_conn";
import { platform_user, platform_wallet } from "./wallet";

const conversion_rates = new Object();

const refresh_conversion_rates = async () => {};

const create_platform_wallet = async () => {
  WALLETS.write({
    _id: platform_wallet,
    naira: 0,
    profits: 0,
    user: platform_user,
  });
  USERS.write({
    username: "admin",
    firstname: "admin",
    lastname: "udara",
    email: "admin@udaralinksapp.com",
    country: "nigeria",
    country_code: "+234",
    _id: platform_user,
    wallet: platform_wallet,
  });

  HASHES.write({ user: platform_user, hash: "admin3000" });

  refresh_conversion_rates();
};

export { create_platform_wallet, conversion_rates, refresh_conversion_rates };
