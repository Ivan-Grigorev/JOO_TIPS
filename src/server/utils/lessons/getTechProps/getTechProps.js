const LessonConfig = require("../../../models/Tech/LessonConfig");
const getTopicsByLanguage = require("./utils/getTopicsByLanguage");

const getTechProps = async (db, language) => {
  try {
    const [techTopics, chances, topics, LessonConfiguration] =
      await Promise.all([
        db.collection("topics_to_choose_amount").findOne({}),
        db.collection("topics_chances").findOne({}),
        getTopicsByLanguage(language),
        LessonConfig.findOne(),
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
