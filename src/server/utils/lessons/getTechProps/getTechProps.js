const getLessonConfig = require("./utils/getLessonConfig");
const getTopicsByLanguage = require("./utils/getTopicsByLanguage");
const getTopicsChances = require("./utils/getTopicsChances");
const getTopicsToChooseAmount = require("./utils/getTopicsToChooseAmount");

const getTechProps = async (language) => {
  try {
    const [topicsToChooseAmount, topicsChances, topicsList, lessonConfig] =
      await Promise.all([
        getTopicsToChooseAmount(),
        getTopicsChances(),
        getTopicsByLanguage(language),
        getLessonConfig(),
      ]);

    const { topicsToChoose } = topicsToChooseAmount;

    const {
      missedLessonRadius,
      lessonPoints,
      dayLesson,
      weekLesson,
      monthLesson,
    } = lessonConfig;

    return {
      dayLesson,
      weekLesson,
      monthLesson,
      topics: topicsList, // topics list
      topicsToChoose,
      chances: topicsChances, // formula chances
      lessonPoints,
      missedLessonRadius,
    };
  } catch (e) {
    console.error("Error getting techProps", e);
  }
};

module.exports = getTechProps;
