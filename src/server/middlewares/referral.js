const User = require("../models/user/user");
require("colors");

async function isUserExist(req, res, next) {
  try {
    const username = req.body.ref;

    const user = await User.findOne({ "profile.username": username });

    if (!user) return res.status(404).json({ message: "User not found" });

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { isUserExist };
