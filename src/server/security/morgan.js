const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

const morganLogs = (app) => {
  if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
    fs.mkdirSync(path.join(__dirname, "..", "logs"));
  }

  const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "..", "logs", "access.log"), // Здесь мы идем на один уровень выше, а затем в папку 'logs'
    { flags: "a" }
  );
  
  app.use(morgan("combined", { stream: accessLogStream }));
};

module.exports = morganLogs;
