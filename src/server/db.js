const dotenv = require("dotenv"); // Load environment variables from a .env file
const mongoose = require("mongoose"); // MongoDB ODM (Object Data Modeling)
require("colors"); // Adds colors to console logs
dotenv.config(); // Load environment variables from .env file into process.env

const URL = process.env.DB_URL; // MongoDB connection URL from environment variables

// Function to establish a connection to the MongoDB database
async function mongoDB() {
  try {
    // Connect to the MongoDB database using the provided URL
    await mongoose.connect(URL, {
      dbName: "JOO_TIPS", // Database name
      useNewUrlParser: true, // Use the new URL parser
      useUnifiedTopology: true, // Use the new unified topology engine
    });

    console.log("Database connection successful!".yellow); // Log successful connection
    return mongoose.connection; // Return the database connection object
  } catch (error) {
    console.error(`Error with MongoDB connection: ${error}`.red); // Log error if connection fails
    process.exit(1); // Exit the application with a non-zero status code
  }
}

module.exports = mongoDB; // Export the mongoDB function for use in other modules
