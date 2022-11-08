"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.password = exports.paga_collection_client = exports.client_id = exports.api_key = void 0;

require("core-js/stable");

require("regenerator-runtime/runtime");

var _express = _interopRequireDefault(require("express"));

var _ds_conn = _interopRequireDefault(require("./conn/ds_conn"));

var _routes = _interopRequireDefault(require("./routes"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _starter = require("./route_handlers/starter");

var _entry = require("./route_handlers/entry");

var _pagaCollect = _interopRequireDefault(require("paga-collect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api_key = "966b452619b24f108ac18b70cc1d84dbe9742dd5863d42fdb3473dea299b1b97ee1d3979ee154895af8d32e376c1cb6de50d3d7dd36f44328e626c15ef6ae4b4",
    client_id = "D2444376-15A8-4160-A4D6-F36C4792E12A",
    password = "udaralinks4all";
exports.password = password;
exports.client_id = client_id;
exports.api_key = api_key;
var app = (0, _express["default"])();
var port = 3600;
var paga_collection_client = new _pagaCollect["default"]().setClientId(client_id).setPassword(password).setApiKey(api_key).build();
exports.paga_collection_client = paga_collection_client;
app.use(_express["default"]["static"](__dirname + "/Assets"));
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.get("/", function (req, res) {
  return res.send("<div style='margin:50px auto'><h1 style='text-align:center'>Hi, it's Udara!</h1></div>");
});
(0, _routes["default"])(app);
app.listen(port, function () {
  (0, _ds_conn["default"])();
  (0, _starter.create_platform_wallet)();
  console.log("Udara Api started running on :".concat(port));
  (0, _entry.load_operating_currencies)();
});