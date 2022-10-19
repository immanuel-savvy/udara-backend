import { HASHES, USERS, UTILS } from "../conn/ds_conn";
import { load_operating_currencies } from "./entry";
import { conversion_rates } from "./starter";

const username_updated = (req, res) => {
  let { username, user } = req.body;

  let response = USERS.update(user, { username });

  res.json(
    response
      ? { ok: true, message: "username updated!", data: user }
      : { ok: false, message: "username update failed" }
  );
};

const change_password = (req, res) => {
  let { user } = req.params;
  let { old_key, new_key } = req.body;

  let hash = HASHES.readone({ user });
  if (!hash || !old_key || !new_key)
    return res.json({
      ok: false,
      message: "incomplete data",
      data: { reason: "Incomplete data" },
    });

  if (old_key !== hash.hash)
    return res.json({
      ok: false,
      message: "password does not match",
      data: { reason: "Password does not match" },
    });

  let result = HASHES.update({ user }, { hash: new_key });

  result
    ? res.json({ ok: true, message: "successful", data: { success: true } })
    : res.json({
        ok: false,
        message: "something went wrong",
        data: { reason: "Something went wrong" },
      });
};

const get_code_by_country = (req, res) => {
  let { country } = req.params;
  console.log("in here", country);

  let data = UTILS.readone({ util: "country_codes", country });
  console.log(country, data);
  res.json({ ok: true, message: "found", data });
};

const currencies = (req, res) => {
  res.json({ ok: true, message: "ok", data: load_operating_currencies() });
};

const get_conversion_rates = (req, res) => {
  res.json({ ok: true, message: "ok", data: conversion_rates });
};

export {
  username_updated,
  change_password,
  get_code_by_country,
  currencies,
  get_conversion_rates,
};
