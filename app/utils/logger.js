const { createLogger, format, transports } = require('winston');

const { combine, printf } = format;

const logger = createLogger({
  exitOnError: false,
  levels: {
    debug: 4,
    info: 3,
    silly: 2,
    warn: 1,
    error: 0,
  },
  format: combine(
    printf(info => {
      const splat = info[Symbol.for('splat')];
      if (splat) {
        return `[${info.level}] ${info.message} - meta: ${JSON.stringify(splat[0])}`;
      }
      return `[${info.level}] ${info.message} `;
    }),
  ),
  transports: [
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
      stderrLevels: ['error', 'warning'],
    }),
  ],
});

module.exports = logger;
