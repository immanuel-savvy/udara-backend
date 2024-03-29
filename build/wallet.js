"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withdraw = exports.wallet = exports.user_brass_account = exports.update_fav_currency = exports.transactions = exports.transaction_offer = exports.topup = exports.state_offer_need = exports.resolve_dispute = exports.resolve_bank_account_name = exports.request_time_extension = exports.remove_sale = exports.remove_offer = exports.remove_bank_account = exports.refund_buyer = exports.refresh_wallet = exports.ready_for_transaction = exports.print_transactions = exports.previous_sales = exports.platform_wallet = exports.platform_user = exports.platform_bank_account = exports.place_sale = exports.paycheck_bank_account = exports.onsale_offers = exports.onsale_currency = exports.onsale = exports.offer_in_dispute = exports.offer = exports.not_ready_for_transaction = exports.new_notification = exports.my_sales = exports.my_offers = exports.make_offer = exports.like_sale = exports.get_banks = exports.fulfil_offer = exports.extend_time = exports.disputes = exports.dispute = exports.dislike_sale = exports.deposit_to_escrow = exports.decline_offer = exports.confirm_offer = exports.buyer_offers = exports.brass_personal_access_token = exports.brass_callback = exports.bank_accounts = exports.any_new_notifications = exports.add_fiat_account = exports.add_bank_account = exports.accept_offer = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _ds_conn = require("../conn/ds_conn");

var _fs = _interopRequireDefault(require("fs"));

var _Udara = require("../Udara");

var _entry = require("./entry");

var _email = require("./email");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var COMMISSION = 0.99;
var platform_wallet = "wallets~platform_wallet~3000";
exports.platform_wallet = platform_wallet;
var platform_user = "users~platform_user~3000";
exports.platform_user = platform_user;
var platform_bank_account = "bank_account~platform_user~3000";
exports.platform_bank_account = platform_bank_account;
var user_notifications = new Object();

var new_notification = function new_notification(user, title, data, metadata) {
  var res = _ds_conn.NOTIFICATIONS.write({
    user: user,
    title: title,
    data: data,
    metadata: metadata,
    unseen: true
  });

  if (!res) return;

  _ds_conn.USERS.update(user, {
    new_notification: {
      $inc: 1
    }
  });

  var nots = user_notifications[user];
  if (!nots) nots = new Array();
  nots.push(_ds_conn.NOTIFICATIONS.readone({
    _id: res._id,
    user: user
  }));
};

exports.new_notification = new_notification;

var create_transaction = function create_transaction(_ref) {
  var title = _ref.title,
      wallet = _ref.wallet,
      user = _ref.user,
      debit = _ref.debit,
      from_value = _ref.from_value,
      data = _ref.data,
      reference_number = _ref.reference_number;
  var transaction = {
    title: title,
    from_currency: "naira",
    wallet: wallet,
    user: user,
    from_value: from_value,
    debit: debit,
    reference_number: reference_number,
    data: data
  };

  var res = _ds_conn.TRANSACTIONS.write(transaction);

  if (!res) return console.error("Transaction missing");
  transaction._id = res._id;
  transaction.created = res.created;
  transaction.updated = res.updated;
  return transaction;
};

var transactions = function transactions(req, res) {
  var _req$body = req.body,
      wallet = _req$body.wallet,
      reset_pager = _req$body.reset_pager;
  if (!wallet) return res.json({
    ok: false,
    message: "what wallet?"
  });

  var transactions = _ds_conn.TRANSACTIONS.read({
    from_currency: "naira"
  }, {
    limit: 10,
    paging: wallet,
    reset_pager: reset_pager,
    subfolder: wallet
  });

  res.json({
    ok: true,
    data: transactions
  });
};

exports.transactions = transactions;

var update_fav_currency = function update_fav_currency(req, res) {
  var _req$body2 = req.body,
      wallet = _req$body2.wallet,
      fav_currency = _req$body2.fav_currency;

  var result = _ds_conn.WALLETS.update(wallet, {
    fav_currency: fav_currency
  });

  if (result) res.json({
    ok: true,
    message: "update successful",
    data: wallet
  });else res.json({
    ok: false,
    message: "unable to make update"
  });
};

exports.update_fav_currency = update_fav_currency;

var onsale = function onsale(req, res) {
  var _req$body3 = req.body,
      currency = _req$body3.currency,
      fetch_currencies = _req$body3.fetch_currencies,
      user = _req$body3.user,
      skip = _req$body3.skip,
      limit = _req$body3.limit;

  var onsale = _ds_conn.ONSALE.read({
    currency: currency,
    seller: {
      $ne: user
    },
    not_ready_for_transaction: {
      $ne: true
    }
  }, {
    skip: skip,
    limit: limit
  });

  if (fetch_currencies) {
    onsale = {
      onsales: onsale
    };
    onsale.currencies = (0, _entry.load_operating_currencies)();
  }

  res.json({
    ok: true,
    data: onsale
  });
};

exports.onsale = onsale;

