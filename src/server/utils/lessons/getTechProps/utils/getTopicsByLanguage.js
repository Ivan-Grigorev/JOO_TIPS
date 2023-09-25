const TopicsList = require("../../../../models/Tech/TopicsList");

/**
 * @function getTopicsByLanguage
 * @description Retrieves a list of topics based on the specified language.
 *
 * @param {string} language - The language for which to retrieve topics.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of topic objects.
 *
 * @throws {Error} Throws an error if there is an issue fetching topics by language.
 */
async function getTopicsByLanguage(language) {
  try {
    const topicsList = await TopicsList.find({ language });
    return topicsList;
  } catch (e) {
    console.error("Error getting topics by language", e);
  }
}

module.exports = getTopicsByLanguage;
