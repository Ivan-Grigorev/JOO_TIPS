const LanguagesList = require("../../models/Tech/LanguagesList");
const TopicsList = require("../../models/Tech/TopicsList");
const User = require("../../models/user/user");
const moment = require("moment");

// This function retrieves the user's language preferences.
async function get(req, res) {
  try {
    // Retrieve the user's information based on their ID.
    const user = await User.findById(req.user.id);

    // Respond with the user's languages and active language.

    const languages = user.languages.map((language) => language);
    res.status(200).json({ languages, activeLanguage: user.activeLanguage });
  } catch (e) {
    // Log the error and send a 500 Internal Server Error response.
    console.error(`Error getting user languages: ${e.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Add a new language to the user's profile.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the updated list of user languages and the added language object.
 */
async function add(req, res) {
  try {
    // Extract user ID and new language from the request.
    const userID = req.user.id;
    const newLanguage = req.body.language;

    // Retrieve the user's information based on their ID, the available languages list, and topics list.
    const [user, languagesList, topicsList] = await Promise.all([
      User.findById(userID),
      LanguagesList.findOne(),
      TopicsList.findOne({ language: newLanguage }),
    ]);

    // Check if the new language is provided.
    if (!newLanguage) {
      return res.status(400).json({ message: "Language is required." });
    }

    // Find the language reference ID and name in the languages list.
    const { _id: languageId, language: languageName } =
      languagesList.languages.find((obj) => obj.language === newLanguage);

    // Check if the active language object already exists in the user's profile.
    const activeLanguageObject = user.languages.find((obj) => {
      return obj.languageRef.toString() === languageId.toString();
    });

    if (!activeLanguageObject) {
      // If not, create a new language object and add it to the user's profile.
      const createdLanguageObject = {
        languageRef: languageId,
        activeTopicsRefs: [
          {
            ref: topicsList.topics[0]._id.toString(),
            activationDate: moment().format("DD.MM.YYYY"),
          },
        ],
        topicStatuses: [{ topicRef: topicsList.topics[0]._id, viewStatus: 1 }],
      };
      user.languages.push(createdLanguageObject);
      user.languagesPoints.set(newLanguage, 0);
    }

    user.save(); // without await to increase performance

    // Retrieve the list of user languages.
    const userLanguages = user.languages.map((language) => ({
      _id: language.languageRef,
      languageName: languagesList.languages.find(
        (obj) => obj._id.toString() === language.languageRef.toString()
      ).language,
    }));

    // Return the added language object and the updated list of user languages.
    res.status(201).json({
      addedLanguage: { _id: languageId, languageName },
      userLanguages,
    });
  } catch (e) {
    console.log(`Error while adding language to user object: ${e}`);
    res.status(500).json({ message: "Error adding new language." });
  }
}

// This function sets the active language for the user.
async function setActive(req, res) {
  try {
    const activeLanguage = req.body.language;
    const user = await User.findById(req.user.id);

    // Check if the active language is provided.
    if (!activeLanguage) {
      return res.status(400).json({ message: "Language is required." });
    }
    // Set the user's active language.
    user.activeLanguage = activeLanguage;

    await user.save();

    res.status(201).json({ activeLanguage });
  } catch (e) {
    console.log(`Error while setting active language for user: ${e}`);
    res.status(500).json({ message: e.message });
  }
}

module.exports = { get, add, setActive };
