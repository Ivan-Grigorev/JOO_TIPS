const express = require("express");
const authRoutes = require("./routes/auth");
const refRoutes = require("./routes/referral");
const cookiesRoutes = require("./routes/cookies");
const cookieParser = require("cookie-parser");
const setupSecurity = require("./security");
const morganLogs = require("./security/morgan.js");
require("./security/morgan.js");
const app = express();

// Примените настройки безопасности
setupSecurity(app);

// Применяем Морган для логгирования
morganLogs(app);

app.use(express.json());

app.use("/users", authRoutes);
app.use("/referral", refRoutes);
app.use("/cookies", cookieParser(), cookiesRoutes);

app.get("/csrf-token", (req, res) => res.json({ csrfToken: req.csrfToken() }));

app.use((err, req, res, next) => {
  if (err.code !== "EBADCSRFTOKEN") return next(err);

  // Если код ошибки - это "EBADCSRFTOKEN", значит CSRF токен неверный или пропущен.
  res.status(403).send("CSRF token mismatch");
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
