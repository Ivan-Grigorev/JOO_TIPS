const User = require("../models/user/user");
const jwt = require("jsonwebtoken");
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

      const currentUser = await User.find({ email: decoded.email });

      if (currentUser && currentUser[0].token === token) {
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
    const lastUserIP =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress; // saving an user IP address
    req.user.IP.lastUserIP = lastUserIP; //? update lastUserIP property for saving when user log in. (next action)

    next();
  } catch (error) {
    console.error(`Error while middleware updateLastIP: ${error}`.red);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function isEmailInUse(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user !== null) return res.status(409).json({ message: "Email in use" });

    req.user = { ...req.body };

    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function isUserExist(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) return res.status(401).json({ message: "Email or password is wrong." }); // prettier-ignore

    req.user = user; //* store user in the request body

    next();
  } catch (error) {
    console.error(`${error}`.red);
    return res.status(500).json({ message: "Internal server error" });
  }
}

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

module.exports = {
  auth,
  isEmailInUse,
  isUserExist,
  updateLastIP,
  isPasswordsMatch,
};
