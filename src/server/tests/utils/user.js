const request = require("supertest");
const User = require("../../models/user/user");

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

/**
 * Finds a user in the database by their email address.
 * @param {string} email - The email address of the user to find.
 * @returns {Promise} - A promise that resolves with the found user object or null if not found, or rejects with an error.
 */
async function findUserByEmail(email) {
  try {
    // Find a user in the database using the provided email
    return await User.findOne({ email });
  } catch (error) {
    // Log and handle any errors that occur during the search
    console.error(error);
    throw new Error(`Error finding user by email: ${error.message}`);
  }
}

/**
 * Finds a user in the database by user ID.
 * @param {string} userId - The ID of the user to find.
 * @returns {Promise<object|null>} A Promise that resolves with the user object found, or null if not found.
 * @throws {Error} Throws an error if there's a problem finding the user.
 */
async function findUserById(userId) {
  try {
    // Find a user in the database using the userId
    return await User.findById(userId);
  } catch (error) {
    // Log and handle any errors that occur during the search
    console.error(error);
    throw new Error(`Error finding user by email: ${error.message}`);
  }
}

/**
 * Retrieves the language object of the user by user ID.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<object|null>} A Promise that resolves with the user's first language, or null if not found.
 */
async function getUserLanguageObject(userId) {
  try {
    const user = await findUserById(userId);

    return user.languages[0];
  } catch (error) {
    console.error(error);
    throw new Error(`Error getting user language object: ${error.message}`);
  }
}

/**
 * Deletes a user from the database based on their email address.
 * @param {string} email - The email address of the user to be deleted.
 * @returns {Promise} - A promise that resolves when the user is successfully deleted or rejects with an error.
 */
async function deleteUserByEmail(email) {
  try {
    // Find and delete a user from the database using the provided email
    return await User.findOneAndDelete({ email });
  } catch (error) {
    // Log an error message if deletion fails (assuming 'red' is a color identifier)
    console.error(`Test user wasn't deleted, ${error}`.red);
  }
}

module.exports = {
  create: createUser,
  findByEmail: findUserByEmail,
  deleteByEmail: deleteUserByEmail,
  findById: findUserById,
  getLanguageObject: getUserLanguageObject,
};
