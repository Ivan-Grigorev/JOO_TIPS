const moment = require("moment");
const Lesson = require("../../models/lessons/lessons");
/**
 * @function isScheduleAlreadyExists
 * @description Middleware to check if there are already lessons for the current week.
 *
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {Function} next - Express next middleware function.
 *
 * @returns {void}
 */
const TESTisScheduleAlreadyExists = async (req, res, next) => {
  try {
    const { testDate } = req.body;

    const today = moment(testDate); // Get the current date
    const sunday = 0; // Sunday is represented as 0 in moment.js (0 - Sunday, 1 - Monday, ..., 6 - Saturday)

    // If today is Sunday, immediately execute next()
    if (today.day() === sunday) return next();

    const datesUntilSunday = []; // Create an array to store dates

    // The loop runs until it's Sunday
    while (today.day() !== sunday) {
      datesUntilSunday.push(today.format("DD.MM.YYYY")); // Add the date to the array
      today.add(1, "day"); // Move to the next day
    }

    // console.log("Dates until Sunday: ", datesUntilSunday); // Log the array of dates

    // Создаем массив регулярных выражений для каждой даты
    const dateRegexArray = datesUntilSunday.map(
      (date) => new RegExp(date.replace(/\./g, "\\."))
    );

    // Find documents with lesson dates within the current week and matching userId
    const existingLessons = await Lesson.find({
      userId: req.user.id,
      $or: dateRegexArray.map((dateRegex) => ({
        lessonDate: { $regex: dateRegex },
      })),
    });

    if (existingLessons.length > 0) {
      console.log("Lessons schedule already exists".blue); // Log a message if lessons exist
      req.scheduleIsExists = true; // Set a flag in the request object
    }

    return next(); // Continue to the next middleware
  } catch (error) {
    console.error("Error in createScheduleToEndOfWeek middleware".red, error); // Log an error message
    res.status(500).json({ message: "Internal server error" }); // Respond with a 500 Internal Server Error
  }
};

module.exports = TESTisScheduleAlreadyExists;
