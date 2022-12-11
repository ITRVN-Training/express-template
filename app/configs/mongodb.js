module.exports = {
  connectionString: process.env.CONNECTION_STRING,
  mongoDbOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
};
