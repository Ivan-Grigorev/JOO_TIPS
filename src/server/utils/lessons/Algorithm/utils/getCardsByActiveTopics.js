const Card = require("../../../../models/Card/Card");

/**
 * Retrieves unique card identifiers based on active topics.
 *
 * @async
 * @function getCardsByActiveTopics
 * @param {string[]} activeTopics - An array of active topics.
 * @param {string[]} allTakenCards - An array of card identifiers that the user has already taken.
 * @returns {Promise<{ cardIDs: string[], findedCards: { topic: string, foundAmount: number, totalAmount: number }[] }>} An object containing card identifiers and information about the found cards.
 * @throws {Error} An error if there was an issue fetching the data or processing the cards.
 */
async function getCardsByActiveTopics(activeTopics, allTakenCards) {
  try {
    const cardIDs = [];
    const findedCards = [];

    // Проходимся по массиву тем, ищем уникальные карточки с соответствующими темами
    // Добавляем их в массив cardIDs
    for (const topic of activeTopics) {
      const findCards = await Card.find({ topic }); // поиск карточек по заданной теме.
      const cardIDsToAdd = findCards // проверка на уникальность тем
        .filter((card) => !allTakenCards.includes(card._id.toString()))
        .map((card) => {
          return { ref: card._id.toString(), topic: card.topic };
        });

      cardIDs.push(...cardIDsToAdd);
      findedCards.push({
        topic,
        findedAmount: cardIDs.length,
        totalAmount: findCards.length,
      });
    }

    console.log("Количество найденных карточек:", cardIDs.length);

    return { cardIDs, findedCards };
  } catch (e) {
    console.error("Error getting cards by user's active topics", e);
  }
}

module.exports = getCardsByActiveTopics;
