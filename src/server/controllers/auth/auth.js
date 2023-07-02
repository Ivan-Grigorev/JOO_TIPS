const User = require("../../models/user/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const parser = require("ua-parser-js");
const { getUserMac } = require("../../utils/utils.js");

require("colors");

async function signup(req, res, next) {
  try {
    const { name, email, password } = req.body;
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
          name,
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
              os: user.os || "Unknown os",
              device: user.device || "Unknown device",
              browser: user.browser || "Unknown browser",
            },
            registrationDate: new Date(),
          },
        });
      });
    });
  } catch (error) {
    console.error(`Registration error: ${error}`.red);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function login(req, res, next) {
  try {
    const password = req.body.password; //* take a password from the request body
    const userPassword = req.user.password; //* take a password from the user, stored on the past middleware
    const userVerify = req.user.verify; //* take an verify status from the user

    if (userVerify === false)
      return req.status(400).json({ message: "Not verified." });

    bcrypt.compare(password, userPassword, async (err, result) => {
      if (err) return next(err);

      if (result === false) return res.status(401).json({ error: "Email or password is wrong." }); // prettier-ignore

      const token = jwt.sign(
        { id: req.user._id }, // hashed id
        process.env.JWT_SECRET, // secret password
        { expiresIn: "12h" } // life-time of the token
      );

      req.user.token = token;

      await User.findByIdAndUpdate(req.user.id, req.user); // set the token

      res.status(200).json({
        token: req.user.token,
        user: {
          name: req.user.name,
          avatar: req.user.avatar || null,
          email: req.user.email,
          subscription: req.user.subscription || "Free trial",
        },
      });
    });
  } catch (error) {
    console.error(`Error while logging in: ${error}`.red);
    return res.status(401).json({ message: error.message });
  }
}

async function logout(req, res, next) {
  try {
    await User.findByIdAndUpdate(req.user.id, { token: null }); // set the token

    return res.status(204).end();
  } catch (error) {
    console.error(`${error}`.red);
    return res.status(500).json({ message: "Logout error" });
  }
}

module.exports = {
  signup,
  login,
  logout,
};
