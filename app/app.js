require('./global');

const express = require('express');
const mongoose = require('mongoose');

const config = require('./configs');

const app = express();
app.use(express.json());

mongoose.connect(config.mongodb.connectionString, config.mongodb.mongoDbOptions)
  .then(() => {
    logger.info('hello from mongodb');
  })
  .catch(error => {
    logger.error('connect to mongodb failed', error);
  });

module.exports = app;
