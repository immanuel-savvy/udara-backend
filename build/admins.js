"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove_admin = exports.create_admin = exports.admins = void 0;

var _ds_conn = require("../conn/ds_conn");

var _email = require("./email");

var _entry = require("./entry");

var _wallet = require("./wallet");

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
    sender: "signup@udaralinksapp.com",
    sender_name: "Udara Links",
    sender_pass: "signupudaralinks",
    html: (0, _email.admin_created_email)(admin)
  });
  (0, _entry.send_mail)({
    recipient: "admin@udaralinksapp.com",
    subject: "[Udara Links] Admin Profile Details",
    sender: "signup@udaralinksapp.com",
    sender_name: "Udara Links",
    sender_pass: "signupudaralinks",
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