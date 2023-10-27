const Card = require("../../../../models/Card/Card");
const getCardProbability = require("./getCardProbability");
const selectRandomCardsByProbability = require("./selectRandomCardsByProbabilitie");
const setTopicProbability = require("./setTopicProbability");

/**
 * Retrieves unique card identifiers based on active topics with different card selection probabilities.
 *
 * @async
 * @function getCardsByActiveTopics
 * @param {[{id: string, title: string, activationDate: string}]} activeTopics - An array of active topics.
 * @param {[{id: string, title: string}]} notActiveTopics - An array of active topics.
 * @param {string} language - The language for which to retrieve cards.
 * @param {string[]} allTakenCards - An array of card identifiers that the user has already taken.
 * @returns {Promise<{ cardIDs: string[], findedCards: string[] }>} An object containing card identifiers and information about the found cards.
 * @throws {Error} An error if there was an issue fetching the data or processing the cards.
 */
async function getCardsByActiveTopics(
  activeTopics,
  notActiveTopics,
  language,
  allTakenCards
) {
  try {
    const cardSet = new Set(); // Create a set for unique cards
    const findedCards = new Set();
    const selectedTopics = new Set(); // Create a set to store selected topics

    // console.log("Total active topics:".yellow, activeTopics.length);
    for (let i = 0; i < activeTopics.length; i++) {
      const topicObj = activeTopics[i];

      if (!topicObj) continue;

      const probability = await setTopicProbability(i);

      console.log(`Topic ${i}: Probability: ${probability}%`.yellow);

      const findCards = await Card.find({ topic: topicObj.title, language }); // Search for cards based on the given topic and language
      console.log(`Number of cards found for topic ${i}: ${findCards.length}`.yellow); // prettier-ignore

      // Calculate the probability of selecting each card within the topic
      const cardProbabilities = getCardProbability(findCards, probability);

      // Randomly select cards based on their probabilities
      selectRandomCardsByProbability(
        findCards,
        findedCards,
        allTakenCards,
        cardProbabilities,
        cardSet,
        selectedTopics,
        topicObj
      );
    }

    // console.log("Total not active topics".yellow, notActiveTopics.length);
    for (let j = 0; j < notActiveTopics.length; j++) {
      const topicObj = notActiveTopics[j];
      const topicStatus = topicObj.status;

      const probability = await setTopicProbability(null, topicStatus);

      // console.log(`Not active topic ${topicObj.id}: Probability: ${probability}%`.yellow); // prettier-ignore

      const findCards = await Card.find({ topic: topicObj.title, language }); // Search for cards based on the given topic and language

      // Calculate the probability of selecting each card within the topic
      const cardProbabilities = getCardProbability(findCards, probability);

      // Randomly select cards based on their probabilities
      selectRandomCardsByProbability(
        findCards,
        findedCards,
        allTakenCards,
        cardProbabilities,
        cardSet,
        selectedTopics,
        topicObj
      );
    }

    // console.log("Total number of found unique cards:".yellow, findedCards.size);
    // console.log("Selected topics:".yellow, selectedTopics);

    return { cardIDs: [...cardSet], findedCards: [...findedCards] };
  } catch (e) {
    console.error("Error getting cards by user's active topics".red, e);
    throw e; // Re-throw the error to indicate a problem with fetching or processing the cards
  }
}

module.exports = getCardsByActiveTopics;
