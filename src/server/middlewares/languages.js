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

async function createScheduleToEndOfWeek(language, userId) {
  try {
    // Находим пользователя по его идентификатору
    const userPromise = User.findById(userId);
    const AlgorithmPromise = selectRandomCards(userId, language);

    const [user, Algorithm] = await Promise.all([
      userPromise,
      AlgorithmPromise,
    ]);

    // Получаем текущую дату и день недели (0 - воскресенье, 6 - суббота)
    const currentDate = moment();
    const currentDayOfWeek = currentDate.day();

    // Вычисляем, сколько дней осталось до субботы
    const daysRemaining = 6 - currentDayOfWeek;

    // Проверяем, если уже есть уроки для текущей недели
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

    // Создаем уроки для каждого дня до субботы
    for (let i = 0; i <= daysRemaining; i++) {
      const uniqueCards = new Set();

      // Выбираем случайные уникальные карточки (пока не будет нужное количество)
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

    // Вставляем созданные уроки в базу данных
    const createdLessons = await Lesson.insertMany(lessonsToCreate);

    console.log(lessonsToCreate.length + " Lessons have been created".green);

    return createdLessons;
  } catch (e) {
    console.error("Error creating user schedule:", e);
    throw new Error("Error creating user schedule");
  }
}

module.exports = { isUniqueLanguage, createScheduleToEndOfWeek };
