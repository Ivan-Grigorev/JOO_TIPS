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

async function createScheduleToEndOfWeek(req, res, next) {
  try {
    const { language } = req.body;

    const randomCards = await selectRandomCards(language);

    const user = await User.findById(req.user.id);

    // Получаем текущую дату
    const currentDate = moment();

    // Создаем массив дней сегодняшнего дня до субботы
    const days = [];
    for (let i = 0; i <= 5; i++) {
      const date = moment(currentDate).add(i, "days");
      days.push(date);
    }

    // Создаем массив объектов уроков для каждой карточки и дня
    const lessonsToCreate = [];
    randomCards.forEach((card, index) => {
      days.forEach((day, dayIndex) => {
        // Вычисляем крайнюю дату (не включительно) до 03:00 следующего дня
        const expiredDate = moment(day)
          .add(1, "days")
          .set({ hour: 3, minute: 0, second: 0 });

        lessonsToCreate.push({
          userID: user._id,
          language: language,
          topic: card.topic, // Используем тему из карточки
          cardText: card.cardText, // Используем текст карточки
          cardsAmount: card.cardsAmount, // Используем количество карточек из карточки
          startTime: null, // Начальное время (по умолчанию)
          endTime: null, // Конечное время (по умолчанию)
          status: null, // Статус (по умолчанию)
          lessonDate: day.toDate(),
          lessonNumber: index + 1, // Номер урока
          lessonDuration: 45, // Длительность урока (по умолчанию)
          expired: expiredDate,
        });
      });
    });

    // Шаг 2: Сохраняем объекты уроков в базе данных
    const createdLessons = await Lesson.insertMany(lessonsToCreate);

    // Отправляем ответ, если необходимо
    res.status(200).json({
      message: "Schedule created successfully",
      lessons: createdLessons,
    });
  } catch (e) {
    console.error("Error creating user schedule:", e);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { isUniqueLanguage, createScheduleToEndOfWeek };
