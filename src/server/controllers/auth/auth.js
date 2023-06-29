const User = require("../../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("colors");

async function register(req, res, next) {
  try {
    const { email, password } = req.body;
    const userIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress; // saving an user IP address
    const browser = req.headers["user-agent"];

    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);

      bcrypt.hash(password, salt, (err, hash) => {
        if (err) return next(err);

        const user = { email, password: hash, firstUserIP: userIP, browser };

        User.create(user);

        return res.status(201).json({
          user: {
            email: user.email,
            subscription: user.subscription || "Free trial",
            userIP,
          },
        });
      });
    });
  } catch (error) {
    console.error(`Registration error: ${error}`.red);
    return res.status(500).json({ message: "Something went wrong..." });
  }
}

module.exports = {
  register,
};
