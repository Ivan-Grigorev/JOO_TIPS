const User = require("../models/user/user");

require("colors");

// The checkUniqueFields function is an async function, meaning it returns a Promise.
async function checkUniqueFields(req, res, next) {
  try {
    const { id } = req.user;
    const conditions = [];

    if (req.body.email) {
      console.log("Push email to conditions");
      conditions.push({
        email: req.body.email,
        _id: { $ne: id },
      });
    }

    if (req.body.profile && req.body.profile.username) {
      console.log("Push username to conditions");
      conditions.push({
        "profile.username": req.body.profile.username,
        _id: { $ne: id },
      });
    }

    if (req.body.phone) {
      conditions.push({
        phone: {
          $ne: null,
          $eq: req.body.phone,
        },
        _id: { $ne: id },
      });
    }

    if (conditions.length > 0) {
      const userExists = await User.findOne({ $or: conditions });

      if (userExists) {
        return res
          .status(409)
          .json({ message: "User with such field(s) already exists" });
      }
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(`Error while checking unique fields: ${error.message}`.red);
  }
}

module.exports = { checkUniqueFields };
