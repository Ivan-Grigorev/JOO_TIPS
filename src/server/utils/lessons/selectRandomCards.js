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

    // если в массиве есть тема, которой не существует в общем массиве тем - вернёт true
    const invalidTopic = !activeLanguage.activeTopics.every((topic) =>
      topicsList.includes(topic)
    );
    const noActiveTopic = activeLanguage.activeTopics.length === 0;

    if (noActiveTopic || invalidTopic) {
      if (invalidTopic) {
        console.log("Invalid topic in active topics array".yellow);
        console.log("Deleting invalid topic.".yellow);
        activeLanguage.activeTopics = activeLanguage.activeTopics.filter(
          (topic) => topicsList.includes(topic)
        ); // deleting invalid topic from the array
      }
      if (noActiveTopic) {
        console.log("No active topic".yellow);
        console.log(`Changing active topic to default (${topicsList[0].slice(10)}...)`.yellow); // prettier-ignore
        activeLanguage.activeTopics = [topicsList[0]]; // Установка первой темы как активной
      }

      await user.save();
    }

    // Получаем активные темы для указанного языка (может быть массивом)
    const activeTopics = [activeLanguage.activeTopics]; // в будущем здесь будет максимум 4 темы

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
