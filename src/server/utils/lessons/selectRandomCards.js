const User = require("../../models/user/user");
const Algorithm = require("./Algorithm/Algorithm");
const getCardsByActiveTopics = require("./Algorithm/utils/getCardsByActiveTopics");
const getTakenCards = require("./getTakenCards");
const getUserLanguagesInfo = require("./getUserLanguagesInfo");

/**
 * Selects a random set of cards for a user based on their language and topics.
 *
 * @async
 * @function selectRandomCards
 * @param {string} userId - The user's identifier.
 * @param {string} language - The user's selected language.
 * @param {number} cardsAmount - The number of random cards to select.
 * @returns {Promise<{ randomCards: string[] | null, takenCards: string[], foundCards: { topic: string, foundAmount: number, totalAmount: number }[] }>} An object containing the selected cards and additional information.
 * @throws {Error} An error if there was an issue fetching the data or selecting cards.
 */
const selectRandomCards = async (userId, language, cardsAmount) => {
  try {
    const user = await User.findById(userId);

    const userLanguagesInfo = await getUserLanguagesInfo(user);

    const takenCards = await getTakenCards(
      userId,
      userLanguagesInfo.userLanguageObject,
      language
    );

    // console.log("userLanguagesInfo".red, userLanguagesInfo);

    const { cardIDs, findedCards } = await getCardsByActiveTopics(
      userLanguagesInfo.activeTopicsTitles,
      language,
      takenCards.all
    );

    // console.log({ cardIDs, findedCards });

    if (!cardIDs) return { randomCards: [] };

    const randomCards = Algorithm(cardIDs, cardsAmount);

    return {
      randomCards: randomCards,
      takenCards,
      findedCards,
    };
  } catch (e) {
    // console.error(e.message);
    throw new Error("Error generating random cards.", e.message);
  }
};

module.exports = selectRandomCards;
