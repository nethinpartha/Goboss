const path = require("path");

const { createLogger, transports, format } = require("winston");

const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    // Logging data is shown in json format
    new transports.File({
      filename: path.join(__dirname, "/logs.log"),
      level: "info",
      maxSize: "20m",
      maxFiles: "1d",
    }),
  ],
});

module.exports = logger;
