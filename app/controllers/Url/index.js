const queries = require('./urlQuery');
const commands = require('./urlCommand');

module.exports = {
  ...queries,
  ...commands,
};
