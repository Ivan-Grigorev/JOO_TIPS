const rateLimit = require("express-rate-limit");
const session = require("express-session");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");

const setupSecurity = (app) => {
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 минут
    max: 100, // лимит каждого IP до 100 запросов за окно
  });

  app.use(helmet());

  app.use((_, res, next) => {
    res.setHeader(
      "Content-Security-Policy",
      "script-src 'self'; object-src 'self'"
    );
    return next();
  });

  app.use(
    session({
      secret: process.env.SECRET_SESSION_KEY,
      cookie: { httpOnly: true },
      resave: false,
      saveUninitialized: true,
    })
  );

  app.use(limiter);

  app.use(compression());

  const whitelist = ["http://localhost:3001"];
  const corsOptions = {
    credentials: true,
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  };

  app.use(cors(corsOptions));
};

module.exports = setupSecurity;
