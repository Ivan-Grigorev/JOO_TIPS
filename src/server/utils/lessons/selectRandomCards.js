const LanguagesList = require("../../models/Tech/LanguagesList");
const User = require("../../models/user/user");
const Algorithm = require("./Algorithm/Algorithm");
const getCardsByActiveTopics = require("./Algorithm/utils/getCardsByActiveTopics");
const getAllTakenCards = require("./getAllTakenCards");
const getTopicsByLanguage = require("./getTechProps/utils/getTopicsByLanguage");

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
    const [user, takenCards, topicsList, languagesList] = await Promise.all([
      User.findById(userId),
      getAllTakenCards(userId, language),
      getTopicsByLanguage(language),
      LanguagesList.findOne({}),
    ]);

    // Находим объект с нужным языком в массиве languages пользователя
    const activeLanguage = user.languages.find((lang) => {
      return lang.language === language;
    });

    /*
    console.log("languagesList".red);
    console.log(languagesList);
    console.log(`language - ${language}`.red);
    */

    const languageRef = languagesList.languages.find((obj) => {
      return obj.language === language;
    })._id;

    console.log(`languageRef - ${languageRef.toString()}`.red);

    const activeTopics = [activeLanguage.activeTopics]; // В будущем здесь будет максимум 4 темы

    const { cardIDs, findedCards } = await getCardsByActiveTopics(
      activeTopics,
      takenCards.all
    );

    if (!cardIDs) return { randomCards: [] };

    const randomCards = Algorithm(cardIDs, cardsAmount);

    return {
      randomCards: randomCards,
      takenCards,
      findedCards,
    };
  } catch (e) {
    console.error(e.message);
  }
};

module.exports = selectRandomCards;
