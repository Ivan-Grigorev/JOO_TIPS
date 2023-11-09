const LanguagesList = require("../../models/Tech/LanguagesList");
const getTopicsByLanguage = require("./getTechProps/utils/getTopicsByLanguage");

/**
 * Retrieves information about a user's active languages and topics.
 *
 * @param {Object} user - The user object for which to fetch information.
 * @returns {Promise<{
 *  userLanguageObject: object,
 *  activeTopics: { id: string, title: string, activationDate: string }[],
 *  notActiveTopics: { id: string, title: string } }>}
 *  A promise that resolves to an object containing
 * the user's language object and an array of titles of their active topics. If the information cannot be retrieved, the Promise resolves to undefined.
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
      const foundTopic = topicsList.find((topic) => {
        return topicObject.ref.toString() === topic._id.toString();
      });

      return {
        id: foundTopic.id,
        title: foundTopic.topicTitle,
        activationDate: topicObject.activationDate,
      };
    });

    // All topics
    const allUsedTopics = userLanguageObject.topicStatuses.map(
      (topicObject) => {
        const foundTopic = topicsList.find(
          (topic) => topicObject.ref.toString() === topic._id.toString()
        );

        return {
          id: foundTopic.id,
          title: foundTopic.topicTitle,
          status: topicObject.viewStatus,
        };
      }
    );

    // Фильтруем темы, которые не активны и не идентичны активным темам
    const notActiveTopics = allUsedTopics.filter((topic) => {
      return !activeTopics.some(
        (activeTopic) => activeTopic.id.toString() === topic.id.toString()
      );
    });

    return {
      userLanguageObject,
      allTopics: allUsedTopics,
      activeTopics: activeTopics,
      notActiveTopics,
    };
  } catch (e) {
    console.error(e);
  }
}

module.exports = getUserLanguagesInfo;
