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

// Check if there are already lessons for the current week
const isScheduleAlreadyExists = async (userId, currentDate) => {
  try {
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

const createLessons = async (
  daysRemaining,
  currentDate,
  userId,
  language,
  cards,
  takenCards,
  techProps
) => {
  try {
    const lessonsToCreate = [];

    // Create lessons for each day until Saturday
    for (let i = 0; i <= daysRemaining; i++) {
      const uniqueCards = new Set();

      // Select random unique cards (until the desired number is reached)
      while (uniqueCards.size < techProps.cardsAmount) {
        const cardID = cards[Math.floor(Math.random() * cards.length)]; // prettier-ignore

        if (!uniqueCards.has(cardID)) uniqueCards.add(cardID);
      }

      const day = currentDate.clone().add(i, "days");

      const expiredDate = day
        .clone()
        .add(1, "days")
        .set({ hour: 3, minute: 0, second: 0 });

      const cardsArray = Array.from(uniqueCards);

      const lesson = {
        userId,
        cards: cardsArray,
        language,
        points: 0,
        startTime: null,
        endTime: null,
        status: null,
        lessonDate: day.startOf("day").toDate(),
        lessonDuration: techProps.lessonDuration,
        expired: expiredDate.toDate(),
      };

      lessonsToCreate.push(lesson);
    }

    // // creating week lesson
    // const weekLesson = await createWeekLesson(
    //   userId,
    //   language,
    //   currentDate,
    //   takenCards.week,
    //   techProps
    // );

    // lessonsToCreate.push(weekLesson);

    return lessonsToCreate;
  } catch (e) {
    console.error("Error while creating lessons", e);
    return e;
  }
};

const createWeekLesson = async (
  userId,
  language,
  currentDate,
  takenCardsByWeek,
  techProps
) => {
  try {
    console.log(takenCardsByWeek);
    console.log("takenCardsByWeek");

    const uniqueCards = new Set();

    // Select random unique cards (until the desired number is reached)
    while (uniqueCards.size < takenCardsByWeek.length) {
      const cardID = takenCardsByWeek[Math.floor(Math.random() * takenCardsByWeek.length)]; // prettier-ignore

      if (!uniqueCards.has(cardID)) uniqueCards.add(cardID);
    }

    const expiredDate = currentDate
      .clone()
      .add(1, "days")
      .set({ hour: 3, minute: 0, second: 0 });

    const cardsArray = Array.from(uniqueCards);

    const lesson = {
      userId,
      cards: cardsArray,
      language,
      points: 50,
      startTime: null,
      endTime: null,
      status: null,
      lessonDate: currentDate.clone().endOf("week").toDate(),
      lessonDuration: 30, //* подтянуть значение из тех.коллекции
      expired: expiredDate.toDate(),
    };

    // Save the special Sunday lesson to the database
    const lessonsToCreate = await Lesson.create(lesson);
    return lessonsToCreate;
  } catch (e) {
    console.error("Error creating Sunday lesson", e);
    throw e;
  }
};

const createMonthLesson = async (userId, language, cards, techProps) => {
  try {
    const uniqueCards = new Set();

    // Select random unique cards (until the desired number is reached)
    while (uniqueCards.size < 5) {
      const cardID = cards[Math.floor(Math.random() * cards.length)]; // prettier-ignore

      if (!uniqueCards.has(cardID)) uniqueCards.add(cardID);
    }

    const currentDate = moment();
    const expiredDate = currentDate
      .clone()
      .add(1, "days")
      .set({ hour: 3, minute: 0, second: 0 });

    const cardsArray = Array.from(uniqueCards);

    const lesson = {
      userId,
      cards: cardsArray,
      language,
      points: 0,
      startTime: null,
      endTime: null,
      status: null,
      lessonDate: currentDate.startOf("day").toDate(),
      lessonDuration: techProps.lessonDuration,
      expired: expiredDate.toDate(),
    };

    // Save the monthly lesson to the database
    await Lesson.create(lesson);
  } catch (e) {
    console.error("Error creating monthly lesson", e);
    throw e;
  }
};

module.exports = { isUniqueLanguage, createScheduleToEndOfWeek };
