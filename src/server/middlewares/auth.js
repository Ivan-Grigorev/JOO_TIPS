const User = require("../models/user");
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

async function setIP(req, res, next) {
  try {
    const { userID } = req.params;
    const userIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress; // saving an user IP address

    await User.findByIdAndUpdate(userID, { userIP });
    next();
  } catch (error) {
    console.error(`Error while middleware getIP: ${error}`.red);
    next();
    // return res.status(500).json({ message: "Internal server error" });
  }
}

async function isUserExist(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
      return res.status(401).json({ error: "Email or password is wrong." });
    }

    req.user = user; //* store user in the request body
  } catch (error) {
    console.error(`${error}`.red);
    return res.status(500).json({ error: "Internal server error" });
  }
  next();
}

module.exports = { auth, setIP, isUserExist };
