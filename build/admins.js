"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove_admin = exports.create_admin = exports.contact_admin = exports.admins = void 0;

var _ds_conn = require("../conn/ds_conn");

var _email = require("./email");

var _entry = require("./entry");

var _wallet = require("./wallet");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var create_admin = function create_admin(req, res) {
  var admin = req.body;

  var user = _ds_conn.USERS.readone({
    email: admin.email
  });

  if (user && user.wallet !== _wallet.platform_wallet) {
    return res.json({
      data: {
        message: "Email has been used"
      }
    });
  } else if (user) {
    _ds_conn.USERS.update(user._id, {
      is_admin: true
    });
  } else {
    user = _ds_conn.USERS.write({
      email: admin.email,
      username: admin.username,
      phone: admin.phone,
      country: "nigeria",
      country_code: "+234",
      is_admin: true,
      wallet: _wallet.platform_wallet
    });

    _ds_conn.HASHES.write({
      user: user._id,
      hash: admin.password
    });
  }

  var result = _ds_conn.ADMINS.write({
    user: user._id
  });

  (0, _entry.send_mail)({
    recipient: admin.email,
    subject: "[Udara Links] Admin Profile Details",
    sender: "signup@udaralinksapp.online",
    sender_name: "Udara Links",
    sender_pass: "ogpQfn9mObWD",
    html: (0, _email.admin_created_email)(admin)
  });
  (0, _entry.send_mail)({
    recipient: "admin@udaralinksapp.online",
    subject: "[Udara Links] Admin Profile Details",
    sender: "signup@udaralinksapp.online",
    sender_name: "Udara Links",
    sender_pass: "ogpQfn9mObWD",
    html: (0, _email.admin_created_email)(admin)
  });
  res.json({
    ok: true,
    message: "Admin created",
    data: {
      admin: _ds_conn.ADMINS.readone(result._id)
    }
  });
};

exports.create_admin = create_admin;

var admins = function admins(req, res) {
  res.json({
    ok: true,
    data: _ds_conn.ADMINS.read()
  });
};

exports.admins = admins;

var remove_admin = function remove_admin(req, res) {
  var admin = req.params.admin;
  admin = _ds_conn.ADMINS.readone(admin);
  if (!admin) return res.end();

  _ds_conn.ADMINS.remove(admin._id);

  _ds_conn.USERS.update(admin.user, {
    is_admin: false
  });

  res.end();
};

exports.remove_admin = remove_admin;

var contact_admin = function contact_admin(req, res) {
  var _req$body = req.body,
      title = _req$body.title,
      user = _req$body.user,
      images = _req$body.images,
      description = _req$body.description,
      currency = _req$body.currency,
      offer = _req$body.offer,
      onsale = _req$body.onsale;
  images = images && images.map(function (img) {
    var filename = "".concat((0, _entry.generate_reference_number)(), ".jpg");

    _fs["default"].writeFileSync("".concat(__dirname.split("/").slice(0, -1).join("/"), "/Assets/Images/").concat(filename), Buffer.from("".concat(img), "base64"));

    return filename;
  });

  var r = _ds_conn.CONTACT_MESSAGES.write({
    title: title,
    description: description,
    user: user,
    images: images,
    offer: offer,
    onsale: onsale,
    currency: currency
  });

  user = _ds_conn.USERS.readone(user);
  (0, _entry.send_mail)({
    recipient: "support@udaralinks.com",
    subject: "[Contact Message] ".concat(title),
    sender: "signup@udaralinksapp.online",
    sender_name: "Udara Links",
    sender_pass: "ogpQfn9mObWD",
    cc: user.email,
    html: (0, _email.contact_email)({
      title: title,
      description: description,
      images: images,
      user: user
    })
  });
  res.json({
    ok: true,
    data: {
      _id: r._id
    }
  });
};

exports.contact_admin = contact_admin;