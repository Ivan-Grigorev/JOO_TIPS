const request = require("supertest");
const Lesson = require("../../models/lessons/lessons");

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

async function getActiveLessons(userId) {
  try {
    const activeLessons = await Lesson.find({ userId, status: null });

    return activeLessons.map((lesson) => lesson._id.toString());
  } catch (e) {
    console.error(e.message);
  }
}

async function finishAllLessons(app, language, testDate, userToken) {
  try {
    return await request(app)
      .post("/lessons/finishAll")
      .send({ language, testDate: testDate })
      .set("Authorization", `Bearer ${userToken}`);
  } catch (e) {
    // Log and handle any errors that occur during the request
    console.error(`Error finishing lessons: ${e}`);
    throw new Error(`Error finishing lessons: ${e.message}`);
  }
}

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
