const Lesson = require("../../models/lessons/lessons");
const selectRandomCards = require("./selectRandomCards");
const getAllTakenCards = require("../../utils/lessons/getAllTakenCards");
const Algorithm = require("./Algorithm");

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

module.exports = {
  daily: createLessons,
  weekly: createWeekLesson,
  monthly: createMonthLesson,
};
