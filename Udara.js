import "core-js/stable";
import "regenerator-runtime/runtime";

import express from "express";
import ds_conn from "./conn/ds_conn";
import routes from "./routes";
import bodyParser from "body-parser";
import { create_platform_wallet } from "./route_handlers/starter";
import { load_operating_currencies } from "./route_handlers/entry";
import PagaCollectClient from "paga-collect";
import axios from "axios";

const app = express();
const port = 3600;
const paga_collection_client = new PagaCollectClient()
  .setClientId("udaralinksalll")
  .setPassword("uD8*X4c+Bjmg*MD")
  .setApiKey(
    "966b452619b24f108ac18b70cc1d84dbe9742dd5863d42fdb3473dea299b1b97ee1d3979ee154895af8d32e376c1cb6de50d3d7dd36f44328e626c15ef6ae4b4"
  )
  .setTest(true)
  .build();

console.log(paga_collection_client, "this client");

axios({
  url: "https://mypaga.com/paga-webservices/business-rest/secured/getBanks",
  method: "post",
  headers: {
    principal: "D2444376-15A8-4160-A4D6-F36C4792E12A",
    credentials: "udaralinks4all",
    hash: "966b452619b24f108ac18b70cc1d84dbe9742dd5863d42fdb3473dea299b1b97ee1d3979ee154895af8d32e376c1cb6de50d3d7dd36f44328e626c15ef6ae4b4",
    "Content-Type": "application/json",
  },
  body: {
    referenceNumber: "1234567890",
  },
})
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));

paga_collection_client
  .getBanks({ referenceNumber: "1234567890" })
  .then((resp) => console.log(resp, "sup"))
  .catch((err) => console.log(err));

paga_collection_client
  .registerPersistentPaymentAccount({
    referenceNumber: "53yw19011000009112",
    phoneNumber: 71022222222,
    firstName: "John",
    lastName: "Doe",
    accountName: "John DOe",
    financialIdentificationNumber: 22222222222220,
    accountReference: 2222222222,
    creditBankId: "40090E2F-7446-4217-9345-7BBAB7043C4C",
    creditBankAccountNumber: 1234567890,
    callBackUrl: "http://localhost:5000/core/webhook/paga",
  })
  .then((resp) => console.log(resp, "here"))
  .catch((err) => console.log(err));

app.use(express.static(__dirname + "/Assets"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

export { paga_collection_client };
