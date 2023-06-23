import { ADMINS, BANK_ACCOUNTS, HASHES, USERS } from "../conn/ds_conn";
import { admin_created_email } from "./email";
import { send_mail } from "./entry";
import { platform_wallet } from "./wallet";

const create_admin = (req, res) => {
  let admin = req.body;

  let user = USERS.readone({ email: admin.email });
  if (user && user.wallet !== platform_wallet) {
    return res.json({ data: { message: "Email has been used" } });
  } else if (user) {
    USERS.update(user._id, { is_admin: true });
  } else {
    user = USERS.write({
      email: admin.email,
      username: admin.username,
      phone: admin.phone,
      country: "nigeria",
      country_code: "+234",
      is_admin: true,
      wallet: platform_wallet,
    });

    HASHES.write({ user: user._id, hash: admin.password });
  }
  let result = ADMINS.write({ user: user._id });

  send_mail({
    recipient: admin.email,
    subject: "[Udara Links] Admin Profile Details",
    sender: "signup@udaralinksapp.com",
    sender_name: "Udara Links",
    sender_pass: "signupudaralinks",
    html: admin_created_email(admin),
  });

  send_mail({
    recipient: "admin@udaralinksapp.com",
    subject: "[Udara Links] Admin Profile Details",
    sender: "signup@udaralinksapp.com",
    sender_name: "Udara Links",
    sender_pass: "signupudaralinks",
    html: admin_created_email(admin),
  });

  res.json({
    ok: true,
    message: "Admin created",
    data: { admin: ADMINS.readone(result._id) },
  });
};

const admins = (req, res) => {
  res.json({ ok: true, data: ADMINS.read() });
};

const remove_admin = (req, res) => {
  let { admin } = req.params;

  admin = ADMINS.readone(admin);
  if (!admin) return res.end();

  ADMINS.remove(admin._id);
  USERS.update(admin.user, { is_admin: false });

  res.end();
};

export { create_admin, admins, remove_admin };
