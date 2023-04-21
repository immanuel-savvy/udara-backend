"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.username_updated = exports.get_conversion_rates = exports.get_code_by_country = exports.currencies = exports.change_password = void 0;

var _ds_conn = require("../conn/ds_conn");

var _entry = require("./entry");

var _starter = require("./starter");

var username_updated = function username_updated(req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      user = _req$body.user;

  var response = _ds_conn.USERS.update(user, {
    username: username
  });

  res.json(response ? {
    ok: true,
    message: "username updated!",
    data: user
  } : {
    ok: false,
    message: "username update failed"
  });
};

exports.username_updated = username_updated;

var change_password = function change_password(req, res) {
  var user = req.params.user;
  var _req$body2 = req.body,
      old_key = _req$body2.old_key,
      new_key = _req$body2.new_key;

  var hash = _ds_conn.HASHES.readone({
    user: user
  });

  if (!hash || !old_key || !new_key) return res.json({
    ok: false,
    message: "incomplete data",
    data: {
      reason: "Incomplete data"
    }
  });
  if (old_key !== hash.hash) return res.json({
    ok: false,
    message: "password does not match",
    data: {
      reason: "Password does not match"
    }
  });

  var result = _ds_conn.HASHES.update({
    user: user
  }, {
    hash: new_key
  });

  result ? res.json({
    ok: true,
    message: "successful",
    data: {
      success: true
    }
  }) : res.json({
    ok: false,
    message: "something went wrong",
    data: {
      reason: "Something went wrong"
    }
  });
};

exports.change_password = change_password;

var get_code_by_country = function get_code_by_country(req, res) {
  var country = req.params.country;

  var data = _ds_conn.UTILS.readone({
    util: "country_codes",
    country: country
  });

  console.log(country, data);
  res.json({
    ok: true,
    message: "found",
    data: data
  });
};

exports.get_code_by_country = get_code_by_country;

var currencies = function currencies(req, res) {
  res.json({
    ok: true,
    message: "ok",
    data: (0, _entry.load_operating_currencies)()
  });
};

exports.currencies = currencies;

var get_conversion_rates = function get_conversion_rates(req, res) {
  res.json({
    ok: true,
    message: "ok",
    data: _starter.conversion_rates
  });
};

exports.get_conversion_rates = get_conversion_rates;