const getLessonConfig = require("./utils/getLessonConfig");
const getTopicsByLanguage = require("./utils/getTopicsByLanguage");
const getTopicsChances = require("./utils/getTopicsChances");
const getTopicsToChooseAmount = require("./utils/getTopicsToChooseAmount");

const getTechProps = async (language) => {
  try {
    const [techTopics, chances, topics, LessonConfiguration] =
      await Promise.all([
        getTopicsToChooseAmount(),
        getTopicsChances(),
        getTopicsByLanguage(language),
        getLessonConfig(),
      ]);

    const { topicsToChoose } = techTopics;

    const {
      missedLessonRadius,
      lessonPoints,
      dayLesson,
      weekLesson,
      monthLesson,
    } = LessonConfiguration;

    return {
      dayLesson,
      weekLesson,
      monthLesson,
      topics, // topics list
      topicsToChoose,
      chances, // formula chances
      lessonPoints,
      missedLessonRadius,
    };
  } catch (e) {
    console.error("Error getting techProps", e);
  }
};

module.exports = getTechProps;
