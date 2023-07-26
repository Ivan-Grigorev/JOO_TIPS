const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cors = require("cors");

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

  app.use(limiter);

  app.use(
    cors({
      credentials: true, 
      origin: "http://localhost:3001",
    })
  );
}

module.exports = setupSecurity;
