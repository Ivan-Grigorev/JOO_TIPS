const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const refRoutes = require("./routes/referral");
const cookiesRoutes = require("./routes/cookies");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    credentials: true, // used for cookie set
    origin: "http://localhost:3001", // the same as well is above
  })
);

app.use(express.json()); // body parser

app.use("/users", authRoutes);

app.use("/referral", refRoutes);

app.use("/cookies", cookieParser(), cookiesRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
