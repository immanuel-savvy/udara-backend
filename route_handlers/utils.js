import { UTILS } from "../conn/ds_conn";

const country_codes = (req, res) => {
  let c_codes = UTILS.read({ util: "country_codes" });

  res.json({ ok: true, data: c_codes });
};

const purposes = (req, res) => {
  let purposes = UTILS.read({ util: "purposes" });

  res.json({ ok: true, data: purposes });
};

export { country_codes, purposes };
