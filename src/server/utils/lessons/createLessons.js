const Lesson = require("../../models/lessons/lessons");
const selectRandomCards = require("./selectRandomCards");
const getAllTakenCards = require("../../utils/lessons/getAllTakenCards");
const Algorithm = require("./Algorithm");

/**
 * @function createLessons
 * @description Creates lessons for a specified number of days until Saturday.
 *
 * @param {number} daysRemaining - The number of days remaining in the current week.
 * @param {moment} currentDate - The current date as a moment.js object.
 * @param {string} userId - The user's ID.
 * @param {string} language - The language for the lessons.
 * @param {number} cardsAmount - The number of cards for each lesson.
 * @param {number} lessonDuration - The duration of each lesson.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of lesson objects.
 *
 * @throws {Error} Throws an error if there is an issue while creating lessons.
 */
async function createLessons(
  daysRemaining,
  currentDate,
  userId,
  language,
  cardsAmount,
  lessonDuration
) {
  try {
    const Algorithm = await selectRandomCards(userId, language, cardsAmount);
    const { cards } = Algorithm;

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

/**
 * @function createWeekLesson
 * @description Creates a weekly lesson for the specified user.
 *
 * @param {string} userId - The user's ID.
 * @param {string} language - The language for the lesson.
 * @param {number} cardsAmount - The number of cards for the lesson.
 * @param {string} currentDate - The current date in "DD.MM.YYYY" format.
 * @param {string} expiredDate - The date when the lesson expires in "DD.MM.YYYY" format.
 * @param {number} lessonDuration - The duration of the lesson.
 *
 * @returns {Promise<object>} A promise that resolves to the created lesson object.
 *
 * @throws {Error} Throws an error if there is an issue while creating the weekly lesson.
 */
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

/**
 * @function createMonthLesson
 * @description Creates a monthly lesson for the specified user.
 *
 * @param {string} userId - The user's ID.
 * @param {string} language - The language for the lesson.
 * @param {number} cardsAmount - The number of cards for the lesson.
 * @param {string} currentDate - The current date in "DD.MM.YYYY" format.
 * @param {string} expiredDate - The date when the lesson expires in "DD.MM.YYYY" format.
 * @param {number} lessonDuration - The duration of the lesson.
 *
 * @returns {Promise<object>} A promise that resolves to the created lesson object.
 *
 * @throws {Error} Throws an error if there is an issue while creating the monthly lesson.
 */
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

    takenCardIDs = shuffledTakenCards; // Распространяем массив takenCards.month
    if (takenCards.month.length < cardsAmount) {
      takenCardIDs = shuffledTakenCards;

      // counting how many cards required
      const additionalCardsNeeded = cardsAmount - takenCards.month.length;
      const additionalCards = await selectRandomCards(additionalCardsNeeded);
      // Flat array of cards
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

/**
 * @module lessonCreation
 * @description Module for creating daily, weekly, and monthly lessons.
 *
 * @exports {function} daily - Function to create daily lessons.
 * @exports {function} weekly - Function to create a weekly lesson.
 * @exports {function} monthly - Function to create a monthly lesson.
 */
module.exports = {
  daily: createLessons,
  weekly: createWeekLesson,
  monthly: createMonthLesson,
};
