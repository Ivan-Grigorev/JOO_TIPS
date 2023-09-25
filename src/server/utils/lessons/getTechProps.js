const getTechProps = async (db, language) => {
  try {
    const [techTopics, chances, topics, lessonTechCollection] =
      await Promise.all([
        db.collection("topics_to_choose_amount").findOne({}),
        db.collection("topics_chances").findOne({}),
        db.collection("topics_list").find({ language }).toArray(),
        db.collection("lessons_tech").findOne(),
      ]);

    const { topicsToChoose } = techTopics;

    const {
      missedLessonRadius,
      lessonPoints,
      dayLesson,
      weekLesson,
      monthLesson,
    } = lessonTechCollection;

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
