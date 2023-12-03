const request = require("supertest");

/**
 * Adds a new language to a user's profile by making a POST request to the '/languages/add' endpoint.
 * @param {Object} app - The Express application instance.
 * @param {string} language - The language to be added.
 * @param {string} userToken - The user's authentication token.
 * @returns {Promise} - A promise that resolves with the response from the server or rejects with an error.
 */
async function addLanguage(app, language, userToken) {
  try {
    // Send a POST request to '/languages/add' endpoint with the specified language
    return await request(app)
      .post("/languages/add")
      .send({ language })
      .set("Authorization", `Bearer ${userToken}`);
  } catch (error) {
    // Log and handle any errors that occur during the request
    console.error(`Error adding language: ${error}`);
    throw new Error(`Error adding language: ${error.message}`);
  }
}

/**
 * Adds an active language to a user's profile by making a POST request to the '/languages/add/active' endpoint.
 * @param {Object} app - The Express application instance.
 * @param {string} language - The active language to be added.
 * @param {string} userToken - The user's authentication token.
 * @returns {Promise} - A promise that resolves with the response from the server or rejects with an error.
 */
async function addActiveLanguage(app, language, userToken) {
  try {
    // Send a POST request to '/languages/add/active' endpoint with the specified active language
    return await request(app)
      .post("/languages/add/active")
      .send({ language })
      .set("Authorization", `Bearer ${userToken}`);
  } catch (error) {
    // Log and handle any errors that occur during the request
    console.error(`Error adding active language: ${error}`);
    throw new Error(`Error adding active language: ${error.message}`);
  }
}

module.exports = {
  add: addLanguage,
  addActive: addActiveLanguage,
};
