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

async function createScheduleToEndOfWeek(language, userID) {
  try {
    const Algorithm = await selectRandomCards(language);

    const user = await User.findById(userID);

    if (Algorithm.cards === null) return "No cards";

    // Получаем текущую дату
    const currentDate = moment();

    // Создаем массив дней сегодняшнего дня до субботы
    const days = [];
    for (let i = 0; i <= 5; i++) {
      const date = moment(currentDate).add(i, "days");
      days.push(date);
    }

    const lessonsToCreate = [];

    for (const cardID of Algorithm.cards) {
      const index = Algorithm.cards.indexOf(cardID); // Получаем индекс карточки
      const dayIndex = index % days.length; // Определяем индекс дня для каждой карточки

      const day = days[dayIndex];

      // Вычисляем крайнюю дату (не включительно) до 03:00 следующего дня
      const expiredDate = moment(day)
        .add(1, "days")
        .set({ hour: 3, minute: 0, second: 0 });

      const card = await Card.findById(cardID);

      lessonsToCreate.push({
        userId: user._id,
        language: language,
        topic: card.topic, // Используем тему из карточки
        cardText: card.cardText, // Используем текст карточки
        cardsAmount: 5, // Algorithm.techProps., // Используем количество карточек из карточки
        points: 0, // количество зависит от степени просмотренности карточек
        startTime: null, // Начальное время (по умолчанию)
        endTime: null, // Конечное время (по умолчанию)
        status: null, // Статус (по умолчанию)
        lessonDate: day.toDate(),
        lessonNumber: index + 1, // Номер урока
        lessonDuration: Algorithm.techProps.lessonDuration, // Длительность урока (по умолчанию)
        expired: expiredDate.toDate(), // Крайняя дата урока
      });
    }

    // Шаг 2: Сохраняем объекты уроков в базе данных
    const createdLessons = await Lesson.insertMany(lessonsToCreate);

    return createdLessons;
  } catch (e) {
    console.error("Error creating user schedule:".red, e);
    throw new Error("Error creating user schedule");
  }
}

module.exports = { isUniqueLanguage, createScheduleToEndOfWeek };
