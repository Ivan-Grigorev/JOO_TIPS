const Card = require("../../../../models/Card/Card");

/**
 * Retrieves unique card identifiers based on active topics with different card selection probabilities.
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
    const selectedTopics = []; // Create an array to store selected topics

    console.log("Total active topics:".yellow, activeTopics.length);
    for (let i = 0; i < activeTopics.length; i++) {
      const topicObj = activeTopics[i];

      if (!topicObj) continue;

      // Calculate the probability for this topic (adjust as needed)
      let probability;
      if (i === 0) {
        probability = 100; // 100% probability for the first topic
      } else if (i === 1) {
        probability = 75; // 75% probability for the second topic
      } else if (i === 2) {
        probability = 50; // 50% probability for the third topic
      } else {
        probability = 0; // 0% probability for other topics
      }

      console.log(`Topic ${i}: Probability: ${probability}%`.yellow);

      const findCards = await Card.find({ topic: topicObj.title, language }); // Search for cards based on the given topic and language
      console.log(`Number of cards found for topic ${i}: ${findCards.length}`.yellow);

      // Calculate the probability of selecting each card within the topic
      const cardProbabilities = findCards.map(
        () => probability / findCards.length
      );

      // Randomly select cards based on their probabilities
      findCards.forEach((card, index) => {
        const cardIdString = card._id.toString();

        // Check if the card is unique
        const isUniqueCard = !allTakenCards.includes(cardIdString) && !cardSet.has(cardIdString); // prettier-ignore

        if (isUniqueCard && Math.random() <= cardProbabilities[index]) {
          cardSet.add(cardIdString);
          findedCards.add(cardIdString);

          if (!selectedTopics.includes(topicObj.title)) {
            selectedTopics.push(topicObj.title);
          }
        }
      });
    }

    console.log("Total number of found unique cards:".yellow, findedCards.size);
    console.log("Selected topics:".yellow, selectedTopics);

    return { cardIDs: [...cardSet], findedCards: [...findedCards] };
  } catch (e) {
    console.error("Error getting cards by user's active topics".red, e);
    throw e; // Re-throw the error to indicate a problem with fetching or processing the cards
  }
}

module.exports = getCardsByActiveTopics;