var topup = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body4, value, user, wallet;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body4 = req.body, value = _req$body4.value, user = _req$body4.user, wallet = _req$body4.wallet;

          if (Number(value)) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.json({
            ok: false,
            message: "invalid transaction value"
          }));

        case 3:
          wallet && _ds_conn.WALLETS.update(wallet, {
            naira: {
              $inc: value
            }
          });
          res.json({
            ok: true,
            message: "transaction successful",
            data: {
              ok: true,
              message: "topup",
              transaction: create_transaction({
                wallet: wallet,
                user: user,
                from_value: value,
                title: "topup"
              })
            }
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));

  return function topup(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.topup = topup;

var add_fiat_account = function add_fiat_account(req, res) {
  var _req$body5 = req.body,
      account_number = _req$body5.account_number,
      bank_uuid = _req$body5.bank_uuid,
      user = _req$body5.user,
      bank_name = _req$body5.bank_name;

  _ds_conn.FIAT_ACCOUNTS.write({
    user: user,
    account_number: account_number,
    bank_uuid: bank_uuid,
    bank_name: bank_name
  });

  res.json({
    ok: true,
    message: "bank account appended",
    data: user
  });
};

exports.add_fiat_account = add_fiat_account;

var make_brass_payment = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(bank_account, amount, source_account, _ref3) {
    var res, wallet, user, paycheck, account_name, bank_id, bank_name, account_number, reference_number, response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          res = _ref3.res, wallet = _ref3.wallet, user = _ref3.user, paycheck = _ref3.paycheck;
          account_name = bank_account.account_name, bank_id = bank_account.bank_id, bank_name = bank_account.bank_name, account_number = bank_account.account_number;

          _ds_conn.LOGS.write({
            account_name: account_name,
            bank_id: bank_id,
            account_number: account_number,
            amount: amount,
            source_account: source_account
          });

          reference_number = (0, _entry.generate_reference_number)();

          _ds_conn.LOGS.write({
            account_name: account_name,
            bank_id: bank_id,
            account_number: account_number,
            amount: amount,
            source_account: source_account,
            reference_number: reference_number
          });

          _context2.prev = 5;
          _context2.next = 8;
          return (0, _axios["default"])({
            url: "https://api.getbrass.co/banking/payments",
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer ".concat(brass_personal_access_token)
            },
            data: {
              title: "withdrawal",
              amount: Number(amount) * 100,
              to: {
                name: account_name,
                bank: bank_id,
                account_number: account_number
              },
              source_account: source_account,
              customer_reference: reference_number
            }
          });

        case 8:
          response = _context2.sent;
          response = response && response.data;
          amount = Number(amount);
          wallet._id && _ds_conn.WALLETS.update(wallet._id, paycheck ? {
            profits: {
              $dec: amount
            }
          } : {
            naira: {
              $dec: amount
            }
          });

          if (user) {
            user = user._id ? user : _ds_conn.USERS.readone(user);
            (0, _entry.send_mail)({
              recipient: user.email,
              recipient_name: user.username,
              subject: "Debit Alert",
              sender: "signup@udaralinksapp.online",
              sender_name: "Udara Links",
              sender_pass: "ogpQfn9mObWD",
              html: (0, _email.tx_receipts)({
                user: user,
                tx: {
                  title: "Withdrawal",
                  value: amount,
                  to: {
                    account_name: account_name,
                    account_number: account_number,
                    bank_name: bank_name
                  },
                  created: Date.now(),
                  preamble: "debited from"
                }
              })
            });
            user = user._id || user;
          }

          res.json({
            ok: true,
            message: "transaction successful",
            data: {
              ok: true,
              message: "topup",
              transaction: create_transaction({
                wallet: wallet._id,
                user: user,
                from_value: amount,
                title: "pending-withdrawal",
                debit: true,
                reference_number: reference_number
              })
            }
          });
          _context2.next = 20;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](5);

          _ds_conn.LOGS.write(_context2.t0);

          res.json({
            ok: false,
            message: "withdrawal failed",
            data: {
              ok: false,
              message: "Withdrawal failed"
            }
          });

        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[5, 16]]);
  }));

  return function make_brass_payment(_x3, _x4, _x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

var withdraw = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body6, user, amount, bank_account, paycheck, wallet, user_obj;

    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body6 = req.body, user = _req$body6.user, amount = _req$body6.amount, bank_account = _req$body6.bank_account, paycheck = _req$body6.paycheck, wallet = _req$body6.wallet;
          amount = Number(amount);

          if (amount) {
            _context3.next = 4;
            break;
          }

          return _context3.abrupt("return", res.json({
            ok: false,
            data: {
              message: "invalid transaction amount"
            }
          }));

        case 4:
          wallet = _ds_conn.WALLETS.readone(wallet);
          user_obj = _ds_conn.USERS.readone(user);

          if (!(!user_obj || !wallet)) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", res.end());

        case 8:
          _context3.next = 10;
          return (0, _entry.fetch_wallet_brass_account)(wallet, !!paycheck);

        case 10:
          if (!paycheck) {
            _context3.next = 15;
            break;
          }

          if (!(wallet.profits < amount)) {
            _context3.next = 13;
            break;
          }

          return _context3.abrupt("return", res.json({
            ok: false,
            data: {
              message: "Insufficient available balance, Please try again.",
              wallet: wallet,
              perhaps: true
            }
          }));

        case 13:
          _context3.next = 17;
          break;

        case 15:
          if (!(wallet.available_balance < amount)) {
            _context3.next = 17;
            break;
          }

          return _context3.abrupt("return", res.json({
            ok: false,
            data: {
              message: "Insufficient available balance, Please try again.",
              wallet: wallet,
              perhaps: true
            }
          }));

        case 17:
          _context3.next = 19;
          return make_brass_payment(_typeof(bank_account) === "object" ? bank_account : _ds_conn.BANK_ACCOUNTS.readone(paycheck ? {
            user: platform_user,
            _id: platform_bank_account
          } : {
            user: user,
            _id: bank_account
          }), amount, _ds_conn.BRASS_SUBACCOUNTS.readone(wallet.brass_account).account_id, {
            req: req,
            res: res,
            wallet: wallet,
            user: user,
            paycheck: paycheck
          });

        case 19:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));

  return function withdraw(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

exports.withdraw = withdraw;

var place_sale = function place_sale(req, res) {
  var _req$body7 = req.body,
      currency = _req$body7.currency,
      value = _req$body7.value,
      rate = _req$body7.rate,
      offer_terms = _req$body7.offer_terms,
      icon = _req$body7.icon,
      alphabetic_name = _req$body7.alphabetic_name,
      seller = _req$body7.seller,
      flag = _req$body7.flag,
      minimum_sell_value = _req$body7.minimum_sell_value;
  var onsale = {
    currency: currency,
    offer_terms: offer_terms,
    rate: rate,
    seller: seller,
    icon: icon,
    value: value,
    alphabetic_name: alphabetic_name,
    flag: flag,
    minimum_sell_value: minimum_sell_value
  };

  var result = _ds_conn.ONSALE.write(onsale);

  seller = _ds_conn.USERS.readone(seller);
  (0, _entry.send_mail)({
    recipient: "info@udaralinks.com",
    recipient_name: "Admin",
    subject: "New Offer",
    sender: "signup@udaralinksapp.online",
    sender_name: "Udara Links",
    sender_pass: "ogpQfn9mObWD",
    html: (0, _email.offer_state_email)({
      user: {
        username: "Admin"
      },
      offer: _objectSpread(_objectSpread({}, onsale), {}, {
        state: ""
      }),
      misc: {
        preamble: "New Offer has been placed in the market by ".concat(seller.username, " [").concat(seller.email, "]"),
        created: Date.now(),
        state_definition: ""
      }
    })
  });
  res.json({
    ok: true,
    message: "placed sale",
    data: {
      onsale: true,
      _id: result._id,
      created: result.created
    }
  });
};

exports.place_sale = place_sale;

var previous_sales = function previous_sales(req, res) {
  var seller = req.params.seller;

  var seller_sales = _ds_conn.ONSALE.read({
    seller: seller,
    not_ready_for_transaction: true
  }, {
    subfolder: _entry.operating_currencies && _entry.operating_currencies.length ? _entry.operating_currencies.map(function (curr) {
      return curr.name;
    }) : _ds_conn.UTILS.read({
      util: "operating_currencies"
    }).map(function (curr) {
      return curr.name;
    })
  });

  res.json({
    ok: true,
    message: "seller sales",
    data: seller_sales
  });
};

exports.previous_sales = previous_sales;

var my_sales = function my_sales(req, res) {
  var seller = req.params.seller;

  var seller_sales = _ds_conn.ONSALE.read({
    seller: seller,
    not_ready_for_transaction: {
      $ne: true
    }
  }, {
    subfolder: _entry.operating_currencies && _entry.operating_currencies.length ? _entry.operating_currencies.map(function (curr) {
      return curr.name;
    }) : _ds_conn.UTILS.read({
      util: "operating_currencies"
    }).map(function (curr) {
      return curr.name;
    })
  });

  res.json({
    ok: true,
    message: "seller sales",
    data: seller_sales
  });
};

exports.my_sales = my_sales;

var wallet = function wallet(req, res) {
  var wallet_id = req.params.wallet_id;
  res.json({
    ok: false,
    data: _ds_conn.WALLETS.readone(wallet_id)
  });
};

exports.wallet = wallet;

var onsale_currency = function onsale_currency(req, res) {
  var onsale = req.params.onsale;

  var onsale_currency = _ds_conn.ONSALE.readone(onsale);

  if (onsale_currency) res.json({
    ok: true,
    data: onsale_currency
  });else res.json({
    ok: false,
    message: "data not found",
    data: onsale
  });
};

exports.onsale_currency = onsale_currency;

var transaction_offer = function transaction_offer(req, res) {
  var _req$body8 = req.body,
      offer_id = _req$body8.offer,
      onsale_id = _req$body8.onsale,
      party = _req$body8.party;

  var offer = _ds_conn.OFFERS.readone({
    _id: offer_id,
    onsale: onsale_id
  });

  if (!offer) return res.end();

  var onsale = _ds_conn.ONSALE.readone({
    _id: onsale_id,
    currency: offer.currency
  });

  var parties = party && party.length && _ds_conn.USERS.read(party);

  res.json({
    ok: true,
    message: "fetched data",
    data: {
      offer: offer,
      onsale: onsale,
      parties: parties
    }
  });
};

exports.transaction_offer = transaction_offer;

var remove_sale = function remove_sale(req, res) {
  var _req$body9 = req.body,
      onsale = _req$body9.onsale,
      currency = _req$body9.currency;
  onsale = _ds_conn.ONSALE.readone({
    _id: onsale,
    currency: currency
  });
  if (!onsale) return res.json({
    ok: false,
    message: "data not found"
  });

  var response = _ds_conn.ONSALE.remove(onsale._id, {
    subfolder: currency
  });

  if (!response) return res.json({
    ok: false,
    message: "data not found"
  });
  res.json({
    ok: true,
    message: "removed",
    data: {
      onsale: onsale._id
    }
  });
};

exports.remove_sale = remove_sale;

var like_sale = function like_sale(req, res) {
  var _req$body10 = req.body,
      onsale = _req$body10.onsale,
      currency = _req$body10.currency;

  _ds_conn.ONSALE.update({
    _id: onsale,
    currency: currency
  }, {
    likes: {
      $inc: 1
    }
  });

  res.json({
    ok: true,
    message: "liked sale",
    data: onsale
  });
};

exports.like_sale = like_sale;

var dislike_sale = function dislike_sale(req, res) {
  var _req$body11 = req.body,
      onsale = _req$body11.onsale,
      currency = _req$body11.currency;

  _ds_conn.ONSALE.update({
    _id: onsale,
    currency: currency
  }, {
    dislikes: {
      $inc: 1
    }
  });

  res.json({
    ok: true,
    message: "dislike sale",
    data: onsale
  });
};

exports.dislike_sale = dislike_sale;

var make_offer = function make_offer(req, res) {
  var _onsale_res$seller, _USERS$readone;

  var _req$body12 = req.body,
      amount = _req$body12.amount,
      offer_rate = _req$body12.offer_rate,
      offer_need = _req$body12.offer_need,
      wallet = _req$body12.wallet,
      currency = _req$body12.currency,
      user = _req$body12.user,
      onsale = _req$body12.onsale;
  var offer = {
    amount: amount,
    offer_rate: offer_rate,
    user: user,
    onsale: onsale,
    currency: currency,
    wallet: wallet,
    offer_need: offer_need,
    status: "pending"
  };

  var result = _ds_conn.OFFERS.write(offer);

  offer._id = result._id;
  offer.created = result.created;
  offer.updated = result.updated;

  _ds_conn.MY_OFFERS.write({
    user: user,
    currency: currency,
    offer: offer._id,
    onsale: onsale
  });

  var onsale_res = _ds_conn.ONSALE.update({
    _id: onsale,
    currency: currency
  }, {
    pending: {
      $inc: 1
    },
    not_ready_for_transaction: true
  });

  var seller_ = _ds_conn.USERS.readone((onsale_res === null || onsale_res === void 0 ? void 0 : (_onsale_res$seller = onsale_res.seller) === null || _onsale_res$seller === void 0 ? void 0 : _onsale_res$seller._id) || (onsale_res === null || onsale_res === void 0 ? void 0 : onsale_res.seller));

  (0, _entry.send_mail)({
    recipient: seller_.email,
    recipient_name: seller_.username,
    subject: "New Offer",
    sender: "signup@udaralinksapp.online",
    sender_name: "Udara Links",
    sender_pass: "ogpQfn9mObWD",
    html: (0, _email.offer_state_email)({
      user: seller_,
      offer: _ds_conn.OFFERS.readone({
        onsale: onsale,
        _id: offer._id
      }),
      misc: {
        preamble: "New Offer on your currency with details below.",
        created: Date.now(),
        state_definition: "Offer is awaiting acceptance from seller before transfering funds to escrow"
      }
    })
  });
  new_notification(onsale_res.seller, "new offer from ".concat((_USERS$readone = _ds_conn.USERS.readone(user)) === null || _USERS$readone === void 0 ? void 0 : _USERS$readone.username), new Array(onsale, offer._id), {
    currency: currency
  });
  res.json({
    ok: true,
    message: "offer placed",
    data: offer
  });
};

exports.make_offer = make_offer;

var not_ready_for_transaction = function not_ready_for_transaction(req, res) {
  var _req$body13 = req.body,
      onsale = _req$body13.onsale,
      currency = _req$body13.currency;

  _ds_conn.ONSALE.update({
    _id: onsale,
    currency: currency
  }, {
    not_ready_for_transaction: true
  });

  res.end();
};

exports.not_ready_for_transaction = not_ready_for_transaction;

var ready_for_transaction = function ready_for_transaction(req, res) {
  var _req$body14 = req.body,
      onsale = _req$body14.onsale,
      currency = _req$body14.currency;

  _ds_conn.ONSALE.update({
    _id: onsale,
    currency: currency
  }, {
    not_ready_for_transaction: false
  });

  res.end();
};

exports.ready_for_transaction = ready_for_transaction;

var buyer_offers = function buyer_offers(req, res) {
  var _req$body15 = req.body,
      buyer = _req$body15.buyer,
      skip = _req$body15.skip,
      limit = _req$body15.limit,
      ongoing = _req$body15.ongoing;

  var offers = _ds_conn.MY_OFFERS.read(ongoing ? {
    user: buyer,
    created: {
      $superquery: function $superquery(line, val, prop) {
        var offer = _ds_conn.OFFERS.readone(line.offer, {
          subfolder: line.onsale
        });

        if (new Array("closed", "completed").includes(offer.status)) return;
        return true;
      }
    }
  } : {
    user: buyer
  }, {
    skip: skip,
    limit: limit
  });

  var offers_id = new Array(),
      onsale_ids = new Array(),
      currencies = new Array();
  offers.map(function (offer) {
    offers_id.push(offer.offer);
    onsale_ids.push(offer.onsale);
    currencies.push(offer.currency || "dollar");
  });
  offers_id = _ds_conn.OFFERS.read(offers_id, {
    subfolder: onsale_ids
  });
  onsale_ids = _ds_conn.ONSALE.read(onsale_ids, {
    subfolder: currencies
  });
  offers.map(function (offer) {
    offer.offer = offers_id.find(function (off) {
      return off._id === offer.offer;
    });
    offer.onsale = onsale_ids.find(function (ons) {
      return ons._id === offer.onsale;
    });
  });
  res.json({
    ok: true,
    message: "buyer offers",
    data: offers
  });
};

exports.buyer_offers = buyer_offers;

var offer = function offer(req, res) {
  var _req$body16 = req.body,
      offer_id = _req$body16.offer,
      onsale = _req$body16.onsale;

  var offer_ = _ds_conn.OFFERS.readone({
    _id: offer_id,
    onsale: onsale
  });

  offer_ ? res.json({
    ok: true,
    message: "offer",
    data: offer_
  }) : res.json({
    ok: false,
    message: "offer not found"
  });
};

exports.offer = offer;

var my_offers = function my_offers(req, res) {
  var _req$body17 = req.body,
      onsale = _req$body17.onsale,
      user = _req$body17.user;

  var offers = _ds_conn.OFFERS.read({
    onsale: onsale,
    user: user
  });

  res.json({
    ok: true,
    message: "your offers",
    data: offers
  });
};

exports.my_offers = my_offers;

var onsale_offers = function onsale_offers(req, res) {
  var _req$params = req.params,
      onsale = _req$params.onsale,
      status = _req$params.status;

  var offers = _ds_conn.OFFERS.read({
    onsale: onsale,
    status: status
  });

  res.json({
    ok: true,
    message: "offers",
    data: offers
  });
};

exports.onsale_offers = onsale_offers;

var accept_offer = function accept_offer(req, res) {
  var _req$body18 = req.body,
      onsale = _req$body18.onsale,
      offer = _req$body18.offer;

  var result = _ds_conn.OFFERS.update({
    _id: offer,
    onsale: onsale
  }, {
    status: "accepted"
  });

  if (result.user._id) result.user = result.user._id;
  forward_message(result.user, result.seller, offer, {
    status: "accepted"
  });

  var onsale_res = _ds_conn.ONSALE.update({
    _id: onsale,
    currency: result.currency
  }, {
    pending: {
      $dec: 1
    },
    accepted: {
      $inc: 1
    }
  });

  var user_ = _ds_conn.USERS.readone(result.user);

  (0, _entry.send_mail)({
    recipient: user_.email,
    recipient_name: user_.username,
    subject: "Offer Accepted",
    sender: "signup@udaralinksapp.online",
    sender_name: "Udara Links",
    sender_pass: "ogpQfn9mObWD",
    html: (0, _email.offer_state_email)({
      user: user_,
      offer: result,
      misc: {
        preamble: "Your offer with details below has been <b>Accepted</b> by Seller. ",
        created: Date.now(),
        state_definition: "Offer accepted by seller, awaiting buyer to transfer funds to escrow account"
      }
    })
  });
  new_notification(result.user, "offer accepted by ".concat(_ds_conn.USERS.readone(onsale_res.seller).username), new Array(onsale, offer), {
    currency: result.currency
  });
  result ? res.json({
    ok: true,
    message: "Offer accepted",
    data: offer
  }) : res.json({
    ok: false
  });
};

exports.accept_offer = accept_offer;

var decline_offer = function decline_offer(req, res) {
  var _req$body19 = req.body,
      onsale = _req$body19.onsale,
      offer = _req$body19.offer;

  var result = _ds_conn.OFFERS.update({
    _id: offer,
    onsale: onsale
  }, {
    status: "declined"
  });

  if (result.user._id) result.user = result.user._id;
  forward_message(result.user, result.seller, offer, {
    status: "declined"
  });

  var onsale_res = _ds_conn.ONSALE.update({
    _id: onsale,
    currency: result.currency
  }, {
    pending: {
      $dec: 1
    },
    declined: {
      $inc: 1
    }
  });

  var user_ = _ds_conn.USERS.readone(result.user);

  (0, _entry.send_mail)({
    recipient: user_.email,
    recipient_name: user_.username,
    subject: "Offer Declined",
    sender: "signup@udaralinksapp.online",
    sender_name: "Udara Links",
    sender_pass: "ogpQfn9mObWD",
    html: (0, _email.offer_state_email)({
      user: user_,
      offer: result,
      misc: {
        preamble: "Your offer with details below has been <b>Declined</b> by Seller. ",
        created: Date.now(),
        state_definition: "Offer placed by buyer was rejected by seller"
      }
    })
  });
  new_notification(result.user, "offer declined by ".concat(_ds_conn.USERS.readone(onsale_res.seller).username), new Array(onsale, offer), {
    currency: result.currency
  });
  result ? res.json({
    ok: true,
    message: "Offer declined",
    data: offer
  }) : res.json({
    ok: false
  });
};

exports.decline_offer = decline_offer;

var remove_offer = function remove_offer(req, res) {
  var _req$body20 = req.body,
      offer = _req$body20.offer,
      onsale = _req$body20.onsale;

  var result = _ds_conn.OFFERS.remove({
    _id: offer,
    onsale: onsale
  });

  result && _ds_conn.MY_OFFERS.remove({
    offer: offer,
    buyer: result.user
  });

  _ds_conn.ONSALE.update(result.onsale, {
    pending: {
      $dec: 1
    }
  }, {
    subfolder: result.currency
  });

  res.json({
    ok: true,
    message: "offer removed",
    data: offer
  });
};

exports.remove_offer = remove_offer;

var fulfil_offer = function fulfil_offer(req, res) {
  var _offer_$user;

  var _req$body21 = req.body,
      offer = _req$body21.offer,
      buyer = _req$body21.buyer,
      proof = _req$body21.proof,
      seller = _req$body21.seller,
      onsale = _req$body21.onsale,
      timestamp = Date.now();
  var filename = "".concat((0, _entry.generate_reference_number)(), ".jpg");

  _fs["default"].writeFileSync("".concat(__dirname.split("/").slice(0, -1).join("/"), "/Assets/Images/").concat(filename), Buffer.from("".concat(proof), "base64"));

  var offer_ = _ds_conn.OFFERS.update({
    _id: offer,
    onsale: onsale
  }, {
    status: "awaiting confirmation",
    timestamp: timestamp,
    proof: filename
  });

  var onsale_res = _ds_conn.ONSALE.update({
    _id: onsale,
    currency: offer_.currency
  }, {
    in_escrow: {
      $dec: 1
    },
    awaiting_confirmation: {
      $inc: 1
    }
  });

  forward_message(seller, buyer, offer, {
    status: "awaiting confirmation"
  });

  var user_ = _ds_conn.USERS.readone(((_offer_$user = offer_.user) === null || _offer_$user === void 0 ? void 0 : _offer_$user._id) || offer_.user);

  (0, _entry.send_mail)({
    recipient: user_.email,
    recipient_name: user_.username,
    subject: "Offer Awaiting-Confirmation",
    sender: "signup@udaralinksapp.online",
    sender_name: "Udara Links",
    sender_pass: "ogpQfn9mObWD",
    html: (0, _email.offer_state_email)({
      user: user_,
      offer: offer_,
      misc: {
        preamble: "Your offer with details below has been said to be<b>Fulfilled</b> by Seller. ",
        created: Date.now(),
        state_definition: "Seller has claimed to fulfil transaction outside the app, and is now awaiting buyer to confirm the transaction",
        filename: filename
      }
    })
  });
  new_notification(buyer, "Fulfilled offer by ".concat(_ds_conn.USERS.readone(onsale_res.seller).username), new Array(onsale, offer), {
    currency: offer_.currency
  });
  res.json({
    ok: true,
    message: "offer fulfilled",
    data: {
      offer: offer,
      onsale: onsale,
      timestamp: timestamp
    }
  });
};

exports.fulfil_offer = fulfil_offer;

var forward_message = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(from, to, offer, meta) {
    var chat, message, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          chat = _ds_conn.CHATS.readone({
            offer: offer
          });

          if (chat) {
            message = {
              from: from,
              to: to,
              attachment: new Array(offer),
              attachment_meta: meta,
              chat: chat._id,
              offer: offer
            };
            result = _ds_conn.MESSAGES.write(message);
            message._id = result._id;
            message.created = result.created;
          }

        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));

  return function forward_message(_x9, _x10, _x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var deposit_to_escrow = function deposit_to_escrow(req, res) {
  var _req$body22 = req.body,
      offer = _req$body22.offer,
      seller = _req$body22.seller,
      onsale = _req$body22.onsale,
      buyer_wallet = _req$body22.buyer_wallet;

  var offer_ = _ds_conn.OFFERS.readone({
    _id: offer,
    onsale: onsale
  });

  var cost = Number(offer_.amount) * Number(offer_.offer_rate),
      timestamp = Date.now();
  if (offer_ && offer_.status === "in-escrow") return res.end();

  _ds_conn.OFFERS.update({
    _id: offer,
    onsale: onsale
  }, {
    status: "in-escrow",
    timestamp: timestamp
  });

  if (!buyer_wallet) buyer_wallet = offer_.user.wallet;
  cost = Number(cost);

  var wallet_update = _ds_conn.WALLETS.update(buyer_wallet, {
    naira: {
      $dec: cost
    }
  });

  if (offer_.user && offer_.user._id) {
    var user = offer_.user;
    (0, _entry.send_mail)({
      recipient: user.email,
      recipient_name: user.username,
      subject: "Deposit to Escrow",
      sender: "signup@udaralinksapp.online",
      sender_name: "Udara Links",
      sender_pass: "ogpQfn9mObWD",
      html: (0, _email.tx_receipts)({
        user: user,
        tx: {
          type: "escrow",
          title: "Amount",
          value: cost,
          created: Date.now(),
          preamble: "desposited to escrow"
        }
      })
    });
    user = user._id || user;
  }

  var user_ = _ds_conn.USERS.readone(seller);

  (0, _entry.send_mail)({
    recipient: user_.email,
    recipient_name: user_.username,
    subject: "Offer In-Escrow",
    sender: "signup@udaralinksapp.online",
    sender_name: "Udara Links",
    sender_pass: "ogpQfn9mObWD",
    html: (0, _email.offer_state_email)({
      user: user_,
      offer: offer_,
      misc: {
        preamble: "Value for your currency in the market has been deposited into Escrow by Buyer. ",
        created: Date.now(),
        state_definition: "Buyer already sent his funds to escrow wallet, awaiting seller to fulfil the transaction stated by the offer"
      }
    })
  });

  _ds_conn.WALLETS.update(platform_wallet, {
    naira: {
      $inc: cost
    }
  });

  var b_wallet = _ds_conn.WALLETS.readone(offer_.user.wallet || buyer_wallet);

  var p_wallet = _ds_conn.WALLETS.readone(platform_wallet);

  var reference_number = (0, _entry.generate_reference_number)();

  try {
    (0, _axios["default"])({
      url: "https://api.getbrass.co/banking/payments",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(brass_personal_access_token)
      },
      data: {
        title: "Deposit to Escrow",
        amount: String(cost * 100),
        to: {
          name: p_wallet.brass_account.name,
          bank: p_wallet.brass_account.bank_id,
          account_number: p_wallet.brass_account.number
        },
        source_account: b_wallet.brass_account.account_id,
        customer_reference: reference_number
      }
    }).then(function (reslt) {})["catch"](function (e) {}); // response = response && response.data;
  } catch (e) {}

  _ds_conn.ONSALE.update({
    _id: onsale,
    currency: offer_.currency
  }, {
    in_escrow: {
      $inc: 1
    },
    accepted: {
      $dec: 1
    }
  });

  forward_message(offer_.user._id, seller, offer, {
    status: "in-escrow"
  });
  new_notification(seller, "buyer deposited to escrow", new Array(onsale, offer), {
    currency: offer_.currency
  });
  create_transaction({
    title: "deposit in escrow",
    wallet: platform_wallet,
    user: platform_user,
    from_value: offer_.amount * offer_.offer_rate,
    debit: true,
    data: {
      offer: offer,
      onsale: onsale,
      party: new Array(offer_.user._id, seller)
    }
  });
  res.json({
    ok: true,
    message: "deposited to escrow",
    data: {
      offer: offer,
      onsale: onsale,
      seller: seller,
      timestamp: timestamp,
      transaction: create_transaction({
        title: "deposit to escrow",
        wallet: wallet_update && wallet_update._id,
        user: offer_.user._id,
        from_value: offer_.amount * offer_.offer_rate,
        debit: true,
        data: {
          offer: offer,
          onsale: onsale,
          party: new Array(offer_.user._id, seller)
        }
      })
    }
  });
};

