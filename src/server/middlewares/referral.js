const User = require("../models/user/user");
require("colors");

// Middleware for checking if a user with a specific username exists
async function isUserExist(req, res, next) {
  try {
    const username = req.body.ref;

    // Find a user with the specified username in the database
    const user = await User.findOne({ "profile.username": username });

    if (!user) {
      // If user does not exist, return a not found response
      return res.status(404).json({ message: "User not found" });
    }

    // If user exists, store the user information in the request and proceed to the next middleware
    req.user = user;
    next();
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { isUserExist };
