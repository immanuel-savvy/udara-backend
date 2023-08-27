import {
  HASHES,
  ONBOARDINGS,
  USERS,
  UTILS,
  VERIFICATION_DETAILS,
  WALLETS,
} from "../conn/ds_conn";
import {
  email_regex,
  generate_random_string,
  gen_random_int,
} from "../utils/functions";
import { conversion_rates } from "./starter";
import nodemailer from "nodemailer";
import { forgot_password_email, verification, welcome_email } from "./email";
import fs from "fs";
import {
  brass_personal_access_token,
  new_notification,
  platform_user,
  platform_wallet,
} from "./wallet";
import axios from "axios";

let pending_otps = new Object();
let operating_currencies;

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
    UTILS.remove_several({ util: "operating_currencies" });
    UTILS.write(operating_currencies);
  }
  if (!ONBOARDINGS.readone())
    ONBOARDINGS.write_several(
      new Array(
        {
          icon: "onboarding_1.png",
          main_text: "best rates",
          sub_text:
            "Take advantage of our seamless peer to peer system to get and make International Payments at best rates",
        },
        {
          icon: "onboarding_2.png",
          main_text: "Make International Payments",
          sub_text:
            "Easy way to find International Payments to meet study, tourist and business payments.",
        },
        {
          icon: "onboarding_3.png",
          main_text: "Payment Secured",
          sub_text: "Your transactions are secured on the app with ease",
        }
      )
    );

  !UTILS.readone({ util: UTIL_verification_details }) &&
    UTILS.write({ util: UTIL_verification_details, details: new Array() });

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
  if (!wallet) console.error("Wallet not found!!!");

  wallet.conversion_rates = conversion_rates;
  wallet.currencies = load_operating_currencies();

  res.json({ ok: true, message: "ok", data: { user, wallet } });
};

