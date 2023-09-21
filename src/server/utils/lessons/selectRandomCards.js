const mongoDB = require("../../db");
const Card = require("../../models/Card/Card");
const User = require("../../models/user/user");
const Algorithm = require("./Algorithm");
const getAllTakenTopics = require("./getAllTakenTopics");
const getTechProps = require("./getTechProps");

const selectRandomCards = async (userId, language) => {
  const db = await mongoDB();
  try {
    const techPropsPromise = getTechProps(db, language);
    const userPromise = User.findById(userId);

    // Ожидаем выполнения обоих запросов
    const [techProps, user] = await Promise.all([
      techPropsPromise,
      userPromise,
    ]);

    // уже зарезервированные карточки
    // todo
    const alreadyTakenTopics = await getAllTakenTopics(userId);

    // Находим объект с нужным языком в массиве languages пользователя
    const activeLanguage = user.languages.find((lang) => {
      return lang.language === language;
    });

    // если нет активной темы - устанавливаем первую тему из списка
    if (activeLanguage.activeTopic === null || !activeLanguage.activeTopic) {
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
    // todo пофиксить. Присутствует 3 темы, а должна только одна.
    for (const topic of activeTopics) {
      const findCards = await Card.find({ topic }); // поиск карточек по заданной теме.
      cardIDs.push(...findCards.map((card) => card._id.toString()));
    }

    console.log("Количество найденных карточек:", cardIDs.length);

    if (cardIDs.length === 0) return { cards: null, techProps };

    const randomCards = Algorithm(cardIDs, techProps.numToSelect);

    return { cards: randomCards, techProps };
  } catch (e) {
    console.error(e);
  }
};

module.exports = selectRandomCards;
