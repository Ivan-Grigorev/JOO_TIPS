const request = require("supertest");

/**
 * Creates a new user by making a POST request to the '/users/signup' endpoint.
 * @param {Object} app - The Express application instance.
 * @param {{name: string, email: string, password: string, confirmedPassword: string}} userData - The user data to be sent in the request body.
 * @returns {Promise} - A promise that resolves with the created user data or rejects with an error.
 */
async function createUser(app, userData) {
  try {
    return await request(app).post("/users/signup").send(userData);
  } catch (e) {
    console.error(e);
    throw new Error(`Error creating user: ${e.message}`);
  }
}

module.exports = {
  create: createUser,
};
