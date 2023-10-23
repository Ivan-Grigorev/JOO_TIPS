const Card = require("../../../../models/Card/Card");

/**
 * Retrieves unique card identifiers based on active topics.
 *
 * @async
 * @function getCardsByActiveTopics
 * @param {string[]} activeTopics - An array of active topics.
 * @param {string} language - The language for which to retrieve cards.
 * @param {string[]} allTakenCards - An array of card identifiers that the user has already taken.
 * @returns {Promise<{ cardIDs: string[], findedCards: string[] }>} An object containing card identifiers and information about the found cards.
 * @throws {Error} An error if there was an issue fetching the data or processing the cards.
 */
async function getCardsByActiveTopics(activeTopics, language, allTakenCards) {
  try {
    const cardSet = new Set(); // Create a set for unique cards
    const findedCards = new Set();

    for (const topicObj of activeTopics) {
      if (!topicObj) continue;

      const findCards = await Card.find({ topic: topicObj.title, language }); // Search for cards based on the given topic and language
      findCards.forEach((card) => {
        const cardIdString = card._id.toString();

        // Check if the card is unique
        const isUniqueCard =
          !allTakenCards.includes(cardIdString) && !cardSet.has(cardIdString);

        if (isUniqueCard) {
          cardSet.add(cardIdString);
          findedCards.add(cardIdString);
        }
      });

      console.log(
        "Number of found cards for the topic",
        topicObj,
        ":",
        findedCards.size
      );
    }

    console.log("Total number of found unique cards:", findedCards.size);

    return { cardIDs: [...cardSet], findedCards: [...findedCards] };
  } catch (e) {
    console.error("Error getting cards by user's active topics", e);
    throw e; // Re-throw the error to indicate a problem with fetching or processing the cards
  }
}

module.exports = getCardsByActiveTopics;
