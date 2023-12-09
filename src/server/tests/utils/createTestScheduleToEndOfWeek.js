const Lesson = require("../../models/lessons/lessons");
const createLessons = require("../../utils/lessons/createLessons");
const getDateByArgument = require("../../utils/lessons/getDateByArgument");
const getTechProps = require("../../utils/lessons/getTechProps/getTechProps");
const isLessonExistsForToday = require("../../utils/lessons/isLessonExistsForToday");
const isTodayEndOfTheMonth = require("../../utils/lessons/isTodayEndOfTheMonth");
const isTodaySunday = require("../../utils/lessons/isTodaySunday");

/**
 * @function createScheduleToEndOfWeek
 * @description Test function to create a schedule for the current week. Used in JEST
 * @param {object} req.user - Object representing user info what have been hashed in auth middleware.
//  * @param {boolean} req.scheduleIsExists - Boolean value set if schedule is already exist.If true - skip this middleware through next()
// //  * @param {Function} next - Express next middleware function.
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

    await Lesson.insertMany(lessonsToCreate); // Insert the created lessons into the database

    return res.status(201).end();
  } catch (e) {
    console.error("Error creating user schedule:".red, e);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = createTestScheduleToEndOfWeek;
