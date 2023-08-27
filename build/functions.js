"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phone_regex = exports.generate_random_string = exports.gen_random_int = exports.email_regex = exports.date_string = exports.commalise_figures = void 0;
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var combinations = {
  alnum: charset,
  num: "01234556789",
  alpha: "abcdefghijklmnopqrstuvwxyz"
};
var phone_regex = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
exports.phone_regex = phone_regex;
var email_regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
exports.email_regex = email_regex;

var gen_random_int = function gen_random_int(max_int) {
  var min_int = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return min_int + Math.floor(Math.random() * max_int);
};

exports.gen_random_int = gen_random_int;

var generate_random_string = function generate_random_string() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  var combination = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "num";
  var string = "";
  var char_combination = combinations[combination];

  for (var i = 0; i < len; i++) string += char_combination[gen_random_int(char_combination.length)];

  return string;
};

exports.generate_random_string = generate_random_string;
var month_index = new Object({
  0: "jan",
  1: "feb",
  2: "mar",
  3: "apr",
  4: "may",
  5: "jun",
  6: "jul",
  7: "aug",
  8: "sep",
  9: "oct",
  10: "nov",
  11: "dec"
});

var to_title = function to_title(string) {
  if (!string) return string;
  var str = "";
  string.split(" ").map(function (s) {
    if (s) str += " " + s[0].toUpperCase() + s.slice(1);
  });
  return str.trim();
};

var date_string = function date_string(timestamp) {
  var date = new Date(timestamp);
  return "".concat(date.getDate().toString().padStart(2, "0"), " ").concat(to_title(month_index[date.getMonth()]), " ").concat(date.getFullYear());
};

exports.date_string = date_string;

var commalise_figures_ = function commalise_figures_(figure) {
  if (typeof figure !== "number") {
    return figure;
  }

  if (figure >= 1e21) return figure.toLocaleString("fullwide");
  figure = figure.toString();
  if (figure.length <= 3) return figure;
  var ff = "",
      i;

  for (i = 0; i < figure.length; i += 3) ff = "".concat(figure.slice(figure.length - i - 3, figure.length - i), ",").concat(ff);

  if (i < figure.length) ff = "".concat(figure.slice(0, i)).concat(ff);else if (i > figure.length) {
    ff = "".concat(figure.slice(0, figure.length % 3)).concat(ff);
  }
  if (ff.startsWith(",")) ff = ff.slice(1);
  return ff.slice(0, -1);
};

var commalise_figures = function commalise_figures(value, no_fixed) {
  if (typeof value !== "number") {
    if (typeof value === "string") {
      if (/[A-Za-z]\-/.test(value)) return value;else value = Number(value);
      if (!value) return;
    } else return value;
  }

  var integer = Math.floor(value);
  var decimal = (value - integer).toFixed(2).toString();
  var commalised = commalise_figures_(integer);
  return no_fixed ? commalised : "".concat(commalised).concat(decimal.slice(decimal.indexOf(".")));
};

exports.commalise_figures = commalise_figures;