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
    // Middleware to enforce HTTPS
    // This middleware checks if the request is secure (HTTPS).
    // If not, it redirects the request to HTTPS.
    if (req.secure) {
      console.log("https in use");
      next();
    } else {
      console.log("https not in use");
      res.redirect("https://" + req.headers.host + req.url);
    }
  };

  // Rate limiting middleware configuration
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
  });

  // Session options for express-session middleware
  const sessionOptions = {
    secret: process.env.SECRET_SESSION_KEY,
    cookie: { httpOnly: true },
    resave: false,
    saveUninitialized: true,
  };

  // Middleware to set security headers (Content-Security-Policy)
  const setSecurityHeaders = (_, res, next) => {
    res.setHeader(
      "Content-Security-Policy",
      "script-src 'self'; object-src 'self'"
    );
    return next();
  };

  // CORS whitelist and options
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

  // Setup security middleware
  // The middleware functions are applied to the app in the specified order
  // todo добавить комментарии (Note: This is a placeholder comment)

  // Uncomment this line if you want to enforce HTTPS using the middleware
  // app.use(useStrictHTTPS);

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
