const msgpack = require("msgpack-lite");
const casual = require("casual");

const PERSON_PROPERTIES = [
  "name",
  "username",
  "first_name",
  "last_name",
  "full_name",
  "password",
  "name_prefix",
  "name_suffix",
  "company_name",
  "company_suffix",
  "catch_phrase",
  "phone"
];

module.exports = function() {
  const card = casual.card_data;
  const user = PERSON_PROPERTIES.reduce(
    (person, prop) => Object.assign(person, { [prop]: casual[prop] }),
    {}
  );
  const data = {
    card,
    user,
    ts: Date.now()
  };
  return msgpack.encode(data).toJSON();
};
