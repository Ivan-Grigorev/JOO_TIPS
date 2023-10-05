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

    /*
    console.log("languagesList".red);
    console.log(languagesList);e
    console.log(`language - ${language}`.red);
    console.log('activeLanguage'.red)
    console.log(activeLanguage)
    */

    const languageRef = languagesList.languages.find((obj) => {
      return obj.language === language;
    })._id;

    const userLanguageObject = user.languages.find((obj) => {
      return obj.languageRef.toString() === languageRef.toString();
    });

    const activeTopicRefs = userLanguageObject.activeTopicsRefs;

    // Находим темы по их идентификаторам
    const activeTopics = activeTopicRefs.map((topicRef) => {
      // Берём из объекта пользователя реф на тему
      return topicsList.find((topic) => {
        // Ищем по рефу нужный нам объект в списке тем
        return topic._id.toString() === topicRef.toString();
      });
    });

    const activeTopicsTitles = [
      activeTopics[0]?.topicTitle,
      activeTopics[1]?.topicTitle,
      activeTopics[2]?.topicTitle,
      activeTopics[3]?.topicTitle,
    ];

    const { cardIDs, findedCards } = await getCardsByActiveTopics(
      activeTopicsTitles,
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
