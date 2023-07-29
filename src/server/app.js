const express = require("express");
const authRoutes = require("./routes/auth/auth");
const refRoutes = require("./routes/referral");
const cookiesRoutes = require("./routes/cookies");
const cookieParser = require("cookie-parser");
const setupSecurity = require("./security");
const morganLogs = require("./security/morgan.js");
require("./security/morgan.js");
const CSRF = require("csrf");
const app = express();

// Примените настройки безопасности
setupSecurity(app);

// Применяем Морган для логгирования
morganLogs(app);

app.use(express.json());
app.use(cookieParser());

const csrfProtection = new CSRF();

app.use((req, res, next) => {
  if (["POST", "PUT", "DELETE"].includes(req.method)) {
    // Для определенных методов проверяем CSRF токен
    const token =
      req.body._csrf || req.query._csrf || req.headers["x-csrf-token"];
    if (!csrfProtection.verify(req.cookies._csrf, token)) {
      return res.status(403).send("CSRF token mismatch");
    }
  }
  next();
});

app.use("/users", authRoutes);
app.use("/referral", refRoutes);
app.use("/cookies", cookiesRoutes);

app.get("/csrf-token", (req, res) => {
  const token = csrfProtection.create(req.cookies._csrf);
  res.cookie("_csrf", token);
  res.json({ token });
});

// app.use((err, req, res, next) => {
//   if (err.code !== "EBADCSRFTOKEN") return next(err);

//   // Если код ошибки - это "EBADCSRFTOKEN", значит CSRF токен неверный или пропущен.
//   console.log("CSRF token mismatch");
//   console.log(err);
//   res.status(403).send("CSRF token mismatch");
// });

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
