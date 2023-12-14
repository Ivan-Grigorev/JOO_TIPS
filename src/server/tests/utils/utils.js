const moment = require("moment");
const fs = require("fs/promises");
const path = require("path");

const LessonModel = require("../../models/lessons/lessons");
const createLessons = require("../../utils/lessons/createLessons");
const getDateByArgument = require("../../utils/lessons/getDateByArgument");
const getTechProps = require("../../utils/lessons/getTechProps/getTechProps");
const getTopicsByLanguage = require("../../utils/lessons/getTechProps/utils/getTopicsByLanguage.js");
const isLessonExistsForToday = require("../../utils/lessons/isLessonExistsForToday");
const isTodayEndOfTheMonth = require("../../utils/lessons/isTodayEndOfTheMonth");
const isTodaySunday = require("../../utils/lessons/isTodaySunday");

const User = require("./user.js");
const Lesson = require("./lessons.js");

/**
 * @function createScheduleToEndOfWeek
 * @description Test function to create a schedule for the current week. Used in JEST
 * @param {object} req.user - Object representing user info what have been hashed in auth middleware.
 *
 * @returns {Promise<void>}
 */
async function createTestScheduleToEndOfWeek(req, res) {
  const userId = req.user.id;
  const { language, testDate } = req.body;

  const date = getDateByArgument(testDate);
  const todayIsEndOfMonth = isTodayEndOfTheMonth(date.currentDate) === true;
  const todayIsSunday = isTodaySunday(date.currentDayOfWeek) === true;
  const techProps = await getTechProps(language);

  try {
    if (todayIsEndOfMonth) {
      //   console.log("Today is the end of the month.".blue);

      const existingMonthLesson = await isLessonExistsForToday(
        userId,
        language,
        date.regexpCurrentDate
      );

      if (existingMonthLesson) {
        console.log("Month lesson is already exists.".blue);
        // return next();
        return res.status(201).end();
      }

      await createLessons.monthly(
        userId,
        language,
        techProps.monthLesson.cardsAmount,
        date.formattedCurrentDate,
        date.expiredDate,
        techProps.monthLesson.duration
      );
      // return next();
      return res.status(201).end();
    } else if (todayIsSunday) {
      //   console.log("Today is Sunday.".blue);

      const existedWeekLesson = await isLessonExistsForToday(
        userId,
        language,
        date.regexpCurrentDate
      );

      if (existedWeekLesson) {
        console.log("Week lesson already exists".blue);
        // return next();
        return res.status(201).end();
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

      // return next();
      return res.status(201).end();
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

    await LessonModel.insertMany(lessonsToCreate); // Insert the created lessons into the database

    return res.status(201).end();
  } catch (e) {
    console.error("Error creating user schedule:".red, e);
    res.status(500).json({ message: "Internal Server Error" });
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
async function TESTisScheduleAlreadyExists(req, res, next) {
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
    const existingLessons = await LessonModel.find({
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
}

/**
 * Clears user-related data from the database.
 * @param {string} userId - The ID of the user.
 * @param {string} userEmail - The email of the user.
 * @returns {Promise<void>} - A Promise that resolves when the database is cleared.
 */
async function clearDatabase(userId, userEmail) {
  await Promise.all([
    User.deleteByEmail(userEmail),
    Lesson.deleteCreated(userId),
  ]).catch((e) => console.error(e));
}

async function getTopicNameByRef(topicRef, activeLanguage) {
  try {
    const topicsList = await getTopicsByLanguage(activeLanguage);

    const foundTopic = topicsList.find((topic) => {
      return topic._id.toString() === topicRef;
    }).topicTitle;

    return foundTopic;
  } catch (e) {
    console.error(`Error while getting topic by ref: ${e.message}`.red);
  }
}

/**
 * Logs data to a file asynchronously.
 * @param {string} data - The data to be logged.
 * @returns {Promise<void>} - A Promise that resolves when the data is logged.
 */
async function log(data) {
  const logFileName = "algorithm.log";
  const logFile = path.join(__dirname, "..", logFileName);

  try {
    const dataToSave = data.split(".").join(".\n");

    console.log("dataToSave".green, dataToSave);

    await fs.appendFile(logFile, dataToSave);
  } catch (err) {
    console.error(err);
    console.log(`Error saving the ${logFile}`.red);
  }
}

/**
 * Сравнивает два объекта и возвращает информацию об изменениях в определенных полях.
 * @param {object} oldObject - Первый объект для сравнения.
 * @param {object} actualObject - Второй объект для сравнения.
 * @returns {object|null} - Объект с информацией об изменениях или null, если изменений нет.
 */
function compareFields(oldObject, actualObject) {
  if (oldObject === null) return null; // Если oldObject === null, вернуть null

  const changes = {};

  // Сравнение объектов внутри activeTopicsRefs
  const oldActiveTopics = oldObject.activeTopicsRefs.map((ref) =>
    ref.ref.toString()
  );
  const actualActiveTopics = actualObject.activeTopicsRefs.map((ref) =>
    ref.ref.toString()
  );

  if (JSON.stringify(oldActiveTopics) !== JSON.stringify(actualActiveTopics)) {
    changes.activeTopicsRefs = {
      oldValue: oldActiveTopics,
      actualValue: actualActiveTopics,
    };
  }

  // Сравнение объектов в массиве topicStatuses
  const oldStatuses = oldObject.topicStatuses.map((status) => ({
    ref: status.ref.toString(),
    viewStatus: status.viewStatus,
    viewPercentage: status.viewPercentage,
  }));

  const actualStatuses = actualObject.topicStatuses.map((status) => ({
    ref: status.ref.toString(),
    viewStatus: status.viewStatus,
    viewPercentage: status.viewPercentage,
  }));

  if (JSON.stringify(oldStatuses) !== JSON.stringify(actualStatuses)) {
    changes.topicStatuses = {
      oldValue: oldStatuses,
      actualValue: actualStatuses,
    };
  }

  return Object.keys(changes).length > 0 ? changes : null; // Возвращаем объект с информацией об изменениях или null, если изменений нет
}

async function formatChanges(changes) {
  const formattedChanges = {
    topics: [],
    activeTopics: [],
  };

  const language = "javascript";

  if (changes.activeTopicsRefs) {
    const oldTopics = changes.activeTopicsRefs.oldValue.map(JSON.stringify);
    const newTopics = changes.activeTopicsRefs.actualValue.map(JSON.stringify);

    const addedTopic = newTopics.find((topic) => !oldTopics.includes(topic));

    if (addedTopic) {
      console.log(`Добавилась активная тема: ${addedTopic}`.blue);
      console.log(
        `Список активных тем: ${changes.activeTopicsRefs.actualValue}`.blue
      );

      formattedChanges.activeTopics.push(addedTopic);
    }
  }

  if (changes.topicStatuses) {
    const oldTopicsAmount = changes.topicStatuses.oldValue.length;
    const newTopicsAmount = changes.topicStatuses.actualValue.length;

    if (oldTopicsAmount < newTopicsAmount) {
      const addedTopic = changes.topicStatuses.actualValue.find(
        (status) =>
          !changes.topicStatuses.oldValue.some((old) => old.ref === status.ref)
      );

      if (addedTopic) {
        const topicsList = changes.topicStatuses.actualValue.map((topic) => topic.ref); // prettier-ignore

        const topicName = await getTopicNameByRef(addedTopic.ref, language);

        console.log(`Добавлена тема: "${topicName}"`.blue);
        console.log(`Список тем: ${topicsList}`.blue);

        formattedChanges.topics.push(addedTopic);
      }
    }
  }

  return formattedChanges;
}

module.exports = {
  createTestScheduleToEndOfWeek,
  TESTisScheduleAlreadyExists,
  clearDatabase,
  log,
  compareFields,
  formatChanges,
};
