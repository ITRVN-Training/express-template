function handleError(error, req, res, mext) {
  logger.info('handle error', { error });
  res.status(500).send({
    isSucces: false,
    // error: error.message,
  });
}

module.exports = app => {
  app.use(handleError);
};
