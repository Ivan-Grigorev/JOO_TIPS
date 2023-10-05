const LanguagesList = require("../../models/Tech/LanguagesList");
const getTopicsByLanguage = require("./getTechProps/utils/getTopicsByLanguage");

async function getUserLanguagesInfo(user) {
  try {
    const [languagesList, topicsList] = await Promise.all([
      LanguagesList.findOne({}),
      getTopicsByLanguage(user.activeLanguage),
    ]);

    const languageRef = languagesList.languages.find((obj) => {
      return obj.language === user.activeLanguage;
    })._id;

    const userLanguageObject = user.languages.find((obj) => {
      return obj.languageRef.toString() === languageRef.toString();
    });

    const activeTopicRefs = userLanguageObject.activeTopicsRefs;

    // Находим темы по их идентификаторам
    const activeTopics = activeTopicRefs.map((topicObject) => {
      // Берём из объекта пользователя реф на тему
      return topicsList.find((topic) => {
        // Ищем по рефу нужный нам объект в списке тем
        return topic._id.toString() === topicObject.ref.toString();
      });
    });

    const activeTopicsTitles = [
      activeTopics[0]?.topicTitle,
      activeTopics[1]?.topicTitle,
      activeTopics[2]?.topicTitle,
      activeTopics[3]?.topicTitle,
    ];

    return { activeTopics, activeTopicsTitles };
  } catch (e) {
    console.error(e);
  }
}

module.exports = getUserLanguagesInfo;
