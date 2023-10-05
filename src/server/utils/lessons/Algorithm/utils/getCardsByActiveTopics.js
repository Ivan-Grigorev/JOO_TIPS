const Card = require("../../../../models/Card/Card");

/**
 * Retrieves unique card identifiers based on active topics.
 *
 * @async
 * @function getCardsByActiveTopics
 * @param {string[]} activeTopics - An array of active topics.
 * @param {string[]} allTakenCards - An array of card identifiers that the user has already taken.
 * @returns {Promise<{ cardIDs: {ref: string, topic: string,}[], findedCards: { topic: string, foundAmount: number, totalAmount: number }[] }>} An object containing card identifiers and information about the found cards.
 * @throws {Error} An error if there was an issue fetching the data or processing the cards.
 */
async function getCardsByActiveTopics(activeTopics, language, allTakenCards) {
  try {
    const cardSet = new Set(); // Создаем сет для уникальных карточек
    const findedCards = [];

    for (const topic of activeTopics) {
      if (!topic) continue;
      /* 
       console.log(`topic - ${topic}`.blue);
      console.log(`language - ${language}`.blue);
      */
      const findCards = await Card.find({ topic, language }); // Поиск карточек по заданной теме
      findCards.forEach((card) => {
        const cardIdString = card._id.toString();

        // Проверка на уникальность карточки
        const isUniqueCard =!allTakenCards.includes(cardIdString) && !cardSet.has(cardIdString); // prettier-ignore

        if (isUniqueCard) {
          cardSet.add(cardIdString);
          findedCards.push({
            ref: cardIdString,
            topic: card.topic,
          });
        }
      });

      console.log(`Количество найденных карточек по теме "${topic}": ${findedCards.length}`); // prettier-ignore
    }

    console.log("Общее количество найденных уникальных карточек:", findedCards.length); // prettier-ignore

    return { cardIDs: [...cardSet], findedCards };
  } catch (e) {
    console.error("Error getting cards by user's active topics", e);
  }
}

module.exports = getCardsByActiveTopics;
