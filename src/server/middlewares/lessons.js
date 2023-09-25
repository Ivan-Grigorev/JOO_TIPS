const Lesson = require("../models/lessons/lessons");
const User = require("../models/user/user");
const getTechProps = require("../utils/lessons/getTechProps/getTechProps");
const selectRandomCards = require("../utils/lessons/selectRandomCards");
const getAllTakenCards = require("../utils/lessons/getAllTakenCards");
const moment = require("moment");
const Algorithm = require("../utils/lessons/Algorithm");

// moment config
moment.tz.setDefault("Europe/Kiev");
moment.updateLocale("en", {
  week: {
    dow: 1, // Начало недели - понедельник (1)
  },
  // weekEnd: 6, // Конец недели - суббота (6)
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

    // Получите начало и конец недели в формате "DD.MM.YYYY"
    const startOfWeek = currentDate.startOf("week").format("DD.MM.YYYY");
    const endOfWeek = currentDate.endOf("week").format("DD.MM.YYYY");

    // trying to find in DB lessons on planned date
    const existingLessons = await Lesson.find({
      userId,
      lessonDate: {
        $gte: startOfWeek,
        $lte: endOfWeek,
      },
    });

    if (existingLessons.length !== 0) {
      console.log("Lessons schedule is already exists".blue);
      req.scheduleIsExists = true;
    }

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

    // Get the current date in different formats
    const date = getCurrentDate();

    const techProps = await getTechProps(language);

    const todayIsEndOfMonth = isTodayEndOfTheMonth(date.currentDate) === true;
    const todayIsSunday = isTodaySunday(date.currentDayOfWeek) === true;

    if (todayIsEndOfMonth) {
      console.log("Today is the end of the month.".blue);
      console.log("Creating month lesson".blue);

      await createMonthLesson(
        userId,
        language,
        techProps.monthLesson.cardsAmount,
        date.formattedCurrentDate,
        date.expiredDate,
        techProps.monthLesson.duration
      );
      next();
    } else if (todayIsSunday) {
      console.log("Today is Saturday.".blue);
      console.log("Creating week lesson".blue);

      const existedWeekLesson = await Lesson.findOne({lessonDate: date.formattedCurrentDate}); // prettier-ignore

      if (existedWeekLesson) {
        console.log("Week lesson is already existing".blue);
        return next();
      }

      //* если карточек не хватает - взять за основу общий массив карточек
      // todo должен браться имеющийся массив...
      // todo и в него должны пушиться рандомных N карточек

      await createWeekLesson(
        userId,
        language,
        techProps.weekLesson.cardsAmount,
        date.formattedCurrentDate,
        date.expiredDate,
        techProps.weekLesson.duration
      );

      return next();
    }

    if (req.scheduleIsExists) return next(); // set boolean to true in past midddleware

    const lessonsToCreate = await createLessons(
      date.daysUntilSunday,
      date.currentDate,
      userId,
      language,
      techProps.dayLesson.cardsAmount,
      techProps.dayLesson.duration
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
function isTodaySunday(currentDayOfWeek) {
  if (currentDayOfWeek === 7) {
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

async function createLessons(
  daysRemaining,
  currentDate,
  userId,
  language,
  cardsAmount,
  lessonDuration
) {
  try {
    const cards = await selectRandomCards(userId, language, cardsAmount);
    const lessonsToCreate = [];
    if (daysRemaining === 0 || daysRemaining === -1) return [];

    // Create lessons for each day until Saturday
    for (let i = 0; i < daysRemaining; i++) {
      const uniqueCards = new Set();

      // Select random unique cards (until the desired number is reached)
      while (uniqueCards.size < cardsAmount) {
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
        lessonDate: day.format("DD.MM.YYYY"),
        lessonDuration,
        expired: expiredDate.format("DD.MM.YYYY"),
      };

      lessonsToCreate.push(lesson);
    }

    return lessonsToCreate;
  } catch (e) {
    console.error("Error while creating lessons", e);
  }
}

async function createWeekLesson(
  userId,
  language,
  cardsAmount,
  currentDate,
  expiredDate,
  lessonDuration
) {
  try {
    const takenCards = await getAllTakenCards(userId);
    const shuffledTakenCards = Algorithm(takenCards.week, cardsAmount);

    let takenCardIDs = [];

    // Проверяем, достаточно ли карт в массиве takenCards.week
    takenCardIDs = shuffledTakenCards; // Распространяем массив takenCards.week
    if (takenCards.week.length < cardsAmount) {
      // Распространяем массив takenCards.week
      takenCardIDs = shuffledTakenCards;

      // Вычисляем, сколько дополнительных карт нужно для cardsAmount
      const additionalCardsNeeded = cardsAmount - takenCards.week.length;

      // Вызываем функцию selectRandomCards, чтобы получить дополнительные карты
      const additionalCards = await selectRandomCards(additionalCardsNeeded);

      // Разглаживаем массивы и добавляем дополнительные карты
      takenCardIDs.push(...additionalCards.flat());
    }

    const uniqueCards = new Set();

    // Select random unique cards (until the desired number is reached)
    while (uniqueCards.size < takenCardIDs.length) {
      const cardID = takenCardIDs[Math.floor(Math.random() * takenCardIDs.length)]; // prettier-ignore

      if (!uniqueCards.has(cardID)) uniqueCards.add(cardID);
    }

    const cardsArray = Array.from(uniqueCards);

    const lesson = {
      userId,
      cards: cardsArray,
      language,
      points: 50,
      startTime: null,
      endTime: null,
      status: null,
      lessonDate: currentDate,
      lessonDuration,
      expired: expiredDate,
    };

    // Save the special Sunday lesson to the database
    const lessonsToCreate = await Lesson.create(lesson);
    return lessonsToCreate;
  } catch (e) {
    console.error("Error creating Sunday lesson", e);
    throw e;
  }
}

async function createMonthLesson(
  userId,
  language,
  cardsAmount,
  currentDate,
  expiredDate,
  lessonDuration
) {
  try {
    const takenCards = await getAllTakenCards(userId);
    const shuffledTakenCards = Algorithm(takenCards.month, cardsAmount);

    let takenCardIDs = [];

    // Проверяем, достаточно ли карт в массиве takenCards.month
    takenCardIDs = shuffledTakenCards; // Распространяем массив takenCards.month
    if (takenCards.month.length < cardsAmount) {
      // Распространяем массив takenCards.month
      takenCardIDs = shuffledTakenCards;

      // Вычисляем, сколько дополнительных карт нужно для cardsAmount
      const additionalCardsNeeded = cardsAmount - takenCards.month.length;

      // Вызываем функцию selectRandomCards, чтобы получить дополнительные карты
      const additionalCards = await selectRandomCards(additionalCardsNeeded);

      // Разглаживаем массивы и добавляем дополнительные карты
      takenCardIDs.push(...additionalCards.flat());
    }

    const uniqueCards = new Set();

    // Select random unique cards (until the desired number is reached)
    while (uniqueCards.size < takenCardIDs.length) {
      const cardID = takenCardIDs[Math.floor(Math.random() * takenCardIDs.length)]; // prettier-ignore

      if (!uniqueCards.has(cardID)) uniqueCards.add(cardID);
    }

    const cardsArray = Array.from(uniqueCards);

    const lesson = {
      userId,
      cards: cardsArray,
      language,
      points: 150,
      startTime: null,
      endTime: null,
      status: null,
      lessonDate: currentDate,
      lessonDuration,
      expired: expiredDate,
    };

    // Save the special Sunday lesson to the database
    const lessonsToCreate = await Lesson.create(lesson);
    return lessonsToCreate;
  } catch (e) {
    console.error("Error creating monthly lesson", e);
    throw e;
  }
}

function getCurrentDate() {
  const currentDate = moment();
  const formattedCurrentDate = currentDate.format("DD.MM.YYYY");
  const currentDayOfWeek = moment().isoWeekday(); // Получаем текущий день недели (1 - понедельник, 2 - вторник, и так далее, 7 - воскресенье)
  const daysUntilSunday = 7 - currentDayOfWeek; // остаток дней до субботы
  const expiredDate = currentDate
    .clone()
    .add(1, "days")
    .set({ hour: 3, minute: 0, second: 0 })
    .format("DD.MM.YYYY");

  console.log(`Current date - ${currentDate}`.yellow);
  console.log(`Formatted current date  - ${formattedCurrentDate}`.yellow);
  console.log(`Current day of week date - ${currentDayOfWeek}`.yellow);
  console.log(`Expired date - ${expiredDate}`.yellow);
  console.log(`Days until the Sunday - ${daysUntilSunday}`.yellow);

  return {
    currentDate,
    formattedCurrentDate,
    currentDayOfWeek,
    daysUntilSunday,
    expiredDate,
  };
}

module.exports = {
  isLessonExistById,
  isLessonAlreadyCompleted,
  isScheduleAlreadyExists,
  createScheduleToEndOfWeek,
  createWeekLesson,
  createMonthLesson,
};
