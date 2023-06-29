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

module.exports = setIP;
