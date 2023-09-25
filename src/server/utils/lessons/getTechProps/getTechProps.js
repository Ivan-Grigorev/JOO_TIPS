const getLessonConfig = require("./utils/getLessonConfig");
const getTopicsByLanguage = require("./utils/getTopicsByLanguage");
const getTopicsChances = require("./utils/getTopicsChances");
const getTopicsToChooseAmount = require("./utils/getTopicsToChooseAmount");

/**
 * @function getTechProps
 * @description Retrieves technical properties and configuration related to lessons and topics.
 *
 * @param {string} language - The language for which to retrieve technical properties.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing the following properties:
 *   - dayLesson (object): Configuration for daily lessons.
 *   - weekLesson (object): Configuration for weekly lessons.
 *   - monthLesson (object): Configuration for monthly lessons.
 *   - topics (array): List of topics available in the specified language.
 *   - topicsToChoose (number): The number of topics to choose for lessons.
 *   - chances (object): Chances and formulas related to topic selection.
 *   - lessonPoints (number): Points associated with each lesson.
 *   - missedLessonRadius (number): The radius for missed lessons.
 *
 * @throws {Error} Throws an error if there is an issue fetching technical properties.
 */
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
