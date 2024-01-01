const getCardQuestions = require("./getCardQuestions");

/**
 * Retrieves questions for lesson cards based on their IDs.
 * @param {Array<string>} lessonCardsIDsArray - Array of lesson card IDs.
 * @returns {Promise<object>} - Promise resolving to an object containing card IDs as keys and arrays of questions as values.
 */
async function getQuestionsForLessonCards(lessonCardsIDsArray) {
  const cardsQuestions = {};

  for (const cardID of lessonCardsIDsArray) {
    // Получаем вопросы для каждой карты по её ID
    const cardQuestions = await getCardQuestions(cardID);

    // Преобразуем вопросы в массив строк и сохраняем в объекте cardsQuestions
    const cardArray = cardQuestions.map((question) => question.toString());
    cardsQuestions[cardID] = cardArray;
  }
  return cardsQuestions; // Возвращаем объект с вопросами для каждой карты
}

module.exports = getQuestionsForLessonCards;