exports.deposit_to_escrow = deposit_to_escrow;

var confirm_offer = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body23, offer, onsale, seller, seller_wallet, offer_, cost, sell_wallet, reference_number, p_wallet, r, bal, data, seller_;

    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body23 = req.body, offer = _req$body23.offer, onsale = _req$body23.onsale, seller = _req$body23.seller, seller_wallet = _req$body23.seller_wallet;
          offer_ = _ds_conn.OFFERS.readone({
            _id: offer,
            onsale: onsale
          });
          cost = Number(offer_.offer_rate) * Number(offer_.amount);

          if (!(offer_ && offer_.status === "completed")) {
            _context5.next = 5;
            break;
          }

          return _context5.abrupt("return", res.end());

        case 5:
          _ds_conn.OFFERS.update({
            _id: offer,
            onsale: onsale
          }, {
            status: "completed",
            timestamp: Date.now()
          });

          if (!seller_wallet) {
            seller_wallet = _ds_conn.USERS.readone(seller);
            seller_wallet = seller_wallet.wallet;
          }

          sell_wallet = _ds_conn.WALLETS.readone(seller_wallet);
          reference_number = (0, _entry.generate_reference_number)();
          p_wallet = _ds_conn.WALLETS.readone(platform_wallet);

          if (!(cost * COMMISSION >= 100)) {
            _context5.next = 25;
            break;
          }

          r = _ds_conn.LOGS.write({
            reference_number: reference_number,
            sell_wallet: JSON.stringify(sell_wallet)
          });
          _context5.prev = 12;
          _context5.next = 15;
          return (0, _entry.fetch_wallet_brass_account)(p_wallet);

        case 15:
          bal = _context5.sent;
          data = {
            title: "Offer confirmed",
            amount: String(cost * COMMISSION * 100),
            to: {
              name: sell_wallet.brass_account.name,
              bank: sell_wallet.brass_account.bank_id,
              account_number: sell_wallet.brass_account.number
            },
            source_account: p_wallet.brass_account.account_id,
            customer_reference: reference_number
          };
          if (Number(bal.data.ledger_balance.raw) / 100 < cost * COMMISSION) _Udara.Payables.unshift({
            r: r,
            data: data
          });else (0, _axios["default"])({
            url: "https://api.getbrass.co/banking/payments",
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer ".concat(brass_personal_access_token)
            },
            data: data
          }).then(function (reslt) {
            _ds_conn.LOGS.update(r._id, {
              data: reslt.data
            });
          })["catch"](function (e) {
            _ds_conn.LOGS.update(r._id, {
              e: JSON.stringify(e),
              err: true
            });
          });
          _context5.next = 23;
          break;

        case 20:
          _context5.prev = 20;
          _context5.t0 = _context5["catch"](12);

          _ds_conn.LOGS.update(r._id, {
            e: JSON.stringify(_context5.t0),
            err: "meme"
          });

        case 23:
          _context5.next = 26;
          break;

        case 25:
          _ds_conn.PENDING_TRANSACTIONS.write({
            reference_number: reference_number,
            reason: "Transaction value too low",
            value: cost * COMMISSION,
            source_account: p_wallet.brass_account.account_id,
            brass_account: p_wallet.brass_account._id,
            wallet: p_wallet._id,
            recipient_wallet: sell_wallet._id,
            recipient_brass_account: sell_wallet.brass_account._id,
            recipient_account_id: sell_wallet.brass_account.account_id
          });

        case 26:
          _ds_conn.ONSALE.update({
            _id: onsale,
            currency: offer_.currency
          }, {
            awaiting_confirmation: {
              $dec: 1
            },
            completed: {
              $inc: 1
            }
          });

          _ds_conn.WALLETS.update(platform_wallet, {
            naira: {
              $dec: cost
            },
            profits: {
              $inc: cost * 0.01
            }
          });

          _ds_conn.WALLETS.update(seller_wallet, {
            naira: {
              $inc: cost * COMMISSION
            }
          });

          if (seller) {
            seller_ = seller._id ? seller : _ds_conn.USERS.readone(seller);
            (0, _entry.send_mail)({
              recipient: seller_.email,
              recipient_name: seller_.username,
              subject: "Transaction Completed",
              sender: "signup@udaralinksapp.online",
              sender_name: "Udara Links",
              sender_pass: "ogpQfn9mObWD",
              html: (0, _email.tx_receipts)({
                user: seller_,
                tx: {
                  title: "Amount",
                  value: cost,
                  fee: cost * 0.01,
                  created: Date.now(),
                  preamble: "credited to"
                }
              })
            });
          }

          new_notification(seller, "buyer confirmed transaction successful", new Array(onsale, offer), {
            currency: offer_.currency
          });
          forward_message(offer_.user._id, seller, offer, {
            status: "completed"
          });
          create_transaction({
            title: "Platform Commission",
            wallet: platform_wallet,
            user: platform_user,
            from_value: cost * 0.01,
            data: {
              offer: offer,
              onsale: onsale,
              party: new Array(seller, offer_.user._id)
            }
          });
          create_transaction({
            title: "confirmed offer",
            wallet: platform_wallet,
            user: platform_user,
            from_value: cost,
            debit: true,
            data: {
              offer: offer,
              onsale: onsale,
              party: new Array(seller, offer_.user._id)
            }
          });
          create_transaction({
            title: "offer confirmed",
            wallet: sell_wallet._id,
            user: sell_wallet.user,
            from_value: cost,
            reference_number: reference_number,
            data: {
              offer: offer,
              onsale: onsale,
              party: new Array(seller, offer_.user._id)
            }
          });
          res.json({
            ok: true,
            message: "offer confirmed",
            data: {
              offer: offer,
              onsale: onsale,
              seller: seller,
              transaction: create_transaction({
                title: "transaction fee",
                wallet: sell_wallet._id,
                user: sell_wallet.user,
                from_value: cost * 0.01,
                debit: true,
                data: {
                  offer: offer,
                  onsale: onsale,
                  party: new Array(seller, offer_.user._id)
                }
              })
            }
          });

        case 36:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[12, 20]]);
  }));

  return function confirm_offer(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.confirm_offer = confirm_offer;

var extend_time = function extend_time(req, res) {
  var _req$body24 = req.body,
      offer = _req$body24.offer,
      onsale = _req$body24.onsale;
  var timestamp = Date.now();

  _ds_conn.OFFERS.update({
    _id: offer,
    onsale: onsale
  }, {
    timestamp: timestamp,
    requested_time: false
  });

  res.json({
    ok: true,
    message: "time extended",
    data: {
      timestamp: timestamp
    }
  });
};

exports.extend_time = extend_time;

var request_time_extension = function request_time_extension(req, res) {
  var _req$body25 = req.body,
      offer = _req$body25.offer,
      onsale = _req$body25.onsale;

  _ds_conn.OFFERS.update({
    _id: offer,
    onsale: onsale
  }, {
    requested_time: true
  });

  res.json({
    ok: true,
    message: "time requested",
    data: offer
  });
};

exports.request_time_extension = request_time_extension;

var offer_in_dispute = function offer_in_dispute(req, res) {
  var _ONSALE$update, _USERS$readone2, _USERS$readone3;

  var _req$body26 = req.body,
      offer = _req$body26.offer,
      initiator = _req$body26.initiator,
      onsale = _req$body26.onsale,
      prior_offer_status = _req$body26.prior_offer_status,
      seller = _req$body26.seller,
      buyer = _req$body26.buyer,
      title = _req$body26.title,
      details = _req$body26.details,
      currency = _req$body26.currency;

  var result = _ds_conn.DISPUTES.write({
    offer: offer,
    initiator: initiator,
    seller: seller,
    prior_offer_status: prior_offer_status,
    buyer: buyer,
    title: title,
    currency: currency,
    details: details,
    onsale: onsale
  });

  var offer_ = _ds_conn.OFFERS.update({
    _id: offer,
    onsale: onsale
  }, {
    prior_offer_status: prior_offer_status,
    status: "in-dispute"
  });

  new_notification(initiator === buyer ? seller : buyer, "Offer in dispute", new Array(offer, onsale), {
    currency: currency
  });
  forward_message(offer_.user._id, seller, offer, {
    status: "in-dispute"
  });

  _ds_conn.ONSALE.update({
    _id: onsale,
    currency: offer_.currency
  }, (_ONSALE$update = {}, _defineProperty(_ONSALE$update, prior_offer_status, {
    $dec: 1
  }), _defineProperty(_ONSALE$update, "in_dispute", {
    $inc: 1
  }), _ONSALE$update));

  var b_email = (_USERS$readone2 = _ds_conn.USERS.readone(offer_.user._id || offer_.user)) === null || _USERS$readone2 === void 0 ? void 0 : _USERS$readone2.email;
  var s_email = (_USERS$readone3 = _ds_conn.USERS.readone(offer_.seller)) === null || _USERS$readone3 === void 0 ? void 0 : _USERS$readone3.email;
  (0, _entry.send_mail)({
    to: "".concat(b_email, ",").concat(s_email),
    subject: "Offer In-Dispute",
    sender: "signup@udaralinksapp.online",
    sender_name: "Udara Links",
    sender_pass: "ogpQfn9mObWD",
    html: (0, _email.offer_state_email)({
      user: {},
      offer: offer_,
      misc: {
        preamble: "Offer has been flagged as <b>Disputed</b> by ".concat(initiator === seller ? "Seller" : "Buyer", "."),
        created: Date.now(),
        state_definition: "A disagreement was reached on the app based on the transactions."
      }
    })
  });
  if (result) res.json({
    ok: true,
    message: "dispute raised",
    data: {
      _id: result._id,
      offer: offer
    }
  });else res.json({
    ok: false,
    message: "couldn't create dispute"
  });
};

exports.offer_in_dispute = offer_in_dispute;

var resolve_dispute = function resolve_dispute(req, res) {
  var _ONSALE$update2;

  var _req$body27 = req.body,
      offer = _req$body27.offer,
      onsale = _req$body27.onsale,
      timestamp = Date.now();

  var offer_ = _ds_conn.OFFERS.readone({
    _id: offer,
    onsale: onsale
  });

  if (!offer_) return res.json({
    ok: false,
    message: "offer not found"
  });

  _ds_conn.OFFERS.update({
    _id: offer,
    onsale: onsale
  }, {
    status: offer_.prior_offer_status,
    prior_offer_status: "",
    timestamp: timestamp
  });

  var update = _ds_conn.ONSALE.update({
    _id: onsale,
    currency: offer_.currency
  }, (_ONSALE$update2 = {}, _defineProperty(_ONSALE$update2, offer_.prior_offer_status.replace("-", "_"), {
    $inc: 1
  }), _defineProperty(_ONSALE$update2, "in_dispute", {
    $dec: 1
  }), _ONSALE$update2));

  var dispute = _ds_conn.DISPUTES.readone({
    offer: offer
  });

  dispute && new_notification(dispute.initiator === offer_.user._id ? update.seller._id || update.seller : offer_.user._id, "Dispute resolved", new Array(offer, onsale), {
    currency: offer_.currency
  });
  forward_message(offer_.user._id, update.seller, offer, {
    status: offer_.prior_offer_status
  });

  _ds_conn.DISPUTES.remove({
    offer: offer
  });

  res.json({
    ok: true,
    message: "dispute resolved",
    data: {
      offer: offer,
      timestamp: timestamp
    }
  });
};

exports.resolve_dispute = resolve_dispute;

var dispute = function dispute(req, res) {
  var offer = req.params.offer;

  var dispute = _ds_conn.DISPUTES.readone({
    offer: offer
  });

  res.json({
    ok: true,
    message: "offer dispute",
    data: dispute
  });
};

exports.dispute = dispute;

var disputes = function disputes(req, res) {
  var _req$body28 = req.body,
      skip = _req$body28.skip,
      limit = _req$body28.limit;

  var disputes = _ds_conn.DISPUTES.read(null, {
    skip: skip,
    limit: limit
  });

  var onsales = _ds_conn.ONSALE.read(disputes.map(function (dispute) {
    return dispute.onsale;
  }), {
    subfolder: disputes.map(function (dispute) {
      return dispute.currency;
    })
  });

  var offers = _ds_conn.OFFERS.read(disputes.map(function (dispute) {
    return dispute.offer;
  }), {
    subfolder: disputes.map(function (dispute) {
      return dispute.onsale;
    })
  });

  disputes = disputes.map(function (dispute) {
    var onsale = onsales.find(function (onsale_) {
      return onsale_._id === dispute.onsale;
    });
    if (onsale) dispute.onsale = onsale;
    var offer = offers.find(function (offer_) {
      return offer_._id === dispute.offer;
    });
    if (offer) dispute.offer = offer;
    return dispute;
  });
  res.json({
    ok: true,
    message: "disputes",
    data: disputes
  });
};

exports.disputes = disputes;

var refund_buyer = function refund_buyer(req, res) {
  var _req$body29 = req.body,
      offer = _req$body29.offer,
      onsale = _req$body29.onsale;

  var offer_ = _ds_conn.OFFERS.readone({
    _id: offer,
    onsale: onsale
  });

  if (!offer_ || offer_ && offer_.status !== "in-dispute") return res.json({
    ok: false,
    message: "cannot find offer"
  });
  var cost = Number(offer_.amount) * Number(offer_.offer_rate);

  _ds_conn.WALLETS.update(platform_wallet, {
    naira: {
      $dec: cost
    }
  });

  var wallet_update = _ds_conn.WALLETS.update(offer_.user.wallet, {
    naira: {
      $inc: cost
    }
  });

  if (offer_.user) {
    var user = offer_.user;
    (0, _entry.send_mail)({
      recipient: user.email,
      recipient_name: user.username,
      subject: "Transaction Reverted",
      sender: "signup@udaralinksapp.online",
      sender_name: "Udara Links",
      sender_pass: "ogpQfn9mObWD",
      html: (0, _email.tx_receipts)({
        user: user,
        tx: {
          title: "Amount",
          value: cost,
          type: "escrow",
          created: Date.now(),
          preamble: "refunded to your Udaralinks wallet"
        }
      })
    });
  }

  var b_wallet = _ds_conn.WALLETS.readone(offer_.user.wallet);

  _ds_conn.OFFERS.update({
    _id: offer,
    onsale: onsale
  }, {
    status: "closed"
  });

  var onsale_update = _ds_conn.ONSALE.update({
    _id: onsale,
    currency: offer_.currency
  }, {
    in_dispute: {
      $dec: 1
    },
    closed: {
      $inc: 1
    }
  });

  new_notification(offer_.user._id, "Your escrow deposit for below offer has been refunded", new Array(offer, onsale), {
    currency: offer_.currency
  });
  forward_message(offer_.user._id, onsale_update.seller, offer, {
    status: "closed"
  });

  try {
    (0, _axios["default"])({
      url: "https://api.getbrass.co/banking/payments",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(brass_personal_access_token)
      },
      data: {
        title: "Buyer Refunded",
        amount: String(cost * 100),
        to: {
          name: b_wallet.brass_account.name,
          bank: b_wallet.brass_account.bank_id,
          account_number: b_wallet.brass_account.number
        },
        source_account: _ds_conn.WALLETS.readone(platform_wallet).brass_account.account_id,
        customer_reference: (0, _entry.generate_reference_number)()
      }
    }).then(function (reslt) {})["catch"](function (e) {}); // response = response && response.data;
  } catch (e) {}

  res.json({
    ok: true,
    message: "buyer refunded",
    data: {
      offer: offer,
      transaction: create_transaction({
        title: "deposit refunded",
        wallet: wallet_update && wallet_update._id,
        user: wallet_update.user,
        from_value: cost,
        data: {
          offer: offer,
          onsale: onsale,
          party: new Array(offer_.user._id, onsale_update.seller)
        }
      })
    }
  });
};

