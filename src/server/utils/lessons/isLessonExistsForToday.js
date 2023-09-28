const Lesson = require("../../models/lessons/lessons");

/**
 * Checks if a lesson exists for a specific user, language, and lesson date.
 *
 * @param {string} userId - The user's ID.
 * @param {string} language - The language for the lesson.
 * @param {string} lessonDate - The date of the lesson in "DD.MM.YYYY" format.
 * @returns {Promise} A promise that resolves to the found lesson or null if not found.
 */
async function isLessonExistsForToday(userId, language, regexpCurrentDate) {
  try {
    // Find a lesson in the database matching the provided user, language, and date.
    const foundLesson = await Lesson.findOne({
      userId,
      language,
      lessonDate: regexpCurrentDate,
    });

    // Return the found lesson or null if not found.
    return foundLesson;
  } catch (e) {
    // Handle any errors that may occur during the search.
    console.error("Error checking if a lesson exists for today:", e);
  }
}

module.exports = isLessonExistsForToday;
