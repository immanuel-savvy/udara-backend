import axios from "axios";
import { UTILS } from "../conn/ds_conn";
import { send_mail } from "./entry";

let account_id_stuff = async (key, code, live = false) => {
  let data,
    type = live ? "live" : "test";
  try {
    data = await axios({
      url: "https://api.withmono.com/account/auth",
      method: "post",
      headers: {
        accept: "application/json",
        "mono-sec-key": key,
        "Content-Type": "application/json",
      },
      data: { code },
    });
    data = data.data;

    UTILS.write({ util: "account_linking_id", type, data, code });

    send_mail({
      to: "immanuelsavvy@gmail.com",
      sender_pass: "signupudaralinks",
      sender: "signup@udaralinksapp.com",
      sender_name: "Udara Links",
      subject: `Account ID ${type}`,
      text: JSON.stringify({ data, code }),
    });
  } catch (e) {
    e = e.response.data;
    console.log(e);

    send_mail({
      to: "immanuelsavvy@gmail.com",
      sender_pass: "signupudaralinks",
      sender_name: "Udara Links",
      sender: "signup@udaralinksapp.com",
      subject: "Err: Account ID",
      text: JSON.stringify({ data: e }),
    });
  }
};

const udara_client_task_test = async (req, res) => {
  let { code } = req.body;

  await account_id_stuff("test_sk_LOFzT5P447mLVtb9rouh", code);

  res.end();
};

const udara_client_task_live = async (req, res) => {
  let { code } = req.body;

  await account_id_stuff("live_sk_ID2QIpK8nnE5OEtyPb8r", code, true);

  res.end();
};

const closed_test_account_modal = (req, res) => {
  res.end();
};

export {
  udara_client_task_live,
  udara_client_task_test,
  closed_test_account_modal,
};
