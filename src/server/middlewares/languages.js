const Lesson = require("../models/lessons/lessons");
const User = require("../models/user/user");
const selectRandomCards = require("../utils/lessons/selectRandomCards");
const moment = require("moment");

// Middleware for checking if a new language is unique for a user
async function isUniqueLanguage(req, res, next) {
  try {
    const user = await User.findById(req.user.id);
    const newLanguage = req.body.language; // Language from the request body

    if (user.languages.includes(newLanguage)) {
      // The user already has the new language in their list
      console.log(`${newLanguage} already exists for the user`);
      return res.status(409).json({
        message: `${newLanguage} already exists for the user`,
      });
    }

    // The new language is unique for the user, proceed to the next middleware
    next();
  } catch (e) {
    console.error(`Error checking unique language: ${e.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
}

// todo написать unit-test
async function createScheduleToEndOfWeek(language, userId) {
  try {
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

    // Check if there are already lessons for the current week
    const existingLessons = await Lesson.find({
      userId,
      lessonDate: {
        $gte: currentDate.startOf("week").toDate(),
        $lte: currentDate.endOf("week").toDate(),
      },
    });

    if (existingLessons.length > 0) {
      console.log("Lessons already exist for this week".red);
      return "Lessons already exist for this week";
    }

    const lessonsToCreate = [];

    // Create lessons for each day until Saturday
    for (let i = 0; i <= daysRemaining; i++) {
      const uniqueCards = new Set();

      // Select random unique cards (until the desired number is reached)
      while (uniqueCards.size < 5) {
        const cardID =
          Algorithm.cards[Math.floor(Math.random() * Algorithm.cards.length)];

        if (!uniqueCards.has(cardID)) {
          uniqueCards.add(cardID);
        }
      }

      const day = currentDate.clone().add(i, "days");

      const expiredDate = day
        .clone()
        .add(1, "days")
        .set({ hour: 3, minute: 0, second: 0 });

      const cardsArray = Array.from(uniqueCards);

      const lesson = {
        userId: user._id,
        cards: cardsArray,
        language,
        points: 0,
        startTime: null,
        endTime: null,
        status: null,
        lessonDate: day.startOf("day").toDate(),
        lessonDuration: Algorithm.techProps.lessonDuration,
        expired: expiredDate.toDate(),
      };

      lessonsToCreate.push(lesson);
    }

    // Insert the created lessons into the database
    const createdLessons = await Lesson.insertMany(lessonsToCreate);

    console.log(lessonsToCreate.length + " Lessons have been created".green);

    return createdLessons;
  } catch (e) {
    console.error("Error creating user schedule:", e);
    throw new Error("Error creating user schedule");
  }
}

module.exports = { isUniqueLanguage, createScheduleToEndOfWeek };
