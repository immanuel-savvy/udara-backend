import {
  HASHES,
  ONBOARDINGS,
  PAYMENT_ACCOUNTS,
  USERS,
  UTILS,
  WALLETS,
} from "../conn/ds_conn";
import { paga_collection_client } from "../Udara";
import {
  generate_random_string,
  gen_random_int,
  phone_regex,
} from "../utils/functions";
import { send_otp } from "../utils/Services";
import { conversion_rates } from "./starter";

let pending_otps = new Object();
let operating_currencies, list_of_banks;

const load_operating_currencies = () => {
  if (!operating_currencies)
    operating_currencies = UTILS.read({ util: "operating_currencies" });

  if (!operating_currencies.length) {
    let operating_currencies = new Array(
      {
        name: "naira",
        icon: "naira_home_page.png",
        flag: "nigeria_flag_rectangle.png",
        alphabetic_name: "NGN",
        util: "operating_currencies",
      },
      {
        name: "euro",
        icon: "euro_icon.png",
        alphabetic_name: "EUR",
        flag: "",
        util: "operating_currencies",
      },
      {
        name: "pound",
        icon: "pound_icon.png",
        alphabetic_name: "POUND",
        flag: "",
        util: "operating_currencies",
      },
      {
        name: "dollar",
        icon: "dollar_icon.png",
        flag: "usa_flag_rectangle.png",
        alphabetic_name: "USD",
        util: "operating_currencies",
      }
    );
    UTILS.write(operating_currencies);
  }
  if (!ONBOARDINGS.readone())
    ONBOARDINGS.write_several(
      new Array(
        {
          icon: "onboarding_1.png",
          main_text: "best rates",
          sub_text:
            "Take advantage of our seamless peer to peer system to get Forex and make International Payments at best rates",
        },
        {
          icon: "onboarding_2.png",
          main_text: "Make International Payments",
          sub_text:
            "Easy way to find Forex to meet study, tourist and business payments.",
        },
        {
          icon: "onboarding_3.png",
          main_text: "Payment Secured",
          sub_text: "Your transactions are secured on the app with ease",
        }
      )
    );

  if (!list_of_banks) list_of_banks = UTILS.read({ util: "banks" });
  if (!list_of_banks.length) {
    let list_of_banks = new Array(
      { util: "banks", name: "Access Bank", code: "044" },
      { util: "banks", name: "Citibank", code: "023" },
      { util: "banks", name: "Diamond Bank", code: "063" },
      { util: "banks", name: "Dynamic Standard Bank", code: "" },
      { util: "banks", name: "Ecobank Nigeria", code: "050" },
      { util: "banks", name: "Fidelity Bank Nigeria", code: "070" },
      { util: "banks", name: "First Bank of Nigeria", code: "011" },
      { util: "banks", name: "First City Monument Bank", code: "214" },
      { util: "banks", name: "Guaranty Trust Bank", code: "058" },
      { util: "banks", name: "Heritage Bank Plc", code: "030" },
      { util: "banks", name: "Jaiz Bank", code: "301" },
      { util: "banks", name: "Keystone Bank Limited", code: "082" },
      { util: "banks", name: "Providus Bank Plc", code: "101" },
      { util: "banks", name: "Polaris Bank", code: "076" },
      {
        util: "banks",
        name: "Stanbic IBTC Bank Nigeria Limited",
        code: "221",
      },
      { util: "banks", name: "Standard Chartered Bank", code: "068" },
      { util: "banks", name: "Sterling Bank", code: "232" },
      { util: "banks", name: "Suntrust Bank Nigeria Limited", code: "100" },
      { util: "banks", name: "Union Bank of Nigeria", code: "032" },
      { util: "banks", name: "United Bank for Africa", code: "033" },
      { util: "banks", name: "Unity Bank Plc", code: "215" },
      { util: "banks", name: "Wema Bank", code: "035" },
      { util: "banks", name: "Zenith Bank", code: "057" }
    );
    UTILS.write(list_of_banks);
  }
  !UTILS.readone({ util: "purposes" }) &&
    UTILS.write_several(
      new Array(
        { title: "study", util: "purposes" },
        { title: "tourism", util: "purposes" },
        { title: "business", util: "purposes" },
        { title: "remittances", util: "purposes" },
        { title: "others", util: "purposes" }
      )
    );

  return operating_currencies;
};

const onboardings = (req, res) => {
  let onboardings = ONBOARDINGS.read();

  res.json({ data: onboardings, ok: true, message: "ok" });
};

const user_refresh = async (req, res) => {
  let { user } = req.params;
  let result = USERS.readone(user);
  if (!user || !result)
    return res.json({ ok: false, message: "user not found" });
  user = result;
  let wallet = WALLETS.readone(result.wallet);
  if (!wallet) {
    console.error("Wallet not found!!!");
  }
  wallet.conversion_rates = conversion_rates;
  wallet.currencies = load_operating_currencies();

  res.json({ ok: true, message: "ok", data: { user, wallet } });
};

