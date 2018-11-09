const msgpack = require("msgpack-lite");

module.exports = function(msg) {
  const data = Buffer.from(msg);
  return msgpack.decode(data);
};
