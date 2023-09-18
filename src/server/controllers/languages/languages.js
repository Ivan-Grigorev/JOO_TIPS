const { createScheduleToEndOfWeek } = require("../../middlewares/languages");
const User = require("../../models/user/user");

// This function retrieves the user's language preferences.
async function get(req, res) {
  try {
    // Retrieve the user's information based on their ID.
    const user = await User.findById(req.user.id);

    // Respond with the user's languages and active language.
    res
      .status(200)
      .json({ languages: user.languages, activeLanguage: user.activeLanguage });
  } catch (e) {
    // Log the error and send a 500 Internal Server Error response.
    console.error(`Error getting user languages: ${e.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
}

// This function adds a new language preference to the user.
async function add(req, res) {
  try {
    // Retrieve the user's information based on their ID.
    const user = await User.findById(req.user.id);

    // Extract the new language from the request body.
    const newLanguage = req.body.language;
    // Check if the new language is provided.
    if (!newLanguage)
      return res.status(400).json({ message: "Language is required." });

    // Add the new language to the user's languages array.
    user.languages.push(newLanguage);
    // Set the language's points in the languagesPoints object.
    user.languagesPoints.set(newLanguage, 0);
    // Save the changes to the user's information.
    await user.save();

    // Respond with the updated user's languages.
    res.status(200).json(user.languages);
  } catch (e) {
    // Log the error and send a 500 Internal Server Error response.
    console.log(`Error while adding language to user object: ${e}`);
    res.status(500).json({ message: e.message });
  }
}

// This function sets the active language for the user.
async function setActive(req, res) {
  try {
    const userID = req.user.id;
    // Retrieve the user's information based on their ID.
    const user = await User.findById(userID);

    // Extract the active language from the request body.
    const activeLanguage = req.body.language;
    // Check if the active language is provided.
    if (!activeLanguage)
      return res.status(400).json({ message: "Language is required." });

    // Set the user's active language.
    user.activeLanguage = activeLanguage;
    // Save the changes to the user's information.
    await user.save();

    createScheduleToEndOfWeek(activeLanguage, userID);
    // Respond with the updated active language.
    res.status(200).json(user.activeLanguage);
  } catch (e) {
    // Log the error and send a 500 Internal Server Error response.
    console.log(`Error while setting active language for user: ${e}`);
    res.status(500).json({ message: e.message });
  }
}

module.exports = { get, add, setActive };
