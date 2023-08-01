const User = require("../models/user/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const parser = require("ua-parser-js");
require("colors");

async function auth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({ message: "Not authorized" });

    const [bearer, token] = authHeader.split(" ", 2);
    const noBearer = bearer !== "Bearer";

    if (noBearer) return res.status(401).json({ message: "Not authorized" });

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) return res.status(401).json({ message: "Invalid token" });

      const currentUser = await User.findById(decoded.id);

      if (currentUser && currentUser.token === token) {
        req.user = decoded;
        return next();
      }

      return res.status(401).json({ message: "Not authorized" });
    });
  } catch (error) {
    console.error(`Auth error: ${error}`.red);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function updateLastIP(req, res, next) {
  try {
    const lastUserIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress; // prettier-ignore
    const cloudFlareProxiUserIP = req.headers["cf-connecting-ip"] || req.connection.remoteAddress; // prettier-ignore
    req.user.IP.lastUserIP = lastUserIP || cloudFlareProxiUserIP; //? update lastUserIP property for saving when user log in. (next action)

    console.log(`req.user.IP.lastUserIP = = = > ${req.user.IP.lastUserIP}`);
    next();
  } catch (error) {
    console.error(`Error while middleware updateLastIP: ${error}`.red);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function isEmailInUse(req, res, next) {
  try {
    const { name, email, password, confirmedPassword } = req.body;
    const user = await User.findOne({ email });
    const body = { name, email, password };
    req.user = Object.assign({}, body);

    if (user !== null) return res.status(409).json({ message: "Email in use" });

    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function isUserExist(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email });

    // status 401 is needed because we don't want to hacker known is user exists
    if (user === null) return res.status(401).json({ message: "Email or password is wrong." }); // prettier-ignore

    req.user = user; //* store user in the request body

    next();
  } catch (error) {
    console.error(`${error}`.red);
    return res.status(500).json({ message: "Internal server error" });
  }
}

//  middleware for reset password
async function IsUserExistByEmail(req, res, next) {
  try {
    const email = req.body.email;

    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    req.user = user;

    next();
  } catch (error) {
    console.error(
      `Error while trying to IsUserExxistByEmail: ${error.message}`
    );
  }
}

// middleware for signup
async function isPasswordsMatch(req, res, next) {
  try {
    const { password } = req.body;
    const { confirmedPassword } = req.body;

    const match = password === confirmedPassword;

    if (!match) return res.status(400).json({ message: "Passwords must match" }) // prettier-ignore

    next();
  } catch (error) {
    console.error(`Error while checking passwords: ${error.message}`);

    return res
      .status(500)
      .json({ message: `Middleware password matching error: ${error}` });
  }
}

// middleware for check is current password match with DB password
async function isCurrentPasswordRight(req, res, next) {
  try {
    const { currentPassword } = req.body;

    const { id } = req.user;
    const user = await User.findById(id); // TODO may not work

    bcrypt.compare(currentPassword, user.password, async (err, result) => {
      if (err) return next(err);

      if (result === false) return res.status(401).json({ message: "Password is wrong." }); // prettier-ignore

      next();
    });
  } catch (error) {
    console.log(`Error in isCurrentPasswordRight - ${error.message}`.red);
    res.status(500).json({ message: "Internal server error" });
  }
}

// middleware for delete user
async function confirmPassword(req, res, next) {
  try {
    const password = req.body.password;
    const email = req.body.email;

    const user = await User.findOne({ email });

    bcrypt.compare(password, user.password, async (err, result) => {
      if (err) return res.status(500).json({ message: "Error compairing passwords" }); // prettier-ignore

      if (result === false) return res.status(401).json({ message: "Password is wrong." }); // prettier-ignore

      next();
    });
  } catch (error) {
    console.error(`Error compairing passwords: ${error.message}`.yellow);
    res.status(500).json({ message: "Internal server error." });
  }
}

async function setUserDevice(req, res, next) {
  try {
    const ua = parser(req.headers["user-agent"] || "");
    const deviceInfo = {
      browser: ua.browser.name || "Unknown",
      os: ua.os.name || "Unknown",
      device: ua.device.model || "Unknown",
    };

    req.user.deviceInfo = deviceInfo;

    next();
  } catch (error) {
    res.status(500).json({ message: `Error updating user device: ${error}` });
  }
}

module.exports = {
  auth,
  isEmailInUse,
  isUserExist,
  updateLastIP,
  isPasswordsMatch,
  setUserDevice,
  confirmPassword,
  IsUserExistByEmail,
  isCurrentPasswordRight,
};
