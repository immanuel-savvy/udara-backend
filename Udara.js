import "core-js/stable";
import "regenerator-runtime/runtime";

import express from "express";
import ds_conn, { LOGS, WALLETS } from "./conn/ds_conn";
import routes from "./routes";
import cors from "cors";
import axios from "axios";
import bodyParser from "body-parser";
import { create_platform_wallet } from "./route_handlers/starter";
import {
  fetch_wallet_brass_account,
  load_operating_currencies,
} from "./route_handlers/entry";
import {
  brass_personal_access_token,
  platform_wallet,
} from "./route_handlers/wallet";

let Payables = new Array();

const app = express();
const port = 3601;

app.use(cors());
app.use(express.static(__dirname + "/Assets"));
app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));
app.use(bodyParser.json({ limit: "100mb" }));

app.get("/", (req, res) =>
  res.send(
    "<div style='margin:50px auto'><h1 style='text-align:center'>Hi, it's Udara!</h1></div>"
  )
);
routes(app);

setInterval(async () => {
  for (let i = 0; i < Payables.length; i++) {
    let { data, r } = Payables[i];
    let bal = await fetch_wallet_brass_account(
      WALLETS.readone(platform_wallet)
    );
    if (!bal) continue;

    if (Number(bal.data.ledger_balance.raw) >= Number(data.amount)) {
      axios({
        url: "https://api.getbrass.co/banking/payments",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${brass_personal_access_token}`,
        },
        data,
      })
        .then((reslt) => {
          LOGS.update(r._id, { data: reslt.data });
        })
        .catch((e) => {
          LOGS.update(r._id, { e: JSON.stringify(e), err: true });
        });

      Payables[i] = null;
    }
  }
  Payables = Payables.filter((p) => p);
}, 60000);

app.listen(port, () => {
  ds_conn();
  create_platform_wallet();

  console.log(`Udara Api started running on :${port}`);

  load_operating_currencies();
});

export { Payables };
