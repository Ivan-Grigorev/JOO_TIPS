const Card = require("../models/Card/Card");
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
    // Получаем случайные карточки с помощью selectRandomCards
    const Algorithm = await selectRandomCards(language);

    // Находим пользователя по его идентификатору
    const user = await User.findById(userId);

    // Если алгоритм не вернул карточки, возвращаем сообщение об отсутствии карточек
    if (Algorithm.cards === null) return "No cards";

    // Получаем текущую дату и создаем массив дней до субботы
    const currentDate = moment();
    const days = [];
    for (let i = 0; i <= 5; i++) {
      days.push(currentDate.clone().add(i, "days").toDate());
    }

    // Преобразуем даты в формат без времени
    const daysWithoutTime = days.map((date) =>
      moment(date).startOf("day").toDate()
    );

    // Проверяем, есть ли уже уроки для этих дней (сравниваем только даты)
    const existingLessons = await Lesson.find({
      userId,
      lessonDate: { $in: daysWithoutTime },
    });

    // Если уже есть уроки для этих дней, возвращаем сообщение об этом
    if (existingLessons.length > 0) {
      console.log("Lessons already exist for these days");
      return "Lessons already exist for these days";
    }

    const lessonsToCreate = [];

    // Создаем уроки для каждого дня
    for (const day of days) {
      const uniqueCards = new Set(); // Для хранения уникальных карточек

      // Выбираем случайные уникальные карточки (пока не будет 5)
      while (uniqueCards.size < 5) {
        const cardID =
          Algorithm.cards[Math.floor(Math.random() * Algorithm.cards.length)];

        if (!uniqueCards.has(cardID)) {
          uniqueCards.add(cardID);
        }
      }

      const expiredDate = moment(day)
        .add(1, "days")
        .set({ hour: 3, minute: 0, second: 0 });

      const cardsArray = Array.from(uniqueCards);

      const lesson = {
        userId: user._id, // ссылка на пользователя
        cards: cardsArray, // Массив с ID уникальных карточек
        language: language,
        points: 0, // первый просмотр - 1б, второй - 2, третий - 3
        startTime: null, // время фактического начала урока
        endTime: null, // время фактического окончания урока
        status: null, // статус урока
        lessonDate: moment(day).startOf("day").toDate(), // Устанавливаем время на полночь
        lessonDuration: Algorithm.techProps.lessonDuration, // длительность урока
        expired: expiredDate.toDate(), // срок годности урока
      };

      lessonsToCreate.push(lesson);
    }

    // Вставляем созданные уроки в базу данных
    const createdLessons = await Lesson.insertMany(lessonsToCreate);

    console.log(`${lessonsToCreate.length} Lessons have been created`.green);

    return createdLessons;
  } catch (e) {
    console.error("Error creating user schedule:", e);
    throw new Error("Error creating user schedule");
  }
}

module.exports = { isUniqueLanguage, createScheduleToEndOfWeek };
