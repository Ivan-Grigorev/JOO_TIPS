const Lesson = require("../models/lessons/lessons");
const User = require("../models/user/user");
const selectRandomCards = require("../utils/lessons/selectRandomCards");
const moment = require("moment");
moment.tz.setDefault("Europe/Kiev");
moment.updateLocale("en", {
  week: {
    dow: 1, // Начало недели - понедельник (1)
  },
  // weekEnd: 6, // Конец недели - суббота (6)
});

console.log("Сегодня", moment().format("DD-MM-YYYY HH:mm"));
console.log("Конец недели", moment().endOf("week").format("DD-MM-YYYY HH:mm"));
console.log(
  "Конец недели - 1 день",
  moment().endOf("week").subtract(1, "days").format("DD-MM-YYYY HH:mm")
);

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

    if (existingLessons.length !== 0) req.scheduleIsExists = true;

    next();
  } catch (e) {
    console.error("Error in createScheduleToEndOfWeek middleware".red, e);
    res.status(500).json({ message: "Internal server error" });
  }
};

// todo написать unit-test
async function createScheduleToEndOfWeek(req, res, next) {
  try {
    const userId = req.user.id;
    const language = req.body.language;

    // Get the current date and day of the week (0 - Sunday, 6 - Saturday)
    const currentDate = moment();
    const currentDayOfWeek = currentDate.day();

    // Find the user by their identifier
    const [user, Algorithm] = await Promise.all([
      User.findById(userId),
      selectRandomCards(userId, language),
    ]);

    if (isTodayEndOfTheMonth(currentDate) === true) {
      console.log("Today is the end of the month.".blue);
      console.log("Creating month lesson".blue);

      await createMonthLesson();
      next();
    } else if (isTodaySaturday(currentDayOfWeek) === true) {
      console.log("Today is Saturday.".blue);
      console.log("Creating week lesson".blue);

      const today = moment().startOf("day").toDate();

      const existedWeekLesson = await Lesson.findOne({
        lessonDate: today,
      });

      if (existedWeekLesson) {
        console.log("Week lesson is already existing".blue);
        return next();
      }

      await createWeekLesson(
        userId,
        language,
        currentDate,
        Algorithm.takenCards.week,
        Algorithm.techProps
      );

      return next();
    }

    if (req.scheduleIsExists) return next(); // set boolean to true in past midddleware

    // Calculate how many days are left until Saturday
    const daysRemaining = 6 - currentDayOfWeek;

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

// todo remove to utils file
function isTodaySaturday(currentDayOfWeek) {
  if (currentDayOfWeek === 0) {
    return true;
  }
  return false;
}

// todo remove to utils file
function isTodayEndOfTheMonth(currentDate) {
  // Получите день месяца
  const currentDayOfMonth = currentDate.date();

  // Получите количество дней в текущем месяце
  const daysInCurrentMonth = currentDate.daysInMonth();

  // Проверьте, что сегодня последний день месяца
  if (currentDayOfMonth === daysInCurrentMonth) {
    return true;
  }
  return false;
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
  userId,
  language,
  currentDate,
  takenCardsByWeek,
  techProps
) => {
  try {
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
  isScheduleAlreadyExists,
  createScheduleToEndOfWeek,
  createWeekLesson,
  createMonthLesson,
};
