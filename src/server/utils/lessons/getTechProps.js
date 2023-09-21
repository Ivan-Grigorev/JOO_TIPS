const getTechProps = async (db, language) => {
  try {
    // Оптимизируем запросы через Promise.all()
    const [techTopics, chances, topics, lessonTechCollection] =
      await Promise.all([
        db.collection("topics_to_choose_amount").findOne({}),
        db.collection("topics_chances").findOne({}),
        db.collection("topics_list").find({ language }).toArray(),
        db.collection("lessons_tech").findOne(),
      ]);

    const { topicsToChoose: numToSelect } = techTopics;

    const { lessonDuration, cardsAmount, missedLessonRadius, lessonPoints } =
      lessonTechCollection;

    return {
      topics,
      numToSelect,
      chances,
      lessonDuration,
      cardsAmount,
      lessonPoints,
      missedLessonRadius,
    };
  } catch (e) {
    console.error(e);
  }
};

module.exports = getTechProps;
