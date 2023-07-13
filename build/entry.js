"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verify_otp = exports.verify_email = exports.verify_account = exports.user_refresh = exports.user_by_email = exports.update_user_data = exports.update_phone = exports.update_password = exports.update_email = exports.unverified_details = exports.send_mail = exports.request_otp = exports.operating_currencies = exports.onboardings = exports.logging_in = exports.load_operating_currencies = exports.get_verification_detail = exports.generate_reference_number = exports.forgot_password = exports.create_brass_subaccount = exports.account_verification = void 0;

var _ds_conn = require("../conn/ds_conn");

var _functions = require("../utils/functions");

var _starter = require("./starter");

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _email = require("./email");

var _fs = _interopRequireDefault(require("fs"));

var _wallet = require("./wallet");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var pending_otps = new Object();
var operating_currencies;
exports.operating_currencies = operating_currencies;

var load_operating_currencies = function load_operating_currencies() {
  if (!operating_currencies) exports.operating_currencies = operating_currencies = _ds_conn.UTILS.read({
    util: "operating_currencies"
  });

  if (!operating_currencies.length) {
    var _operating_currencies = new Array({
      name: "naira",
      icon: "naira_home_page.png",
      flag: "nigeria_flag_rectangle.png",
      alphabetic_name: "NGN",
      util: "operating_currencies"
    }, {
      name: "euro",
      icon: "euro_icon.png",
      alphabetic_name: "EUR",
      flag: "",
      util: "operating_currencies"
    }, {
      name: "pound",
      icon: "pound_icon.png",
      alphabetic_name: "POUND",
      flag: "",
      util: "operating_currencies"
    }, {
      name: "dollar",
      icon: "dollar_icon.png",
      flag: "usa_flag_rectangle.png",
      alphabetic_name: "USD",
      util: "operating_currencies"
    });

    _ds_conn.UTILS.remove_several({
      util: "operating_currencies"
    });

    _ds_conn.UTILS.write(_operating_currencies);
  }

  if (!_ds_conn.ONBOARDINGS.readone()) _ds_conn.ONBOARDINGS.write_several(new Array({
    icon: "onboarding_1.png",
    main_text: "best rates",
    sub_text: "Take advantage of our seamless peer to peer system to get and make International Payments at best rates"
  }, {
    icon: "onboarding_2.png",
    main_text: "Make International Payments",
    sub_text: "Easy way to find International Payments to meet study, tourist and business payments."
  }, {
    icon: "onboarding_3.png",
    main_text: "Payment Secured",
    sub_text: "Your transactions are secured on the app with ease"
  }));
  !_ds_conn.UTILS.readone({
    util: UTIL_verification_details
  }) && _ds_conn.UTILS.write({
    util: UTIL_verification_details,
    details: new Array()
  });
  !_ds_conn.UTILS.readone({
    util: "purposes"
  }) && _ds_conn.UTILS.write_several(new Array({
    title: "study",
    util: "purposes"
  }, {
    title: "tourism",
    util: "purposes"
  }, {
    title: "business",
    util: "purposes"
  }, {
    title: "remittances",
    util: "purposes"
  }, {
    title: "others",
    util: "purposes"
  }));
  return operating_currencies;
};

exports.load_operating_currencies = load_operating_currencies;

var onboardings = function onboardings(req, res) {
  var onboardings = _ds_conn.ONBOARDINGS.read();

  res.json({
    data: onboardings,
    ok: true,
    message: "ok"
  });
};

exports.onboardings = onboardings;

