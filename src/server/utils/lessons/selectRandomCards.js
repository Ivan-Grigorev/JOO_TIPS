const Card = require("../../models/Card/Card");
const User = require("../../models/user/user");
const Algorithm = require("./Algorithm/Algorithm");
const getAllTakenCards = require("./getAllTakenCards");
const getTopicsByLanguage = require("./getTechProps/utils/getTopicsByLanguage");

const selectRandomCards = async (userId, language, cardsAmount) => {
  try {
    const [user, takenCards, topicsList] = await Promise.all([
      User.findById(userId),
      getAllTakenCards(userId),
      getTopicsByLanguage(language),
    ]);

    // Находим объект с нужным языком в массиве languages пользователя
    const activeLanguage = user.languages.find((lang) => {
      return lang.language === language;
    });

    // если нет активной темы - устанавливаем первую тему из списка
    const noActiveTopic = activeLanguage.activeTopic === null || !activeLanguage.activeTopic; // prettier-ignore
    if (noActiveTopic) {
      const languageToUpdate = user.languages.find((lang) => {
        return lang.language === language;
      });

      languageToUpdate.activeTopic = topicsList[0].topic;

      await user.save();
    }

    // Получаем активные темы для указанного языка (может быть массивом)
    const activeTopics = [activeLanguage.activeTopic]; // в будущем здесь будет максимум 4 темы

    const cardIDs = [];

    // Проходимся по массиву тем, ищем уникальные карточки с соответствующими темами
    // Добавляем их в массив cardIDs
    for (const topic of activeTopics) {
      const findCards = await Card.find({ topic }); // поиск карточек по заданной теме.
      const cardIDsToAdd = findCards // проверка на уникальность тем
        .filter((card) => !takenCards.all.includes(card._id.toString()))
        .map((card) => card._id.toString());

      cardIDs.push(...cardIDsToAdd);
    }

    console.log("Количество найденных карточек:", cardIDs.length);

    if (cardIDs.length === 0) return { cards: null };

    const randomCards = Algorithm(cardIDs, cardsAmount);

    return { cards: randomCards, takenCards };
  } catch (e) {
    console.error(e);
  }
};

module.exports = selectRandomCards;
