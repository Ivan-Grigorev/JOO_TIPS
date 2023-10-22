const Lesson = require("../models/lessons/lessons");
const getTechProps = require("../utils/lessons/getTechProps/getTechProps");
const getCurrentDate = require("../utils/lessons/getCurrentDate");
const createLessons = require("../utils/lessons/createLessons");
const isTodaySunday = require("../utils/lessons/isTodaySunday");
const isTodayEndOfTheMonth = require("../utils/lessons/isTodayEndOfTheMonth");
const isLessonExistsForToday = require("../utils/lessons/isLessonExistsForToday");
const getViewedPercent = require("../utils/lessons/getViewedPercent/getViewedPercent");

const moment = require("moment");
const User = require("../models/user/user");
const getTopicsByLanguage = require("../utils/lessons/getTechProps/utils/getTopicsByLanguage");
const LanguagesList = require("../models/Tech/LanguagesList");
const getUserLanguagesInfo = require("../utils/lessons/getUserLanguagesInfo");

// moment config
moment.tz.setDefault("Europe/Kiev");
moment.updateLocale("en", {
  week: {
    dow: 1, // Начало недели - понедельник (1)
  },
  // weekEnd: 6, // Конец недели - суббота (6)
});

/**
 * @function isLessonExistById
 * @description Middleware function to check if a lesson exists by its ID.
 *
 * @param {Request} req - Express request object.
 * @param {string} req.body.lessonId - ID of the lesson to check.
 * @param {Response} res - Express response object.
 * @param {Function} next - Express next middleware function.
 *
 * @returns {undefined}
 */
const isLessonExistById = async (req, res, next) => {
  try {
    const { lessonId } = req.body;

    // Find the lesson in the database by its ID and user ID
    const lesson = await Lesson.findOne({ _id: lessonId, userId: req.user.id });

    if (!lesson) {
      // Lesson not found, send a 404 response
      // console.log("Lesson is not found");
      return res.status(404).json({ message: "Lesson is not found" });
    }

    // If lesson exists, save lesson object to req.lesson and continue to the next middleware or route handler
    req.lesson = lesson;
    next();
  } catch (e) {
    // Handle errors if any
    console.error(`Error: ${e}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * @function isLessonAlreadyCompleted
 * @description Middleware to check if a lesson has already been completed.
 *
 * @param {Request} req - Express request object with a 'lesson' property.
 * @param {Response} res - Express response object.
 * @param {Function} next - Express next middleware function.
 *
 * @returns {undefined}
 */
const isLessonAlreadyCompleted = async (req, res, next) => {
  try {
    // Check if the lesson's 'completed' property is true
    if (req.lesson.status === "completed") {
      // If the lesson is already completed, respond with a 409 Conflict status
      return res.status(409).json({ message: "Lesson is already completed" });
    }

    // If the lesson is not completed, proceed to the next middleware or route handler
    next();
  } catch (e) {
    // Handle errors if any occur during the process
    console.error(`Error: ${e}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

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
const isScheduleAlreadyExists = async (req, res, next) => {
  try {
    const today = moment(); // Get the current date
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

/**
 * @function createScheduleToEndOfWeek
 * @description Middleware to create a schedule for the current week.
 *
 * @param {object} req.user - Object representing user info what have been hashed in auth middleware.
 * @param {boolean} req.scheduleIsExists - Boolean value set if schedule is already exist.If true - skip this middleware through next()
 * @param {Function} next - Express next middleware function.
 *
 * @returns {void}
 */
async function createScheduleToEndOfWeek(req, res, next) {
  const userId = req.user.id;
  const language = req.body.language;

  const date = getCurrentDate();
  const todayIsEndOfMonth = isTodayEndOfTheMonth(date.currentDate) === true;
  const todayIsSunday = isTodaySunday(date.currentDayOfWeek) === true;
  try {
    if (req.scheduleIsExists) return next(); // Skip if the schedule already exists (set boolean to true in a previous middleware)

    const techProps = await getTechProps(language);

    if (todayIsEndOfMonth) {
      console.log("Today is the end of the month.".blue);

      const existingMonthLesson = await isLessonExistsForToday(
        userId,
        language,
        date.regexpCurrentDate
      );

      if (existingMonthLesson) {
        console.log("Month lesson is already exists.".blue);
        return next();
      }

      await createLessons.monthly(
        userId,
        language,
        techProps.monthLesson.cardsAmount,
        date.formattedCurrentDate,
        date.expiredDate,
        techProps.monthLesson.duration
      );
      return next();
    } else if (todayIsSunday) {
      console.log("Today is Sunday.".blue);

      const existedWeekLesson = await isLessonExistsForToday(
        userId,
        language,
        date.regexpCurrentDate
      );

      if (existedWeekLesson) {
        console.log("Week lesson already exists".blue);
        return next();
      }

      // If there are not enough cards, use a shared array and push random cards into it
      await createLessons.weekly(
        userId,
        language,
        techProps.weekLesson.cardsAmount,
        date.formattedCurrentDate,
        date.expiredDate,
        techProps.weekLesson.duration
      );

      return next();
    }

    const lessonsToCreate = await createLessons.daily(
      date.daysUntilSunday,
      date.currentDate,
      userId,
      language,
      techProps.dayLesson.cardsAmount,
      techProps.dayLesson.duration
    );

    await Lesson.insertMany(lessonsToCreate); // Insert the created lessons into the database

    next();
  } catch (e) {
    console.error("Error creating user schedule:".red, e);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

/**
 * Middleware to validate and manage active topics for a user.
 *
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} - A Promise that resolves when the validation and topic management is complete.
 */
async function shouldChangeTopicStatus(req, res, next) {
  try {
    const language = req.body.language;
    const userID = req.user.id;

    const user = await User.findById(userID);

    // Find the user by their ID
    const [userLanguageInfo, languagesList, topicsList] = await Promise.all([
      getUserLanguagesInfo(user),
      LanguagesList.findOne({}), // Get the list of the languages (needed for his IDs)
      getTopicsByLanguage(language), // Get the list of topics for the user's active language
    ]);

    const viewedPercent = await getViewedPercent(user, userLanguageInfo); // count viewed cards percent

    console.log(`viewedPercent - ${viewedPercent}`.green);
    if (viewedPercent >= 75) {
      // logic
      // logic
      // logic
    }

    next();
  } catch (e) {
    console.error(`Error in isActiveTopicsValid check\n ${e}`.red);
    res.status(500).json({ message: "Internal server error." });
  }
}

module.exports = {
  isLessonExistById,
  isLessonAlreadyCompleted,
  isScheduleAlreadyExists,
  createScheduleToEndOfWeek,
  shouldChangeTopicStatus,
};