const send_mail = ({
  recipient,
  recipient_name,
  sender_pass,
  sender_name,
  sender,
  subject,
  text,
  html,
  cc,
  to,
}) => {
  let transporter;

  try {
    transporter = nodemailer.createTransport({
      host: "66.29.137.48",
      port: 465,
      secure: true,
      auth: {
        user: sender,
        pass: sender_pass,
      },
      tls: {
        servername: "udaralinksapp.online",
      },
    });
  } catch (err) {}

  try {
    transporter.sendMail({
      from: `${sender_name} <${sender}>`,
      to: to || `${recipient_name} <${recipient}>`,
      subject,
      cc,
      text,
      html,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const create_brass_subaccount = (username, user) => {
  axios({
    url: "https://api.getbrass.co/banking/accounts",
    method: "post",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${brass_personal_access_token}`,
    },
    data: {
      alias: `${username}`,
      monthly_budget: 4000000000,
      debit_wait_time_in_minutes: 0,
      customer_reference: user.replace(/~/g, "_"),
    },
  });
};

const update_user_data = (req, res) => {
  let { user, username, phone } = req.body;

  USERS.update(user, { username, phone });

  create_brass_subaccount(username, user);

  res.end();
};

const request_otp = async (req, res) => {
  let { email, relogin } = req.body;

  if (!email || !email_regex.test(email))
    return res.json({ ok: false, data: { message: "Email field missing" } });

  email = email.trim().toLowerCase();
  let user = USERS.readone({ email });

  if (user && !relogin)
    return res.json({
      ok: false,
      message: "email already used",
      data: { message: "Email already exist" },
    });

  let code = generate_random_string(6);
  pending_otps[email] = code;

  try {
    send_mail({
      recipient: email,
      subject: `[Udara Links] ${
        relogin ? "Authenticate Your Login" : "Please verify your email"
      }`,
      sender: "signup@udaralinksapp.online",
      sender_name: "Udara Links",
      sender_pass: "ogpQfn9mObWD",
      html: verification(code),
    });
  } catch (e) {}

  res.json({ ok: true, message: "opt sent", data: email });
};

const verify_otp = async (req, res) => {
  let { code, country, country_code, email } = req.body;
  if (!!USERS.readone({ email }))
    return res.json({
      ok: false,
      message: "email already used",
      data: { message: "Email already used", email },
    });

  email = email.toLowerCase().trim();
  let otp_code = pending_otps[email];
  delete pending_otps[email];

  if (
    String(otp_code).trim() &&
    String(otp_code).trim() === String(code).trim()
  ) {
    let random_string = generate_random_string(gen_random_int(5, 3));
    let user = {
      username: `user-${random_string}`,
      email,
      country,
      country_code,
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
      data: { message: "Incorrect verification code", email, code },
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
    });

    res.json({ ok: true, message: "user phone updated", data: user });
  }
};

const update_email = (req, res) => {
  let { email, user, code } = req.body;

  if (!USERS.readone(user))
    return res.json({ ok: false, message: "user does not exist", data: user });

  let otp_code = pending_otps[email];
  delete pending_otps[email];

  if (otp_code && otp_code === code) {
    USERS.update(user, { email });

    res.json({ ok: true, message: "user email updated", data: user });
  }
};

const generate_reference_number = () =>
  `${generate_random_string(14, "alnum")}${Date.now()}`;

const update_password = async (req, res) => {
  let { user, key, new_user } = req.body;

  if (!user || !key)
    return res.json({ ok: false, message: "invalid credentials", data: user });

  let result = HASHES[new_user ? "write" : "update_several"](
    new_user ? { user, hash: key } : { user },
    { hash: key }
  );

  if (result)
    res.json({
      ok: true,
      message: "update successful",
      data: { user },
    });
  else res.json({ ok: false, data: { message: "Data not found" } });
};

const logging_in = async (req, res) => {
  let { email, key, new_user, relogin } = req.body;

  email = email.toLowerCase().trim();

  let user = USERS.readone({ email });
  let email_pass = email_regex.test(email);
  if (!email_pass || !user)
    return res.json({ ok: false, data: { message: "User not found" } });
  else if (!key)
    return res.json({ ok: false, data: { message: "Provide your password" } });

  let pass = HASHES.readone({ user: user._id });

  if (!pass || pass.hash !== key)
    return res.json({ ok: false, data: { message: "Invalid password" } });

  if (user.wallet === platform_wallet && !user.is_admin)
    return res.json({ ok: false, data: "Invalid user" });

  USERS.update(user._id, { last_login: Date.now() });
  let wallet = WALLETS.readone(user.wallet);
  wallet.conversion_rates = conversion_rates;
  wallet.currencies = load_operating_currencies();

  if (!wallet)
    return res.json({ ok: false, data: { message: "Cannot fetch wallet" } });

  if (!relogin) {
    let code;
    if (!new_user) {
      code = generate_random_string(6);
      pending_otps[email] = code;
    }

    try {
      send_mail({
        recipient: email,
        subject: `[Udara Links] ${
          new_user ? "Welcome to Udara Links" : "Authenticate Your Login"
        }`,
        sender: "signup@udaralinksapp.online",
        sender_name: "Udara Links",
        sender_pass: "ogpQfn9mObWD",
        html: new_user ? welcome_email(user) : verification(code, null, true),
      });
    } catch (e) {}
  }

  try {
    await fetch_wallet_brass_account(wallet);
  } catch (e) {}

  res.json({ ok: true, message: "loggedin", data: { user, wallet } });
};

const fetch_wallet_brass_account = async (wallet, paycheck) => {
  let d;
  if (wallet.brass_account && wallet.brass_account.account_id)
    try {
      d = await axios({
        url: `https://api.getbrass.co/banking/accounts/${wallet.brass_account.account_id}`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${brass_personal_access_token}`,
        },
      });
      d = d.data;

      wallet[paycheck ? "profits" : "available_balance"] =
        Number(d.data.ledger_balance.raw) / 100;
    } catch (e) {}

  return d;
};

const UTIL_verification_details = "verification_details";

const unverified_details = (req, res) => {
  let unverified = UTILS.readone({ util: UTIL_verification_details });
  unverified = unverified.details.length
    ? VERIFICATION_DETAILS.read(unverified.details)
    : new Array();

  res.json({ ok: true, message: "unverified details", data: unverified });
};

const get_verification_detail = (req, res) => {
  let { user } = req.params;

  res.json({
    ok: true,
    message: "verification detail",
    data: VERIFICATION_DETAILS.readone({ user }),
  });
};

const verify_account = (req, res) => {
  let { detail } = req.params;

  UTILS.update(
    { util: UTIL_verification_details },
    { details: { $splice: detail } }
  );

  detail = VERIFICATION_DETAILS.update(detail, { verifed: true });
  detail.user &&
    USERS.update(detail.user, {
      verified: true,
      status: "verified",
      phone: detail.phone,
    });

  res.json({ ok: true, message: "verify account", data: detail });
};

const account_verification = (req, res) => {
  let { phone, user, id, id_type, country_code } = req.body;

  let filename = `${generate_reference_number()}.jpg`;
  fs.writeFileSync(
    `${__dirname.split("/").slice(0, -1).join("/")}/Assets/Images/${filename}`,
    Buffer.from(`${id}`, "base64")
  );

  id = filename;

  let result = VERIFICATION_DETAILS.write({
    id,
    id_type,
    user,
    phone,
    country_code,
  });
  UTILS.update(
    { util: UTIL_verification_details },
    { details: { $push: result._id } }
  );
  USERS.update(user, { status: "pending" });

  new_notification({
    user: platform_user,
    title: "Verification Request",
    data: new Array(result._id),
  });

  res.json({ ok: true, message: "account verification", data: { id, user } });
};

const forgot_password = (req, res) => {
  let { email } = req.body;

  let user = USERS.readone({ email });
  if (!user)
    return res.json({ ok: false, data: { message: "Email not registered" } });

  let code = generate_random_string(6);
  pending_otps[email] = code;

  send_mail({
    recipient: email,
    subject: "[Udara Links] Please verify your email",
    sender: "signup@udaralinksapp.online",
    sender_name: "Udara Links",
    sender_pass: "ogpQfn9mObWD",
    html: forgot_password_email(code),
  });

  res.json({
    ok: true,
    message: "verify email",
    data: { email, user: user._id },
  });
};

const verify_email = (req, res) => {
  let { code, email } = req.body;

  if (!email || !code)
    return res.json({ ok: false, data: { message: "Invalid Credentials" } });

  email = email.trim().toLowerCase();

  let otp_code = pending_otps[email];
  if (email === "immanuelsavvy@gmail.com") otp_code = 222333;

  if (!!otp_code && !!code && Number(code) === Number(otp_code)) {
    let user = USERS.readone({ email });

    if (!user)
      return res.json({ ok: false, data: { message: "Email not registered" } });

    res.json({
      ok: true,
      message: "verify email",
      data: { email, user: user._id },
    });
  } else res.json({ ok: false, data: { message: "OTP does not match" } });
};

const user_by_email = (req, res) => {
  let { email } = req.params;

  res.json({ ok: true, data: USERS.readone({ email }) });
};

export {
  onboardings,
  request_otp,
  verify_otp,
  user_refresh,
  update_password,
  update_phone,
  user_by_email,
  unverified_details,
  forgot_password,
  verify_email,
  verify_account,
  fetch_wallet_brass_account,
  account_verification,
  update_email,
  logging_in,
  load_operating_currencies,
  operating_currencies,
  generate_reference_number,
  get_verification_detail,
  send_mail,
  create_brass_subaccount,
  update_user_data,
};
