const TopicsList = require("../../../../models/Tech/TopicsList");

async function getTopicsByLanguage(language) {
  try {
    const topicsList = await TopicsList.find({ language });
    return topicsList;
  } catch (e) {
    console.error("Error getting topics by language", e);
  }
}

module.exports = getTopicsByLanguage;
