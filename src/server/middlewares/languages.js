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
    const Algorithm = await selectRandomCards(language);
    const user = await User.findById(userId);

    if (Algorithm.cards === null) return "No cards";

    const currentDate = moment();
    const days = [];

    // Создаем массив дней сегодняшнего дня до субботы
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

    if (existingLessons.length > 0) {
      console.log("Lessons already exist for these days");
      return "Lessons already exist for these days";
    }

    const lessonsToCreate = [];

    for (const cardID of Algorithm.cards) {
      const index = Algorithm.cards.indexOf(cardID);
      const dayIndex = index % days.length;
      const day = days[dayIndex];

      const expiredDate = moment(day)
        .add(1, "days")
        .set({ hour: 3, minute: 0, second: 0 });

      const card = await Card.findById(cardID);

      const lesson = {
        userId: user._id,
        cardsId: card._id,
        language: language,
        topic: card.topic,
        cardText: card.cardText,
        cardsAmount: 5, //Algorithm.techProps.cardsAmount
        points: 0,
        startTime: null,
        endTime: null,
        status: null,
        lessonDate: moment(day).startOf("day").toDate(), // Устанавливаем время на полночь,
        lessonNumber: index + 1,
        lessonDuration: Algorithm.techProps.lessonDuration,
        expired: expiredDate.toDate(),
      };

      lessonsToCreate.push(lesson);
    }

    const createdLessons = await Lesson.insertMany(lessonsToCreate);

    console.log(`${lessonsToCreate.length} Lessons have been created`.green);

    return createdLessons;
  } catch (e) {
    console.error("Error creating user schedule:", e);
    throw new Error("Error creating user schedule");
  }
}

module.exports = { isUniqueLanguage, createScheduleToEndOfWeek };
