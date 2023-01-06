"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.purposes = exports.country_codes = void 0;

var _ds_conn = require("../conn/ds_conn");

var country_codes = function country_codes(req, res) {
  var c_codes = _ds_conn.UTILS.read({
    util: "country_codes"
  });

  res.json({
    ok: true,
    data: c_codes
  });
};

exports.country_codes = country_codes;

var purposes = function purposes(req, res) {
  var purposes = _ds_conn.UTILS.read({
    util: "purposes"
  });

  res.json({
    ok: true,
    data: purposes
  });
};

exports.purposes = purposes;