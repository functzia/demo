module.exports = async function(stringifiedData) {
  const data = JSON.parse(stringifiedData);
  this.log.info(`Current sample from: ${data.ts}`);
  if (!(await this.state.get())) {
    await this.state.set({});
  }
  const state = await this.state.get();
  if (!state[data.card.type]) {
    state[data.card.type] = [];
  }
  state[data.card.type].push(data.user);
  await this.state.set(state);
  Object.keys(state).forEach(ctype => {
    this.log.info(`${ctype}: ${state[ctype].length}`);
  });
};
