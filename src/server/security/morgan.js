const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

const morganLogs = (app) => {
  // Check if the "logs" directory exists; if not, create it
  if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
    fs.mkdirSync(path.join(__dirname, "..", "logs"));
  }

  // Create a writable stream for logging
  const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "..", "logs", "access.log"), // Path to the log file
    { flags: "a" } // 'a' flag means appending to the file
  );

  // Use morgan middleware to log requests
  app.use(morgan("combined", { stream: accessLogStream }));
};

module.exports = morganLogs;
