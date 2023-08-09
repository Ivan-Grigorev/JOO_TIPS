const User = require("../models/user/user");

async function isUniqueLanguage(req, res, next) {
  try {
    const user = await User.findById(req.user.id);
    const newLanguage = req.body.language; // Язык из тела запроса

    if (user.languages.includes(newLanguage)) {
      console.log(`Language ${newLanguage} already exists for the user`);
      return res.status(409).json({
        message: `Language ${newLanguage} already exists for the user`,
      });
    }
    next();
  } catch (e) {
    console.error(`Error checking unique language: ${e.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { isUniqueLanguage };
