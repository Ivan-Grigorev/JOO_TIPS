const LessonConfig = require("../../../../models/Tech/LessonConfig");

/**
 * @function getLessonConfig
 * @description Retrieves the lesson configuration settings.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing the following properties:
 *   - dayLesson (object): Configuration for daily lessons.
 *   - weekLesson (object): Configuration for weekly lessons.
 *   - monthLesson (object): Configuration for monthly lessons.
 *   - lessonPoints (number): Points associated with each lesson.
 *   - missedLessonRadius (number): The radius for missed lessons.
 *
 * @throws {Error} Throws an error if there is an issue fetching the lesson configuration.
 */
async function getLessonConfig() {
  try {
    return await LessonConfig.findOne();
  } catch (e) {
    console.error("Error getting Lesson config", e);
  }
}

module.exports = getLessonConfig;
