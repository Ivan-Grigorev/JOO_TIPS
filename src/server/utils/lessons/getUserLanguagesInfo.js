const LanguagesList = require("../../models/Tech/LanguagesList");
const getTopicsByLanguage = require("./getTechProps/utils/getTopicsByLanguage");

/**
 * Retrieves information about a user's active languages and topics.
 *
 * @param {Object} user - The user object for which to fetch information.
 * @returns {Promise<Object>} - A promise that resolves to an object containing
 * the user's language object and an array of titles of their active topics.
 */
async function getUserLanguagesInfo(user) {
  try {
    // Fetch the user's languages list and topics list concurrently
    const [languagesList, topicsList] = await Promise.all([
      LanguagesList.findOne({}),
      getTopicsByLanguage(user.activeLanguage),
    ]);

    // Find the language reference based on the user's active language
    const languageRef = languagesList.languages.find((obj) => {
      return obj.language === user.activeLanguage;
    })._id;

    // Find the user's language object based on the language reference
    const userLanguageObject = user.languages.find((obj) => {
      return obj.languageRef.toString() === languageRef.toString();
    });

    // Get the references to the user's active topics
    const activeTopicRefs = userLanguageObject.activeTopicsRefs;

    // Retrieve the details of active topics by their references
    const activeTopics = activeTopicRefs.map((topicObject) => {
      return topicsList.find((topic) => {
        return topic._id.toString() === topicObject.ref.toString();
      });
    });

    // Extract the titles of the active topics, handling potential null values
    const activeTopicsTitles = [
      activeTopics[0]?.topicTitle,
      activeTopics[1]?.topicTitle,
      activeTopics[2]?.topicTitle,
      activeTopics[3]?.topicTitle,
    ];

    // Return the user's language object and active topics' titles
    return { userLanguageObject, activeTopicsTitles };
  } catch (e) {
    console.error(e);
  }
}

module.exports = getUserLanguagesInfo;
