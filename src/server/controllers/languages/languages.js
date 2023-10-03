const LanguagesList = require("../../models/Tech/LanguagesList");
const TopicsList = require("../../models/Tech/TopicsList");
const User = require("../../models/user/user");

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
    user.languages.push({ language: newLanguage, activeTopic: null });
    // Set the language's points in the languagesPoints object.
    user.languagesPoints.set(newLanguage, 0);
    // Save the changes to the user's information.
    await user.save();

    const languages = user.languages.map((language) => language);

    // Respond with the updated user's languages.
    res.status(200).json(languages);
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
    const activeLanguage = req.body.language;

    // Retrieve the user's information based on their ID.
    const [user, languagesList, topicsList] = await Promise.all([
      User.findById(userID),
      LanguagesList.findOne(),
      TopicsList.findOne({ language: activeLanguage }),
    ]);

    // Check if the active language is provided.
    if (!activeLanguage) {
      return res.status(400).json({ message: "Language is required." });
    }
    // Set the user's active language.
    user.activeLanguage = activeLanguage;

    const languageRef = languagesList.languages.find((obj) => {
      return obj.language === activeLanguage;
    })._id;

    const activeLanguageObject = user.languages.find((obj) => {
      return obj.languageRef.toString() === languageRef.toString();
    });
    if (!activeLanguageObject) {
      // console.log("Adding language object to user.languages".yellow);
      const createdLanguageObject = {
        languageRef: languageRef,
        activeTopicRef: [topicsList.topics[0]._id.toString()],
        topicStatuses: [{ topicRef: topicsList.topics[0]._id, viewStatus: 1 }],
      };
      user.languages.push(createdLanguageObject);
    }

    await user.save();

    res.status(201).json(activeLanguage);
  } catch (e) {
    console.log(`Error while setting active language for user: ${e}`);
    res.status(500).json({ message: e.message });
  }
}

module.exports = { get, add, setActive };
