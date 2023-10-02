const Lesson = require("../../models/lessons/lessons");
const Algorithm = require("./Algorithm/Algorithm");
const selectRandomCards = require("./selectRandomCards");
const getAllTakenCards = require("../../utils/lessons/getAllTakenCards");
require("colors");
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
    console.log("Creating daily lessons".blue);

    const { randomCards: cards } = await selectRandomCards(
      userId,
      language,
      cardsAmount
    );

    const lessonsToCreate = [];
    if (daysRemaining === 0 || daysRemaining === -1) return [];

    const usedCardIDs = new Set(); // Для отслеживания использованных карточек

    // Create lessons for each day until Saturday
    for (let i = 0; i < daysRemaining; i++) {
      const uniqueCards = new Set();

      const today = currentDate.clone().add(i, "days");

      const formattedDay = today.format("DD.MM.YYYY");
      const formattedEndOfMonth = today.endOf("month").format("DD.MM.YYYY");
      const todayIsEndOfMonth = formattedDay === formattedEndOfMonth;

      // Add a check for the end of the month
      if (todayIsEndOfMonth) {
        console.log(
          `Skipping lesson creation for ${formattedDay} because it's the end of the month`
            .yellow
        );
        continue; // Skip the iteration and do not create a lesson
      }

      // Select random unique cards (until the desired number is reached)
      while (uniqueCards.size < cardsAmount) {
        const randomIndex = Math.floor(Math.random() * cards.length);
        const cardID = cards[randomIndex];

        // Проверяем, что карточка ещё не использовалась
        if (!usedCardIDs.has(cardID)) {
          uniqueCards.add(cardID);
          usedCardIDs.add(cardID); // Добавляем в использованные карточки
        }
      }

      const expiredDate = today
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
        lessonDate: formattedDay,
        lessonDuration,
        expired: expiredDate.format("DD.MM.YYYY HH:mm"),
      };

      lessonsToCreate.push(lesson);
    }

    console.log(lessonsToCreate.length + " lessons have been created".green);

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
    console.log("Creating week lesson".blue);

    const takenCards = await getAllTakenCards(userId, language);
    const shuffledTakenCards = Algorithm(takenCards.week, cardsAmount);

    let takenCardIDs = [];

    takenCardIDs = shuffledTakenCards;
    // Вычисляем, сколько дополнительных карт нужно для cardsAmount
    const additionalCardsNeeded = cardsAmount - takenCards.week.length;
    console.log(`additionalCardsNeeded - ${additionalCardsNeeded}`.red);

    if (additionalCardsNeeded > 0) {
      // Вызываем функцию selectRandomCards, чтобы получить дополнительные карты
      const additionalCards = await selectRandomCards(
        userId,
        language,
        additionalCardsNeeded
      );

      // Разглаживаем массивы и добавляем дополнительные карты
      takenCardIDs.push(...additionalCards.randomCards.flat());
    }

    const uniqueCards = new Set();

    // Select random unique cards (until the desired number is reached)
    while (uniqueCards.size < cardsAmount) {
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
    console.log("Week lesson have been created.".blue);
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
    console.log("Creating month lesson".blue);

    const takenCards = await getAllTakenCards(userId, language);
    const shuffledTakenCards = Algorithm(takenCards.month, cardsAmount);

    let takenCardIDs = [];

    takenCardIDs = shuffledTakenCards;

    const additionalCardsNeeded = cardsAmount - takenCards.month.length;

    if (additionalCardsNeeded > 0) {
      const additionalCards = await selectRandomCards(
        userId,
        language,
        additionalCardsNeeded
      );

      // Разглаживаем массивы и добавляем дополнительные карты
      takenCardIDs.push(...additionalCards.randomCards.flat());
    }

    const uniqueCards = new Set();

    // Select random unique cards (until the desired number is reached)
    while (uniqueCards.size < cardsAmount) {
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

    console.log("Month lesson has been created".blue);
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
