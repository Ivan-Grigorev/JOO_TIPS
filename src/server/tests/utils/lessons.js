const request = require("supertest");
const Lesson = require("../../models/lessons/lessons");

/**
 * Creates lessons for a specific language and test date.
 * @param {Express.Application} app - The Express application instance.
 * @param {string} language - The language for the lessons.
 * @param {Date} testDate - The date for the test.
 * @param {string} userToken - The user's authentication token.
 * @returns {Promise} - A promise that resolves with the created lessons or rejects with an error.
 */
async function createLessons(app, language, testDate, userToken) {
  try {
    return await request(app)
      .get("/lessons/testAlgorithm")
      .send({ language, testDate: testDate })
      .set("Authorization", `Bearer ${userToken}`);
  } catch (e) {
    // Log and handle any errors that occur during the request
    console.error(`Error creating lessons: ${e}`);
    throw new Error(`Error creating lessons: ${e.message}`);
  }
}

/**
 * Retrieves active lessons for a specific user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise} - A promise that resolves with an array of active lesson IDs or logs an error.
 */
async function getActiveLessons(userId) {
  try {
    const activeLessons = await Lesson.find({ userId, status: null });

    return activeLessons.map((lesson) => lesson._id.toString());
  } catch (e) {
    console.error(e.message);
  }
}

/**
 * Finishes all lessons for a specific language and date.
 * @param {Express.Application} app - The Express application instance.
 * @param {string} language - The language for the lessons.
 * @param {Date} date - The date for the lessons to be finished.
 * @param {string} userToken - The user's authentication token.
 * @returns {Promise} - A promise that resolves with the finished lessons or rejects with an error.
 */
async function finishAllLessons(app, language, date, userToken) {
  try {
    return await request(app)
      .post("/lessons/finishAll")
      .send({ language, testDate: date })
      .set("Authorization", `Bearer ${userToken}`);
  } catch (e) {
    // Log and handle any errors that occur during the request
    console.error(`Error finishing lessons: ${e}`);
    throw new Error(`Error finishing lessons: ${e.message}`);
  }
}

/**
 * Deletes all lessons created by a specific user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise} - A promise that resolves when lessons are deleted or logs an error.
 */
async function deleteAllCreatedLessons(userId) {
  try {
    await Lesson.deleteMany({ userId });
  } catch (e) {
    console.error(`Error deleting all created lessons: ${e}`);
  }
}

module.exports = {
  create: createLessons,
  finishAll: finishAllLessons,
  getActive: getActiveLessons,
  deleteCreated: deleteAllCreatedLessons,
};
