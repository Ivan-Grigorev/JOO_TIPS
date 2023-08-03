const express = require("express");

const authRoutes = require("./routes/auth/auth");
const refRoutes = require("./routes/referral");
const cookiesRoutes = require("./routes/cookies");
const lessonsRoutes = require("./routes/lessons/lessons");

const cookieParser = require("cookie-parser");
const setupSecurity = require("./security");
const morganLogs = require("./security/morgan.js");
require("./security/morgan.js");
const app = express();

app.use(express.json());
app.use(cookieParser());
// Примените настройки безопасности
setupSecurity(app);

// Применяем Морган для логгирования
morganLogs(app);

app.use("/users", authRoutes);
app.use("/lessons", lessonsRoutes);
app.use("/referral", refRoutes);
app.use("/cookies", cookiesRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
