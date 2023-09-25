async function getTopicsByLanguage(language) {
  try {
    const TopicsList = null;
    return await TopicsList.find({ language }).toArray();
  } catch (e) {
    console.error("Error getting topics by language", e);
  }
}

module.exports = getTopicsByLanguage;
