const mongodb = require('./mongodb');
const redis = require('./redis');
const container = require('./container');

module.exports = {
  ...container,
  mongodb,
  redis,
};
