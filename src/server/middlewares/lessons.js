const Lesson = require("../models/lessons/lessons");
const User = require("../models/user/user");
const selectRandomCards = require("../utils/lessons/selectRandomCards");
const moment = require("moment");

moment.updateLocale("en", {
  week: {
    dow: 1, // Начало недели - понедельник (1)
  },
  weekEnd: 6, // Конец недели - суббота (6)
});

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
      next();
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
    await Lesson.insertMany(lessonsToCreate);
    console.log(lessonsToCreate.length + " Lessons have been created".green);

    next();
  } catch (e) {
    console.error("Error creating user schedule:", e);
    throw new Error("Error creating user schedule");
  }
}

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
  req,
  res,
  next,
  userId,
  language,
  currentDate,
  takenCardsByWeek,
  techProps
) => {
  try {
    const userId = req.user.id;
    const language = req.body.language;

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

module.exports = {
  isLessonExistById,
  isLessonAlreadyCompleted,
  createScheduleToEndOfWeek,
  createWeekLesson,
  createMonthLesson,
};
