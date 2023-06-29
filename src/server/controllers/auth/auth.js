const User = require("../../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const parser = require("ua-parser-js");
const { getUserMac } = require("../../utils/utils.js");

require("colors");

async function register(req, res, next) {
  try {
    const { email, password } = req.body;
    const userIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress; // saving an user IP address
    const ua = parser(req.headers["user-agent"] || "");
    // const macAddress = await getUserMac()

    const deviceInfo = {
      browser: ua.browser.name || "Unknown",
      os: ua.os.name || "Unknown",
      device: ua.device.model || "Unknown",
    };

    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);

      bcrypt.hash(password, salt, (err, hash) => {
        if (err) return next(err);

        const user = {
          email,
          password: hash,
          IP: {
            firstUserIP: userIP,
            lastUserIP: userIP,
          },
          deviceInfo: {
            os: deviceInfo.os,
            device: deviceInfo.device,
            browser: deviceInfo.browser,
          },
          // macAddress: macAddress,
          registrationDate: new Date(),
        };

        User.create(user);

        return res.status(201).json({
          user: {
            email: user.email,
            subscription: user.subscription || "Free trial",
            IP: {
              firstUserIP: userIP,
              lastUserIP: userIP,
            },
            deviceInfo: {
              os: user.os,
              device: user.device,
              browser: user.browser,
            },
            registrationDate: new Date(),
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
