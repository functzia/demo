module.exports = async function({ content }) {
  const data = JSON.parse(content);
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
