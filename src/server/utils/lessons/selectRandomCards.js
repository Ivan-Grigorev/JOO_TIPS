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
    const [user, takenCards, topicsList] = await Promise.all([
      User.findById(userId),
      getAllTakenCards(userId, language),
      getTopicsByLanguage(language),
    ]);

    // Находим объект с нужным языком в массиве languages пользователя
    const activeLanguage = user.languages.find((lang) => {
      return lang.language === language;
    });

    // если нет активной темы - устанавливаем первую тему из списка
    const noActiveTopic = activeLanguage.activeTopic === null || !topicsList.includes(activeLanguage.activeTopic); // prettier-ignore
    if (noActiveTopic) {
      const languageToUpdate = user.languages.find((lang) => {
        return lang.language === language;
      });

      languageToUpdate.activeTopic = topicsList.topics[0]; // todo протестировать
      console.log("Changing active topic to default (first topic)");

      await user.save();
    }

    // Получаем активные темы для указанного языка (может быть массивом)
    const activeTopics = [activeLanguage.activeTopic]; // в будущем здесь будет максимум 4 темы

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
    console.error(e);
  }
};

module.exports = selectRandomCards;
