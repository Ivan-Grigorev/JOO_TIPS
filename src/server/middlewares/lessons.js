const Lesson = require("../models/lessons/lessons");
const moment = require("moment");
const User = require("../models/user/user");
const selectRandomCards = require("../utils/lessons/selectRandomCards");

// Middleware function to check if a lesson exists by its ID
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

// Middleware to check if a lesson has already been completed
const isLessonAlreadyCompleted = async (req, res, next) => {
  try {
    // Check if the lesson's 'completed' property is true
    if (req.lesson.completed === true) {
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

// Check if there are already lessons for the current week
const isScheduleAlreadyExists = async (req, res, next) => {
  try {
    const currentDate = moment();
    const userId = req.user.id;

    // trying to find in DB lessons on planned date
    const existingLessons = await Lesson.find({
      userId,
      lessonDate: {
        $gte: currentDate.startOf("week").toDate(),
        $lte: currentDate.endOf("week").toDate(),
      },
    });

    return existingLessons;
  } catch (e) {
    console.error("Error in createScheduleToEndOfWeek middleware", e);
    return e;
  }
};

// todo написать unit-test
async function createScheduleToEndOfWeek(req, res, next) {
  try {
    const userId = req.user.id;
    const language = req.body.language;

    // Find the user by their identifier
    const [user, Algorithm] = await Promise.all([
      User.findById(userId),
      selectRandomCards(userId, language),
    ]);

    // Get the current date and day of the week (0 - Sunday, 6 - Saturday)
    const currentDate = moment();
    const currentDayOfWeek = currentDate.day();

    // Calculate how many days are left until Saturday
    const daysRemaining = 6 - currentDayOfWeek;

    const existingLessons = await isScheduleAlreadyExists(userId, currentDate);

    if (existingLessons.length > 0) {
      console.log("Lessons already exist for this week".red);
      return "Lessons already exist for this week";
    }

    const lessonsToCreate = await createLessons(
      daysRemaining,
      currentDate,
      user._id,
      language,
      Algorithm.cards,
      Algorithm.takenCards,
      Algorithm.techProps
    );

    // Insert the created lessons into the database
    const createdLessons = await Lesson.insertMany(lessonsToCreate);
    console.log(lessonsToCreate.length + " Lessons have been created".green);

    return { createdLessons };
  } catch (e) {
    console.error("Error creating user schedule:", e);
    throw new Error("Error creating user schedule");
  }
}

module.exports = {
  isLessonExistById,
  isLessonAlreadyCompleted,
};