var user_refresh = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var user, result, wallet;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          user = req.params.user;
          result = _ds_conn.USERS.readone(user);

          if (!(!user || !result)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.json({
            ok: false,
            message: "user not found"
          }));

        case 4:
          user = result;
          wallet = _ds_conn.WALLETS.readone(result.wallet);
          if (!wallet) console.error("Wallet not found!!!");
          wallet.conversion_rates = _starter.conversion_rates;
          wallet.currencies = load_operating_currencies();
          res.json({
            ok: true,
            message: "ok",
            data: {
              user: user,
              wallet: wallet
            }
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));

  return function user_refresh(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.user_refresh = user_refresh;

var send_mail = function send_mail(_ref2) {
  var recipient = _ref2.recipient,
      recipient_name = _ref2.recipient_name,
      sender_pass = _ref2.sender_pass,
      sender_name = _ref2.sender_name,
      sender = _ref2.sender,
      subject = _ref2.subject,
      text = _ref2.text,
      html = _ref2.html,
      to = _ref2.to;
  var transporter;

  try {
    transporter = _nodemailer["default"].createTransport({
      host: "66.29.137.48" || "udaralinksapp.com",
      port: 465,
      secure: true,
      tls: {
        servername: "udaralinksapp.com"
      },
      auth: {
        user: sender,
        pass: sender_pass
      }
    });
  } catch (err) {}

  try {
    transporter.sendMail({
      from: "".concat(sender_name, " <").concat(sender, ">"),
      to: to || "".concat(recipient_name, " <").concat(recipient, ">"),
      subject: subject,
      text: text,
      html: html
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.send_mail = send_mail;

var create_brass_subaccount = function create_brass_subaccount(username, user) {
  (0, _axios["default"])({
    url: "https://api.getbrass.co/banking/accounts",
    method: "post",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: "Bearer ".concat(_wallet.brass_personal_access_token)
    },
    data: {
      alias: "".concat(username),
      monthly_budget: 1000000000,
      debit_wait_time_in_minutes: 0,
      customer_reference: user.replace(/~/g, "_")
    }
  });
};

exports.create_brass_subaccount = create_brass_subaccount;

var update_user_data = function update_user_data(req, res) {
  var _req$body = req.body,
      user = _req$body.user,
      username = _req$body.username,
      phone = _req$body.phone;

  _ds_conn.USERS.update(user, {
    username: username,
    phone: phone
  });

  create_brass_subaccount(username, user);
  res.end();
};

exports.update_user_data = update_user_data;

var request_otp = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body2, email, relogin, user, code;

    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, relogin = _req$body2.relogin;

          if (!(!email || !_functions.email_regex.test(email))) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return", res.json({
            ok: false,
            data: {
              message: "email field missing"
            }
          }));

        case 3:
          email = email.trim().toLowerCase();
          user = _ds_conn.USERS.readone({
            email: email
          });

          if (!(user && !relogin)) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.json({
            ok: false,
            message: "email already used",
            data: email
          }));

        case 7:
          code = (0, _functions.generate_random_string)(6);
          pending_otps[email] = code;

          try {
            send_mail({
              recipient: email,
              subject: "[Udara Links] ".concat(relogin ? "Authenticate Your Login" : "Please verify your email"),
              sender: "signup@udaralinksapp.com",
              sender_name: "Udara Links",
              sender_pass: "signupudaralinks",
              html: (0, _email.verification)(code)
            });
          } catch (e) {}

          res.json({
            ok: true,
            message: "opt sent",
            data: email
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));

  return function request_otp(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.request_otp = request_otp;

var verify_otp = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body3, code, country, country_code, email, otp_code, random_string, user, result, wallet;

    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body3 = req.body, code = _req$body3.code, country = _req$body3.country, country_code = _req$body3.country_code, email = _req$body3.email;

          if (!_ds_conn.USERS.readone({
            email: email
          })) {
            _context3.next = 3;
            break;
          }

          return _context3.abrupt("return", res.json({
            ok: false,
            message: "email already used",
            data: email
          }));

        case 3:
          email = email.toLowerCase().trim();
          otp_code = pending_otps[email];
          delete pending_otps[email];

          if (String(otp_code).trim() && String(otp_code).trim() === String(code).trim()) {
            random_string = (0, _functions.generate_random_string)((0, _functions.gen_random_int)(5, 3));
            user = {
              username: "user-".concat(random_string),
              email: email,
              country: country,
              country_code: country_code,
              created: Date.now(),
              updated: Date.now()
            };
            result = _ds_conn.USERS.write(user);
            user._id = result._id;
            wallet = {
              user: user._id,
              naira: 0,
              dollar: 0,
              pound: 0,
              euro: 0
            };
            result = _ds_conn.WALLETS.write(wallet);
            wallet._id = result._id;
            wallet.conversion_rates = _starter.conversion_rates;
            wallet.currencies = load_operating_currencies();

            _ds_conn.USERS.update(user._id, {
              wallet: wallet._id
            });

            user.wallet = wallet._id;
            res.json({
              ok: true,
              message: "verification successful",
              data: {
                user: user,
                wallet: wallet
              }
            });
          } else res.json({
            ok: false,
            message: "verification failed",
            data: {
              email: email,
              code: code
            }
          });

        case 7:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));

  return function verify_otp(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

exports.verify_otp = verify_otp;

var update_phone = function update_phone(req, res) {
  var _req$body4 = req.body,
      phone = _req$body4.phone,
      verify_later = _req$body4.verify_later,
      user = _req$body4.user,
      code = _req$body4.code,
      country_code = _req$body4.country_code;
  if (!_ds_conn.USERS.readone(user)) return res.json({
    ok: false,
    message: "user does not exist",
    data: user
  });
  var otp_code = pending_otps[phone];
  delete pending_otps[phone];

  if (otp_code && otp_code === code || verify_later) {
    _ds_conn.USERS.update(user, {
      phone: phone,
      country: country_code.country,
      country_code: country_code.code
    });

    res.json({
      ok: true,
      message: "user phone updated",
      data: user
    });
  }
};

exports.update_phone = update_phone;

var update_email = function update_email(req, res) {
  var _req$body5 = req.body,
      email = _req$body5.email,
      user = _req$body5.user,
      code = _req$body5.code;
  if (!_ds_conn.USERS.readone(user)) return res.json({
    ok: false,
    message: "user does not exist",
    data: user
  });
  var otp_code = pending_otps[email];
  delete pending_otps[email];

  if (otp_code && otp_code === code) {
    _ds_conn.USERS.update(user, {
      email: email
    });

    res.json({
      ok: true,
      message: "user email updated",
      data: user
    });
  }
};

exports.update_email = update_email;

var generate_reference_number = function generate_reference_number() {
  return "".concat((0, _functions.generate_random_string)(14, "alnum")).concat(Date.now());
};

exports.generate_reference_number = generate_reference_number;

var update_password = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body6, user, key, new_user, result;

    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body6 = req.body, user = _req$body6.user, key = _req$body6.key, new_user = _req$body6.new_user;

          if (!(!user || !key)) {
            _context4.next = 3;
            break;
          }

          return _context4.abrupt("return", res.json({
            ok: false,
            message: "invalid credentials",
            data: user
          }));

        case 3:
          result = _ds_conn.HASHES[new_user ? "write" : "update_several"](new_user ? {
            user: user,
            hash: key
          } : {
            user: user
          }, {
            hash: key
          });
          if (result) res.json({
            ok: true,
            message: "update successful",
            data: {
              user: user
            }
          });else res.json({
            ok: false,
            data: {
              message: "Data not found"
            }
          });

        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));

  return function update_password(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

exports.update_password = update_password;

var logging_in = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body7, email, key, relogin, user, email_pass, pass, wallet, code;

    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body7 = req.body, email = _req$body7.email, key = _req$body7.key, relogin = _req$body7.relogin;
          email = email.toLowerCase().trim();
          user = _ds_conn.USERS.readone({
            email: email
          });
          email_pass = _functions.email_regex.test(email);

          if (!(!email_pass || !user)) {
            _context5.next = 8;
            break;
          }

          return _context5.abrupt("return", res.json({
            ok: false,
            data: "User not found"
          }));

        case 8:
          if (key) {
            _context5.next = 10;
            break;
          }

          return _context5.abrupt("return", res.json({
            ok: false,
            data: "Provide your password"
          }));

        case 10:
          pass = _ds_conn.HASHES.readone({
            user: user._id
          });

          if (!(!pass || pass.hash !== key)) {
            _context5.next = 13;
            break;
          }

          return _context5.abrupt("return", res.json({
            ok: false,
            data: "Invalid password"
          }));

        case 13:
          if (!(user.wallet === _wallet.platform_wallet && !user.is_admin)) {
            _context5.next = 15;
            break;
          }

          return _context5.abrupt("return", res.json({
            ok: false,
            data: "Invalid user"
          }));

        case 15:
          _ds_conn.USERS.update(user._id, {
            last_login: Date.now()
          });

          wallet = _ds_conn.WALLETS.readone(user.wallet);
          wallet.conversion_rates = _starter.conversion_rates;
          wallet.currencies = load_operating_currencies();

          if (wallet) {
            _context5.next = 21;
            break;
          }

          return _context5.abrupt("return", res.json({
            ok: false,
            data: "Cannot fetch wallet"
          }));

        case 21:
          if (!relogin) {
            code = (0, _functions.generate_random_string)(6);
            pending_otps[email] = code;

            try {
              send_mail({
                recipient: email,
                subject: "[Udara Links] Authenticate Your Login",
                sender: "signup@udaralinksapp.com",
                sender_name: "Udara Links",
                sender_pass: "signupudaralinks",
                html: (0, _email.verification)(code, null, true)
              });
            } catch (e) {}
          }

          res.json({
            ok: true,
            message: "loggedin",
            data: {
              user: user,
              wallet: wallet
            }
          });

        case 23:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));

  return function logging_in(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

exports.logging_in = logging_in;
var UTIL_verification_details = "verification_details";

var unverified_details = function unverified_details(req, res) {
  var unverified = _ds_conn.UTILS.readone({
    util: UTIL_verification_details
  });

  unverified = unverified.details.length ? _ds_conn.VERIFICATION_DETAILS.read(unverified.details) : new Array();
  res.json({
    ok: true,
    message: "unverified details",
    data: unverified
  });
};

exports.unverified_details = unverified_details;

var get_verification_detail = function get_verification_detail(req, res) {
  var user = req.params.user;
  res.json({
    ok: true,
    message: "verification detail",
    data: _ds_conn.VERIFICATION_DETAILS.readone({
      user: user
    })
  });
};

exports.get_verification_detail = get_verification_detail;

var verify_account = function verify_account(req, res) {
  var detail = req.params.detail;

  _ds_conn.UTILS.update({
    util: UTIL_verification_details
  }, {
    details: {
      $splice: detail
    }
  });

  detail = _ds_conn.VERIFICATION_DETAILS.update(detail, {
    verifed: true
  });
  detail.user && _ds_conn.USERS.update(detail.user, {
    verified: true,
    status: "verified",
    phone: detail.phone
  });
  res.json({
    ok: true,
    message: "verify account",
    data: detail
  });
};

exports.verify_account = verify_account;

var account_verification = function account_verification(req, res) {
  var _req$body8 = req.body,
      phone = _req$body8.phone,
      user = _req$body8.user,
      id = _req$body8.id,
      id_type = _req$body8.id_type,
      country_code = _req$body8.country_code;
  var filename = "".concat(generate_reference_number(), ".jpg");

  _fs["default"].writeFileSync("".concat(__dirname.split("/").slice(0, -1).join("/"), "/Assets/Images/").concat(filename), Buffer.from("".concat(id), "base64"));

  id = filename;

  var result = _ds_conn.VERIFICATION_DETAILS.write({
    id: id,
    id_type: id_type,
    user: user,
    phone: phone,
    country_code: country_code
  });

  _ds_conn.UTILS.update({
    util: UTIL_verification_details
  }, {
    details: {
      $push: result._id
    }
  });

  _ds_conn.USERS.update(user, {
    status: "pending"
  });

  (0, _wallet.new_notification)({
    user: _wallet.platform_user,
    title: "Verification Request",
    data: new Array(result._id)
  });
  res.json({
    ok: true,
    message: "account verification",
    data: {
      id: id,
      user: user
    }
  });
};

exports.account_verification = account_verification;

var forgot_password = function forgot_password(req, res) {
  var email = req.body.email;

  var user = _ds_conn.USERS.readone({
    email: email
  });

  if (!user) return res.json({
    ok: false,
    data: {
      message: "Email not registered"
    }
  });
  var code = (0, _functions.generate_random_string)(6);
  pending_otps[email] = code;
  send_mail({
    recipient: email,
    subject: "[Udara Links] Please verify your email",
    sender: "signup@udaralinksapp.com",
    sender_name: "Udara Links",
    sender_pass: "signupudaralinks",
    html: (0, _email.forgot_password_email)(code)
  });
  res.json({
    ok: true,
    message: "verify email",
    data: {
      email: email,
      user: user._id
    }
  });
};

exports.forgot_password = forgot_password;

var verify_email = function verify_email(req, res) {
  var _req$body9 = req.body,
      code = _req$body9.code,
      email = _req$body9.email;
  var otp_code = pending_otps[email];

  if (!!otp_code && !!code && Number(code) === Number(otp_code)) {
    var user = _ds_conn.USERS.readone({
      email: email
    });

    if (!user) return res.json({
      ok: false,
      data: {
        message: "Email not registered"
      }
    });
    res.json({
      ok: true,
      message: "verify email",
      data: {
        email: email,
        user: user._id
      }
    });
  } else res.json({
    ok: false,
    data: {
      message: "OTP does not match"
    }
  });
};

exports.verify_email = verify_email;

var user_by_email = function user_by_email(req, res) {
  var email = req.params.email;
  res.json({
    ok: true,
    data: _ds_conn.USERS.readone({
      email: email
    })
  });
};

exports.user_by_email = user_by_email;