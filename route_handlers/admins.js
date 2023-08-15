import { ADMINS, CONTACT_MESSAGES, HASHES, USERS } from "../conn/ds_conn";
import { admin_created_email, contact_email } from "./email";
import { generate_reference_number, send_mail } from "./entry";
import { platform_wallet } from "./wallet";
import fs from "fs";

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
    sender: "signup@udaralinksapp.online",
    sender_name: "Udara Links",
    sender_pass: "ogpQfn9mObWD",
    html: admin_created_email(admin),
  });

  send_mail({
    recipient: "admin@udaralinksapp.online",
    subject: "[Udara Links] Admin Profile Details",
    sender: "signup@udaralinksapp.online",
    sender_name: "Udara Links",
    sender_pass: "ogpQfn9mObWD",
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

const contact_admin = (req, res) => {
  let { title, user, images, description, currency, offer, onsale } = req.body;

  images =
    images &&
    images.map((img) => {
      let filename = `${generate_reference_number()}.jpg`;
      fs.writeFileSync(
        `${__dirname
          .split("/")
          .slice(0, -1)
          .join("/")}/Assets/Images/${filename}`,
        Buffer.from(`${img}`, "base64")
      );
      return filename;
    });

  let r = CONTACT_MESSAGES.write({
    title,
    description,
    user,
    images,
    offer,
    onsale,
    currency,
  });
  user = USERS.readone(user);
  send_mail({
    to: "support@udaralinks.com",
    subject: `[Contact Message] ${title}`,
    sender: "signup@udaralinksapp.online",
    sender_name: "Udara Links",
    sender_pass: "ogpQfn9mObWD",
    cc: user.email,
    html: contact_email({
      title,
      description,
      images,
      user,
    }),
  });

  res.json({ ok: true, data: { _id: r._id } });
};

export { create_admin, admins, remove_admin, contact_admin };
