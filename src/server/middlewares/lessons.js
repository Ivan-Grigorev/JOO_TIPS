const Lesson = require("../models/lessons/lessons");
const User = require("../models/user/user");

const getTechProps = require("../utils/lessons/getTechProps/getTechProps");
const getCurrentDate = require("../utils/lessons/getCurrentDate");
const createLessons = require("../utils/lessons/createLessons");
const isTodaySunday = require("../utils/lessons/isTodaySunday");
const isTodayEndOfTheMonth = require("../utils/lessons/isTodayEndOfTheMonth");
const isLessonExistsForToday = require("../utils/lessons/isLessonExistsForToday");
const getViewedPercent = require("../utils/lessons/getViewedPercent/getViewedPercent");
const getUserLanguagesInfo = require("../utils/lessons/getUserLanguagesInfo");
const calculateDaysDifference = require("../utils/lessons/calculateDaysDifference");
const addNewTopic = require("../utils/lessons/addNewTopic");
const getLastActiveTopic = require("../utils/lessons/getLastActiveTopic");

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

    if (!lessonId) {
      return res.status(400).json({ message: "No lesson ID provided" });
    }

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

async function areLessonStarted(req, res, next) {
  try {
    const lessonStarted = req.lesson.startDate !== null;

    if (!lessonStarted) {
      return res.status(409).json({ message: "The lesson must begin." });
    }

    next();
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
}

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
      techProps.dayLesson.cardsAmount * date.daysUntilSunday,
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
    const user = await User.findById(req.user.id);

    // Get information about the user's languages and active topics
    const userLanguageInfo = await getUserLanguagesInfo(user);
    const { userLanguageObject, activeTopics: activeTopicsTitles } = userLanguageInfo; // prettier-ignore
    const { activeTopicsRefs, topicStatuses } = userLanguageObject;

    // Find the topic with a viewPercentage of 100% in the topicStatuses array.
    const fullViewedTopic = topicStatuses.find(
      (topic) => topic.viewPercentage === 100
    );

    // Check if a fullViewedTopic was found and if the viewStatus is less than 3.
    if (fullViewedTopic && fullViewedTopic.viewStatus < 3) {
      // Increment the viewStatus of the found topic by 1.
      fullViewedTopic.viewStatus++;

      // Set the viewPercentage of the found topic to 0, indicating it's no longer fully viewed.
      fullViewedTopic.viewPercentage = 0;

      // Save the changes to the user's data (assuming the user object has a save method).
      user.save();
    }

    // Calculate the viewed card percentages for active topics
    const topicsViewedPercentage = await getViewedPercent(userLanguageInfo);

    // Get the last active topic and calculate the days difference
    const lastActiveTopic = getLastActiveTopic(topicsViewedPercentage);
    const lastTopic = activeTopicsRefs[activeTopicsRefs.length - 1];

    const daysDifference = calculateDaysDifference(lastTopic.activationDate);

    // If it has been 2 weeks since the last topic activation or viewed percentage is >= 75%
    const passedTwoWeeks = daysDifference >= 14;
    const viewedAtLeast25Percents = lastActiveTopic.viewedPercentage >= 25;
    const viewedMoreThan75Percents = lastActiveTopic.viewedPercentage >= 75;

    if (passedTwoWeeks & viewedAtLeast25Percents || viewedMoreThan75Percents) {
      // Add a new topic to the user's active topics
      await addNewTopic(
        user,
        activeTopicsTitles,
        activeTopicsRefs,
        topicStatuses
      );
    }

    // Proceed to the next middleware
    next();
  } catch (e) {
    // Handle errors and respond with a 500 Internal Server Error
    console.error(`Error in isActiveTopicsValid check\n ${e}`.red);
    res.status(500).json({ message: "Internal server error." });
  }
}

/**
 * Middleware to check if the required card topic and card ID are provided in the request body.
 * If either the card topic or card ID is missing, it returns a 400 Bad Request response with an error message.
 * If both the card topic and card ID are provided, it allows the request to proceed to the next middleware.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - The next middleware function to call if the required data is provided.
 */
function isCardProvided(req, res, next) {
  const { cardTopic, cardId } = req.body;

  // Check if either the card topic or card ID is missing in the request body
  if (!cardTopic || !cardId) {
    return res
      .status(400)
      .json({ message: "No card topic or cardId provided" });
  }

  // If both card topic and card ID are provided, allow the request to proceed
  next();
}

async function isActiveLanguageExists(req, res, next) {
  try {
    const user = await User.findById(req.user.id);

    if (!user.activeLanguage) {
      return res.status(400).json({
        message: "Current user doesn't have an activeLanguage field.",
      });
    }

    next();
  } catch (e) {
    console.error("Error in isActiveLanguageExists middleware.".red, e);
    res.status(500).json({ message: "Internal server error." });
  }
}

module.exports = {
  isLessonExistById,
  areLessonStarted,
  isLessonAlreadyCompleted,
  isScheduleAlreadyExists,
  createScheduleToEndOfWeek,
  shouldChangeTopicStatus,
  isCardProvided,
  isActiveLanguageExists,
};
