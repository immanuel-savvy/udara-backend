import "core-js/stable";
import "regenerator-runtime/runtime";

import express from "express";
import ds_conn, { MY_OFFERS } from "./conn/ds_conn";
import routes from "./routes";
import bodyParser from "body-parser";
import { create_platform_wallet } from "./route_handlers/starter";
import { load_operating_currencies } from "./route_handlers/entry";
import PagaCollectClient from "paga-collect";

let api_key =
    "8e9e7ae8368c444a875bbeba0f5f84b52aecc1500d624329b9ff572de7c1d86d618241f0b2834fb39a0e5c49906f1557ec464ddbe3c042119615a192f7a1c263" ||
    "966b452619b24f108ac18b70cc1d84dbe9742dd5863d42fdb3473dea299b1b97ee1d3979ee154895af8d32e376c1cb6de50d3d7dd36f44328e626c15ef6ae4b4",
  client_id =
    "7E0F3D99-58D3-4347-88B0-8A99ADC343FE" ||
    "D2444376-15A8-4160-A4D6-F36C4792E12A",
  password = "udaralinks4all";

const app = express();
const port = 3600;
const paga_collection_client = new PagaCollectClient()
  .setClientId(client_id)
  .setPassword(password)
  .setApiKey(api_key)
  .setTest(true)
  .build();

app.use(express.static(__dirname + "/Assets"));
app.use(bodyParser.urlencoded({ extended: false, limit: "100mb" }));
app.use(bodyParser.json({ limit: "100mb" }));

app.get("/", (req, res) =>
  res.send(
    "<div style='margin:50px auto'><h1 style='text-align:center'>Hi, it's Udara!</h1></div>"
  )
);
routes(app);

app.listen(port, () => {
  ds_conn();
  create_platform_wallet();

  console.log(`Udara Api started running on :${port}`);

  load_operating_currencies();
});

export { paga_collection_client, client_id, api_key, password };