const request_otp = async (req, res) => {
  let { phone } = req.body;
  if (!phone || !phone_regex.test(phone))
    return res.json({ ok: false, message: "phone field missing" });

  let user = USERS.readone({ phone });

  if (user && user.verified)
    return res.json({ ok: false, message: "phone already used", data: phone });

  let result = await send_otp(phone);

  if (result.sent) {
    pending_otps[phone] = result.code;
    res.json({ ok: true, message: "opt sent", data: phone });
  } else res.json({ ok: false, message: "opt not sent", data: phone });
};

const verify_otp = async (req, res) => {
  let { code, country, country_code, verify_later, phone } = req.body;
  if (!!USERS.readone({ phone }))
    return res.json({ ok: false, message: "phone already used", data: phone });

  let otp_code = pending_otps[phone];
  delete pending_otps[phone];

  if ((otp_code && otp_code === code) || verify_later) {
    let random_string = generate_random_string(gen_random_int(5, 3));
    let user = {
      username: `user-${random_string}`,
      phone,
      country,
      country_code,
      verified: !verify_later,
      created: Date.now(),
      updated: Date.now(),
    };
    let result = USERS.write(user);
    user._id = result._id;
    let wallet = { user: user._id, naira: 0, dollar: 0, pound: 0, euro: 0 };
    result = WALLETS.write(wallet);
    wallet._id = result._id;

    wallet.conversion_rates = conversion_rates;
    wallet.currencies = load_operating_currencies();

    USERS.update(user._id, { wallet: wallet._id });
    user.wallet = wallet._id;

    res.json({
      ok: true,
      message: "verification successful",
      data: { user, wallet },
    });
  } else
    res.json({
      ok: false,
      message: "verification failed",
      data: { phone, code },
    });
};

const update_phone = (req, res) => {
  let { phone, verify_later, user, code, country_code } = req.body;

  if (!USERS.readone(user))
    return res.json({ ok: false, message: "user does not exist", data: user });

  let otp_code = pending_otps[phone];
  delete pending_otps[phone];

  if ((otp_code && otp_code === code) || verify_later) {
    USERS.update(user, {
      phone,
      country: country_code.country,
      country_code: country_code.code,
      verified: !verify_later,
    });

    res.json({ ok: true, message: "user phone updated", data: user });
  }
};

const register_persistent_payment_reference = async (user) => {
  let user_obj = USERS.readone(user);

  let data = {
    referenceNumber: generate_random_string(14),
    phoneNumber: user_obj.phone,
    firstName: user.firstname,
    lastName: user.lastname,
    accountName: `${user_obj.firstname} ${user.lastname}`,
    accountReference: generate_random_string(12),
    callBackUrl: "https://mobile.udaralinksapp.com/paga_deposit",
  };

  let response = await paga_collection_client.registerPersistentPaymentAccount(
    data
  );
  let result = PAYMENT_ACCOUNTS.write({
    user,
    account_number: response.accountNumber,
    reference_number: data.referenceNumber,
    account_reference: data.accountReference,
    account_number: response.accountNumber,
  });
  USERS.update(user_obj._id, {
    payment_account: result._id,
    account_number: response.accountNumber,
  });

  console.log(response);
};

const update_password = async (req, res) => {
  let { user, key, new_user } = req.body;
  if (!user || !key)
    return res.json({ ok: false, message: "invalid credentials", data: user });

  if (new_user) {
    let response = await register_persistent_payment_reference(user);
    if (response.statusMessage !== "success")
      return res.json({
        ok: false,
        message: "cannot create persistent payment request",
        data: user,
      });
  }

  HASHES.update_several({ user }, { hash: key });
  let result = HASHES.write({ user, hash: key });
  if (result && result._id)
    res.json({ ok: true, message: "update successful", data: user });
};

const logging_in = async (req, res) => {
  let { phone, key } = req.body;

  let user = USERS.readone({ phone });
  let phone_pass = phone_regex.test(phone);
  if (!phone || !user) return res.json({ ok: false, data: "User not found" });
  else if (!key) return res.json({ ok: false, data: "Provide your password" });

  let pass = HASHES.readone({ user: user._id });
  if (!pass || pass.hash !== key)
    return res.json({ ok: false, data: "Invalid password" });

  USERS.update(user._id, { last_login: Date.now() });
  let wallet = WALLETS.readone(user.wallet);
  wallet.conversion_rates = conversion_rates;
  wallet.currencies = load_operating_currencies();

  if (!wallet) return res.json({ ok: false, data: "Cannot fetch wallet" });

  res.json({ ok: true, message: "loggedin", data: { user, wallet } });
};

export {
  onboardings,
  request_otp,
  verify_otp,
  user_refresh,
  update_password,
  update_phone,
  logging_in,
  load_operating_currencies,
  operating_currencies,
};
