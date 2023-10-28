const Card = require("../../models/Card/Card");
const getTopicsByLanguage = require("./getTechProps/utils/getTopicsByLanguage");

/**
 * Retrieves topics related to a set of cards based on their language and card IDs.
 *
 * @async
 * @function getCardsTopics
 * @param {string} language - The language for which to retrieve topics.
 * @param {string[]} cardID - An array of card IDs to find topics for.
 * @returns {Promise<string[]>} A Promise that resolves once the topics related to the cards are retrieved.
 * @throws {Error} An error if there was an issue fetching the data.
 */
async function getCardsTopics(language, cardID) {
  try {
    // Fetch the list of topics based on the specified language
    const topicsList = await getTopicsByLanguage(language);

    // Create a Set to store unique topics related to the cards
    const cardTopicsRefs = [];

    for (let j = 0; j < cardID.length; j++) {
      // Retrieve card details by ID
      const card = await Card.findById(cardID[j]);

      // Find the corresponding topic ID for the card's topic
      const cardTopicRef = topicsList
        .find((topic) => topic.topicTitle === card.topic)
        ._id.toString();

      // Add the topic reference to the Set
      cardTopicsRefs.push(cardTopicRef);
    }

    return cardTopicsRefs;
  } catch (e) {
    // Handle and log any errors that may occur
    console.error(e);
  }
}

module.exports = getCardsTopics;
