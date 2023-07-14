const User = require("../models/user/user");

require("colors");

// The checkUniqueFields function is an async function, meaning it returns a Promise.
async function checkUniqueFields(req, res, next) {
  try {
    // We destructure the phone, email and avatarName properties from the request body.
    const { id } = req.user;
    // 64af3d3bd86f396f54076f62
    const { phone, email } = req.body;
    const avatarName = req.body.profile.avatarName;

    // Check if a user with the same email exists
    const emailExists = await User.findOne({ email, _id: { $ne: id } });
    if (emailExists) {
      return res
        .status(409)
        .json({ message: "User with such email already exists" });
    }

    // Check if a user with the same avatarName exists
    const avatarNameExists = await User.findOne({"profile.avatarName": avatarName, _id: { $ne: id } }); // prettier-ignore

    if (avatarNameExists) {
      return res
        .status(409)
        .json({ message: "User with such avatarName already exists" });
    }

    // Check if a user with the same phone number exists
    const phoneExists = await User.findOne({ phone, _id: { $ne: id } });
    if (phoneExists) {
      return res
        .status(409)
        .json({ message: "User with such phone number already exists" });
    }

    // If no user with matching data was found, we call the next middleware function.
    next();
  } catch (error) {
    // If an error occurs in the try block, we catch it here.
    // We send a response with status 500 (Internal Server Error) and a message.
    res.status(500).json({ message: "Internal Server Error" });
    // We also log the error message to the console.
    console.error(`Error while checking unique fields: ${error.message}`.red);
  }
}

module.exports = { checkUniqueFields };
