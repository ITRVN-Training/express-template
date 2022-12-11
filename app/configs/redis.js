module.exports = {
  session: {
    url: process.env.REDIS_CONNECTION_URL,
    port: 6379,
    db: parseInt(process.env.SESSION_STORE || 0, 10),
  },
  password: {

  },
};
