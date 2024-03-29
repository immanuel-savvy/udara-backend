const charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const combinations = {
  alnum: charset,
  num: "01234556789",
  alpha: "abcdefghijklmnopqrstuvwxyz",
};

let phone_regex =
  /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;

let email_regex =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const gen_random_int = (max_int, min_int = 0) =>
  min_int + Math.floor(Math.random() * max_int);

const generate_random_string = (len = 6, combination = "num") => {
  let string = "";
  let char_combination = combinations[combination];
  for (let i = 0; i < len; i++)
    string += char_combination[gen_random_int(char_combination.length)];

  return string;
};

const month_index = new Object({
  0: "jan",
  1: "feb",
  2: "mar",
  3: "apr",
  4: "may",
  5: "jun",
  6: "jul",
  7: "aug",
  8: "sep",
  9: "oct",
  10: "nov",
  11: "dec",
});

const to_title = (string) => {
  if (!string) return string;

  let str = "";
  string.split(" ").map((s) => {
    if (s) str += " " + s[0].toUpperCase() + s.slice(1);
  });
  return str.trim();
};

const date_string = (timestamp) => {
  let date = new Date(timestamp);
  return `${date.getDate().toString().padStart(2, "0")} ${to_title(
    month_index[date.getMonth()]
  )} ${date.getFullYear()}`;
};

const commalise_figures_ = (figure) => {
  if (typeof figure !== "number") {
    return figure;
  }

  if (figure >= 1e21) return figure.toLocaleString("fullwide");

  figure = figure.toString();
  if (figure.length <= 3) return figure;

  let ff = "",
    i;
  for (i = 0; i < figure.length; i += 3)
    ff = `${figure.slice(figure.length - i - 3, figure.length - i)},${ff}`;

  if (i < figure.length) ff = `${figure.slice(0, i)}${ff}`;
  else if (i > figure.length) {
    ff = `${figure.slice(0, figure.length % 3)}${ff}`;
  }
  if (ff.startsWith(",")) ff = ff.slice(1);

  return ff.slice(0, -1);
};

const commalise_figures = (value, no_fixed) => {
  if (typeof value !== "number") {
    if (typeof value === "string") {
      if (/[A-Za-z]\-/.test(value)) return value;
      else value = Number(value);

      if (!value) return;
    } else return value;
  }

  let integer = Math.floor(value);
  let decimal = (value - integer).toFixed(2).toString();

  let commalised = commalise_figures_(integer);

  return no_fixed
    ? commalised
    : `${commalised}${decimal.slice(decimal.indexOf("."))}`;
};

const time_string = (timestamp) => {
  let date = new Date(timestamp);

  return `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
};

export {
  generate_random_string,
  date_string,
  gen_random_int,
  commalise_figures,
  email_regex,
  phone_regex,
  time_string,
};
