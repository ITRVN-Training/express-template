const routeUser = require('./user');
const handleException = require('./middlewares/exception');

module.exports = app => {
  routeUser(app);

  app.use(handleException);
};
