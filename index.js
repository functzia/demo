module.exports = function({ content }) {
  const data = JSON.parse(content);
  this.log.info(`Current sample from: ${data.ts}`);
  const { user } = data;
  user.card = data.card;
  return user;
};
