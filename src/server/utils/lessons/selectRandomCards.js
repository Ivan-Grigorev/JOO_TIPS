const mongoDB = require("../../db");
const Card = require("../../models/Card/Card");
const User = require("../../models/user/user");
const Algorithm = require("./Algorithm");
const getAllTakenCards = require("./getAllTakenCards");
const getTechProps = require("./getTechProps");

const selectRandomCards = async (userId, language) => {
  const db = await mongoDB();
  try {
    const [techProps, user, takenCards] = await Promise.all([
      getTechProps(db, language),
      User.findById(userId),
      getAllTakenCards(userId),
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

      languageToUpdate.activeTopic = techProps.topics[0].topic;

      await user.save();
    }

    // Получаем активные темы для указанного языка (может быть массивом)
    const activeTopics = [activeLanguage.activeTopic];

    const cardIDs = [];

    // Проходимся по массиву тем, ищем карточки с соответствующими темами
    // Добавляем их в массив cardIDs
    for (const topic of activeTopics) {
      const findCards = await Card.find({ topic }); // поиск карточек по заданной теме.
      const cardIDsToAdd = findCards // проверка на уникальность тем
        .filter((card) => !takenCards.all.includes(card._id.toString()))
        .map((card) => card._id.toString());

      cardIDs.push(...cardIDsToAdd);
    }

    console.log("Количество найденных карточек:", cardIDs.length);

    if (cardIDs.length === 0) return { cards: null, techProps };

    const randomCards = Algorithm(cardIDs, techProps.cardsAmount);

    return { cards: randomCards, techProps, takenCards };
  } catch (e) {
    console.error(e);
  }
};

module.exports = selectRandomCards;
