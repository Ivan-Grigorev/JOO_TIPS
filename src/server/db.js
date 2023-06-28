const dotenv = require("dotenv");
const mongoose = require("mongoose");
require("colors");
dotenv.config();

const URL = process.env.DB_URL;

async function mongoDB() {
  try {
    await mongoose.connect(URL, {
      dbName: "JOO_TIPS",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connection successful!".yellow);
    return mongoose.connection;
  } catch (error) {
    console.error(`Error with MongoDB connection: ${error}`.red);
    process.exit(1);
  }
}

module.exports = mongoDB;