exports.refund_buyer = refund_buyer;

var get_banks = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var banks;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return (0, _axios["default"])({
            method: "get",
            url: "https://api.getbrass.co/banking/banks?page=1&limit=116",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer ".concat(brass_personal_access_token)
            }
          });

        case 3:
          banks = _context6.sent;
          _context6.next = 8;
          break;

        case 6:
          _context6.prev = 6;
          _context6.t0 = _context6["catch"](0);

        case 8:
          banks = banks && banks.data;
          banks && banks.data ? res.json({
            ok: true,
            message: "get banks endpoint",
            data: banks.data
          }) : res.json({
            ok: false,
            message: "cannot get banks",
            data: new Array()
          });

        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 6]]);
  }));

  return function get_banks(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.get_banks = get_banks;

var resolve_bank_account_name = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body30, account_number, bank, details;

    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _req$body30 = req.body, account_number = _req$body30.account_number, bank = _req$body30.bank;
          _context7.prev = 1;
          _context7.next = 4;
          return (0, _axios["default"])({
            method: "get",
            url: "https://api.getbrass.co/banking/banks/account-name?bank=".concat(bank, "&account_number=").concat(account_number),
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer ".concat(brass_personal_access_token)
            }
          });

        case 4:
          details = _context7.sent;
          details = details && details.data;
          if (details && details.data) res.json({
            ok: true,
            message: "Account name resolved",
            data: details.data
          });else res.json({
            ok: false,
            message: "Cannot resolve account name at the moment",
            data: details.error
          });
          _context7.next = 11;
          break;

        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](1);

        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 9]]);
  }));

  return function resolve_bank_account_name(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.resolve_bank_account_name = resolve_bank_account_name;

var bank_accounts = function bank_accounts(req, res) {
  var user = req.params.user;

  var accounts = _ds_conn.BANK_ACCOUNTS.read({
    user: user
  });

  res.json({
    ok: true,
    message: "user bank accounts",
    data: accounts
  });
};

exports.bank_accounts = bank_accounts;

var add_bank_account = function add_bank_account(req, res) {
  var _req$body31 = req.body,
      bank = _req$body31.bank,
      bank_name = _req$body31.bank_name,
      bank_id = _req$body31.bank_id,
      user = _req$body31.user,
      wallet = _req$body31.wallet,
      account_name = _req$body31.account_name,
      account_number = _req$body31.account_number;

  var result = _ds_conn.BANK_ACCOUNTS.write({
    bank: bank,
    bank_name: bank_name,
    account_name: account_name,
    user: user,
    bank_id: bank_id,
    account_number: account_number
  });

  _ds_conn.WALLETS.update(wallet, {
    bank_accounts: {
      $inc: 1
    }
  });

  res.json({
    ok: true,
    message: "bank account saved",
    data: {
      _id: result._id,
      created: result.created
    }
  });
};

exports.add_bank_account = add_bank_account;

var remove_bank_account = function remove_bank_account(req, res) {
  var _req$body32 = req.body,
      user = _req$body32.user,
      account = _req$body32.account,
      wallet = _req$body32.wallet;

  _ds_conn.BANK_ACCOUNTS.remove({
    user: user,
    _id: account
  });

  _ds_conn.WALLETS.update(wallet, {
    bank_accounts: {
      $dec: 1
    }
  });

  res.end();
};

exports.remove_bank_account = remove_bank_account;

var refresh_wallet = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var wallet;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          wallet = req.params.wallet;
          wallet = _ds_conn.WALLETS.readone(wallet);
          _context8.prev = 2;
          _context8.next = 5;
          return (0, _entry.fetch_wallet_brass_account)(wallet);

        case 5:
          _context8.next = 9;
          break;

        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](2);

        case 9:
          res.json({
            ok: true,
            message: "wallet refreshed",
            data: wallet
          });

        case 10:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[2, 7]]);
  }));

  return function refresh_wallet(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

exports.refresh_wallet = refresh_wallet;

var state_offer_need = function state_offer_need(req, res) {
  var offer_need = req.body.offer_need;

  var result = _ds_conn.OFFER_NEED.write(offer_need);

  res.json({
    ok: true,
    message: "offer need",
    data: {
      _id: result._id,
      created: result.created
    }
  });
};

exports.state_offer_need = state_offer_need;
var brass_webhook_secret = "udara_brass_webhook_secreet";
var brass_personal_access_token = "11105|pat-xO2vMdqUN6X7Jd0V6FdOiyHwwRvtWBc0aWBZ63oi" || "335|pat-L1yPwtp5HyylGgNWbN9kUjhcQ6W7784h6IydqlIP";
exports.brass_personal_access_token = brass_personal_access_token;

var brass_callback = function brass_callback(req, res) {
  var event_ = req.body; // validate event
  // const hash = require("crypto")
  //   .createHmac("sha256", brass_webhook_secret)
  //   .update(JSON.stringify(event))
  //   .digest("hex");
  // return appropriate response if the request hash does not match the header
  // if (hash != req.headers["X-Brass-Signature"])thorized request." });
  //   return res.status(401).json({ message: "Unau
  // do something with event

  if (_ds_conn.LOGS.readone({
    led_id: event_ && event_.data.id
  })) return res.json(200);

  _ds_conn.LOGS.write(_objectSpread(_objectSpread({}, event_), {}, {
    led_id: event_ && event_.data && event_.data.id
  }));

  var event = event_.event,
      data = event_.data;

  if (event === "account.created") {
    var user = data.customer_reference.replace(/_/g, "~");

    var result = _ds_conn.BRASS_SUBACCOUNTS.write({
      number: data.number,
      name: data.name,
      alias: data.alias,
      account_id: data.id,
      bank_id: data.bank.data.id,
      bank_name: data.bank.data.name,
      user: user
    });

    user = _ds_conn.USERS.update(user, {
      brass_account: result._id
    });
    user.wallet && _ds_conn.WALLETS.update(user.wallet, {
      brass_account: result._id
    });
  } else if (event === "account.credited") {
    var _user = _ds_conn.USERS.readone(data.account && data.account.data.customer_reference && data.account && data.account.data.customer_reference.replace(/_/g, "~"));

    if (!new Array("Offer confirmed", "Deposit to Escrow", "Buyer Refunded").includes(data.memo)) {
      _user && _user.wallet && _ds_conn.WALLETS.update(_user.wallet, {
        naira: {
          $inc: Number(data.amount.raw) / 100
        }
      });

      if (_user) {
        _user = _user._id ? _user : _ds_conn.USERS.readone(_user);
        (0, _entry.send_mail)({
          recipient: _user.email,
          recipient_name: _user.username,
          subject: "Credit Alert",
          sender: "signup@udaralinksapp.online",
          sender_name: "Udara Links",
          sender_pass: "ogpQfn9mObWD",
          html: (0, _email.tx_receipts)({
            user: _user,
            tx: {
              title: "Credit",
              value: Number(data.amount.raw) / 100,
              created: Date.now(),
              preamble: "credited to"
            }
          })
        });
      }

      create_transaction({
        wallet: _user.wallet,
        user: _user._id,
        from_value: Number(Number(data.amount.raw) / 100),
        title: data.memo && data.memo.startsWith("offer") ? data.memo : "Top Up - ".concat(data.memo)
      });
    }
  } else if (event === "account.debited") {
    var amount = data.amount,
        memo = data.memo,
        account = data.account;

    var _user2 = account.data.customer_reference.replace(/_/g, "~");

    _user2 = _ds_conn.USERS.readone(_user2);

    var _wallet = _ds_conn.WALLETS.readone(_user2.wallet);

    if (!new Array("withdrawal", "Offer confirmed", "Deposit to Escrow", "Buyer Refunded").includes(memo)) {
      create_transaction({
        wallet: _wallet._id,
        user: _user2._id,
        from_value: Number(Number(amount.raw) / 100),
        title: memo,
        debit: true
      });
      _wallet._id && _ds_conn.WALLETS.update(_wallet._id, {
        naira: {
          $dec: Number(amount.raw) / 100
        }
      });
    } else if (memo === "withdrawal") _ds_conn.TRANSACTIONS.update({
      wallet: _wallet._id,
      title: "pending-withdrawal"
    }, {
      title: "Withdraw Successful"
    });
  } else if (event === "payable.completed") {
    var _amount = data.amount,
        status = data.status,
        customer_reference = data.customer_reference,
        title = data.title,
        _account = data.source_account;

    var _user3 = _account.data.customer_reference.replace(/_/g, "~");

    _user3 = _ds_conn.USERS.readone(_user3);

    var _wallet2 = _ds_conn.WALLETS.readone(_user3.wallet);

    _ds_conn.LOGS.write({
      user: _user3 && _user3._id,
      wallet: _wallet2 && _wallet2._id,
      acc: _account.data.customer_reference,
      amt: Number(_amount.raw)
    });

    if (status === "success") {
      _ds_conn.TRANSACTIONS.update({
        reference_number: customer_reference,
        wallet: _wallet2._id
      }, {
        title: "Withdraw Successful"
      });
    } else {
      var tx = _ds_conn.TRANSACTIONS.readone({
        reference_number: customer_reference,
        wallet: _wallet2._id
      });

      if (tx && tx.title === "pending-withdrawal") {
        _wallet2._id && _ds_conn.WALLETS.update(_wallet2._id, {
          naira: {
            $inc: Number(_amount.raw) / 100
          }
        });

        _ds_conn.TRANSACTIONS.update({
          reference_number: customer_reference,
          wallet: _wallet2._id
        }, {
          title: "Withdrawal Failed"
        });

        if (_user3) {
          _user3 = _user3._id ? _user3 : _ds_conn.USERS.readone(_user3);
          (0, _entry.send_mail)({
            recipient: _user3.email,
            recipient_name: _user3.username,
            subject: "Withdrawal Failed",
            sender: "signup@udaralinksapp.online",
            sender_name: "Udara Links",
            sender_pass: "ogpQfn9mObWD",
            html: (0, _email.tx_receipts)({
              user: _user3,
              tx: {
                title: "Amount",
                value: Number(_amount.raw) / 100,
                created: Date.now(),
                preamble: "credited to"
              }
            })
          });
        }
      } else if (tx && tx.title === "Withdrawal Failed") {} else {
        if (title === "Offer confirmed") {
          _ds_conn.PENDING_TRANSACTIONS.write({
            reference_number: customer_reference,
            reason: "Transfer failed",
            value: Number(_amount.raw) / 100,
            source_balance: Number(_account.data.available_balance.raw) / 100,
            source_account: _wallet2.brass_account.account_id,
            brass_account: _wallet2.brass_account._id,
            wallet: _wallet2._id
          });
        }
      }
    }
  }

  res.send(200);
};

exports.brass_callback = brass_callback;

var user_brass_account = function user_brass_account(req, res) {
  var user = req.params.user;
  res.json({
    ok: true,
    message: "User brass account",
    data: user && _ds_conn.BRASS_SUBACCOUNTS.readone({
      user: user
    })
  });
};

exports.user_brass_account = user_brass_account;

var paycheck_bank_account = function paycheck_bank_account(req, res) {
  res.json({
    ok: true,
    data: _ds_conn.BANK_ACCOUNTS.readone({
      _id: platform_bank_account,
      user: platform_user
    })
  });
};

exports.paycheck_bank_account = paycheck_bank_account;

var print_transactions = function print_transactions(req, res) {
  var _req$body33 = req.body,
      start_date = _req$body33.start_date,
      end_date = _req$body33.end_date,
      admin = _req$body33.admin,
      user = _req$body33.user;
  var all = start_date === end_date;
  start_date = new Date(start_date);
  end_date = new Date(end_date);
  start_date = new Date("".concat(start_date.getMonth() + 1, "-").concat(start_date.getDate(), "-").concat(start_date.getFullYear())).getTime();
  end_date = new Date("".concat(end_date.getMonth() + 1, "-").concat(end_date.getDate(), "-").concat(end_date.getFullYear())).getTime() + 60 * 60 * 24 * 1000;
  user = _ds_conn.USERS.readone(user);
  if (!user) return res.end();

  var wallet = _ds_conn.WALLETS.readone(user.wallet);

  if (!wallet) return res.end();

  var transactions = _ds_conn.TRANSACTIONS.read(all ? {
    wallet: wallet._id
  } : {
    wallet: wallet._id,
    created: {
      $superquery: function $superquery(line, val, prop) {
        return val < end_date && val >= start_date;
      }
    }
  });

  (0, _entry.send_mail)({
    to: admin,
    subject: "Transaction Report Data",
    sender: "signup@udaralinksapp.online",
    sender_name: "Udara Links",
    sender_pass: "signupudaralinks",
    html: (0, _email.transactions_report)({
      wallet: wallet,
      transactions: transactions
    })
  });
  res.end();
};

exports.print_transactions = print_transactions;

var any_new_notifications = function any_new_notifications(req, res) {
  res.json({
    data: user_notifications,
    ok: true
  });
  user_notifications = new Object();
};

exports.any_new_notifications = any_new_notifications;