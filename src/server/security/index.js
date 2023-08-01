const rateLimit = require("express-rate-limit");
const session = require("express-session");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const contentFilter = require("content-filter");

const setupSecurity = (app) => {
  const useStrictHTTPS = (req, res, next) => {
    if (req.secure) {
      console.log("https in use");
      next();
    } else {
      console.log("https not in use");
      res.redirect("https://" + req.headers.host + req.url);
    }
  }; // ! cloudeFlare SSL sertificate has his own HTTPS relocate
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 минут
    max: 100, // лимит каждого IP до 100 запросов за окно
  });
  const sessionOptions = {
    secret: process.env.SECRET_SESSION_KEY,
    cookie: { httpOnly: true },
    resave: false,
    saveUninitialized: true,
  };
  const setSecurityHeaders = (_, res, next) => {
    res.setHeader(
      "Content-Security-Policy",
      "script-src 'self'; object-src 'self'"
    );
    return next();
  };
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

  // todo добавить комментарии
  // app.use(useStrictHTTPS); // ! cloudeFlare SSL sertificate has his own HTTPS relocate

  app.use(setSecurityHeaders);
  app.use(helmet());
  app.use(mongoSanitize());
  app.use(hpp());
  app.use(contentFilter());
  app.use(session(sessionOptions));
  app.use(limiter);
  app.use(compression());
  app.use(cors(corsOptions));
};

module.exports = setupSecurity;
