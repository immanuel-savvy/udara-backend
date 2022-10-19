"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paga_collection_client = void 0;

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _ds_conn = _interopRequireDefault(require("./conn/ds_conn"));

var _routes = _interopRequireDefault(require("./routes"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _starter = require("./route_handlers/starter");

var _entry = require("./route_handlers/entry");

var _io_stuff = _interopRequireDefault(require("./io_stuff"));

var _pagaCollect = _interopRequireDefault(require("paga-collect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 3600;
var paga_collection_client = new _pagaCollect["default"]().setClientId().setPassword().setApiKey().setTest(true).build();
exports.paga_collection_client = paga_collection_client;

var server = _http["default"].createServer(app);

app.use(_express["default"]["static"](__dirname + "/Assets"));
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.get("/", function (req, res) {
  return res.send("<div style='margin:50px auto'><h1 style='text-align:center'>Hi, it's Udara!</h1></div>");
});
(0, _routes["default"])(app);
(0, _io_stuff["default"])(server);
server.listen(3601);
app.listen(port, function () {
  (0, _ds_conn["default"])();
  (0, _starter.create_platform_wallet)();
  console.log("Udara Api started running on :".concat(port));
  (0, _entry.load_operating_currencies)();
});