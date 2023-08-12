const User = require("../models/user/user");
require("colors");

// Middleware for checking if certain fields are unique among users
async function checkUniqueFields(req, res, next) {
  try {
    const { id } = req.user;
    const conditions = [];

    // Check if the request body contains an email field
    if (req.body.email) {
      console.log("Push email to conditions");
      conditions.push({
        email: req.body.email,
        _id: { $ne: id },
      });
    }

    // Check if the request body contains a username field
    if (req.body.profile && req.body.profile.username) {
      console.log("Push username to conditions");
      conditions.push({
        "profile.username": req.body.profile.username,
        _id: { $ne: id },
      });
    }

    // Check if the request body contains a phone field
    if (req.body.phone) {
      conditions.push({
        phone: {
          $ne: null,
          $eq: req.body.phone,
        },
        _id: { $ne: id },
      });
    }

    // If there are conditions to check, query the database
    if (conditions.length > 0) {
      const userExists = await User.findOne({ $or: conditions });

      if (userExists) {
        // If a user with the specified field(s) already exists, return a conflict response
        return res
          .status(409)
          .json({ message: "User with such field(s) already exists" });
      }
    }

    // If all checks pass, proceed to the next middleware
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(`Error while checking unique fields: ${error.message}`.red);
  }
}

module.exports = { checkUniqueFields };
