const Lesson = require("../models/lessons/lessons");
const getTechProps = require("../utils/lessons/getTechProps/getTechProps");
const getCurrentDate = require("../utils/lessons/getCurrentDate");
const createLessons = require("../utils/lessons/createLessons");
const isTodaySunday = require("../utils/lessons/isTodaySunday");
const isTodayEndOfTheMonth = require("../utils/lessons/isTodayEndOfTheMonth");
const isLessonExistsForToday = require("../utils/lessons/isLessonExistsForToday");
const getViewedPercent = require("../utils/lessons/getViewedPercent/getViewedPercent");

const moment = require("moment");

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
 * @param {object} req - Express request object.
 * @param {string} req.body.lessonId - ID of the lesson to check.
 * @param {object} res - Express response object.
 * @param {function} next - Express next middleware function.
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
 * @param {object} req - Express request object with a 'lesson' property.
 * @param {object} res - Express response object.
 * @param {function} next - Express next middleware function.
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
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - Express next middleware function.
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

    console.log("Dates until Sunday: ", datesUntilSunday); // Log the array of dates

    // Создаем массив регулярных выражений для каждой даты
    const dateRegexArray = datesUntilSunday.map(
      (date) => new RegExp(date.replace(/\./g, "\\."))
    );

    // Find documents with lesson dates within the current week
    const existingLessons = await Lesson.find({
      $or: dateRegexArray.map((dateRegex) => ({
        lessonDate: { $regex: dateRegex },
      })),
    });

    if (existingLessons.length !== 0) {
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
 * @param {object} res - Express response object.
 * @param {function} next - Express next middleware function.
 *
 * @returns {void}
 */
async function createScheduleToEndOfWeek(req, res, next) {
  try {
    if (req.scheduleIsExists) return next(); // Skip if the schedule already exists (set boolean to true in a previous middleware)

    const userId = req.user.id;
    const language = req.body.language;

    // Get the current date in different formats
    const date = getCurrentDate();

    const techProps = await getTechProps(language);

    const todayIsEndOfMonth = isTodayEndOfTheMonth(date.currentDate) === true;
    const todayIsSunday = isTodaySunday(date.currentDayOfWeek) === true;

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
      console.log("Creating month lesson".blue);

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
        date.formattedCurrentDate
      );

      if (existedWeekLesson) {
        console.log("Week lesson already exists".blue);
        return next();
      }

      console.log("Creating week lesson".blue);

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

    console.log("Creating daily lessons".blue);

    const lessonsToCreate = await createLessons.daily(
      date.daysUntilSunday,
      date.currentDate,
      userId,
      language,
      techProps.dayLesson.cardsAmount,
      techProps.dayLesson.duration
    );

    await Lesson.insertMany(lessonsToCreate); // Insert the created lessons into the database
    console.log(lessonsToCreate.length + " lessons have been created".green);

    next();
  } catch (e) {
    console.error("Error creating user schedule:".red, e);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

/**
 * @function shouldAddNewTopic
 * @description Checks viewed card percentage or time from adding topic.
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 *
 * @return {void}
 */
async function shouldAddNewTopic(req, res, next) {
  try {
    console.log('shouldAddNewTopic middleware'.blue)
    const [a, b] = await Promise.all([getViewedPercent(), getViewedPercent()]);
    next();
  } catch (e) {
    console.error("Error in shouldAddNewTopic", e);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  isLessonExistById,
  isLessonAlreadyCompleted,
  isScheduleAlreadyExists,
  createScheduleToEndOfWeek,
  shouldAddNewTopic,
};
