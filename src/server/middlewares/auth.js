const User = require("../models/user");
require("colors");

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

module.exports = { setIP, isUserExist };
