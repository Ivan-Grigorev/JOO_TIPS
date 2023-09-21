const mongoDB = require("../../db");
const Card = require("../../models/Card/Card");
const Algorithm = require("./Algorithm");
const getAllTakenTopics = require("./getAllTakenTopics");
const getTechProps = require("./getTechProps");

const selectRandomCards = async (userId, language) => {
  const db = await mongoDB();
  try {
    const techProps = await getTechProps(db, language);

    // уже зарезервированные карточки
    const alreadyTakenTopics = await getAllTakenTopics(userId);

    const cardObjects = [];

    // Проходимся по массиву тем, ищем карточки с соответствующими темами
    // Добавляем их в массив cardObjects
    // todo пофиксить. Присутствует 3 темы, а должна только одна.
    for (const obj of techProps.topics) {
      const { topic } = obj;
      const findCards = await Card.find({ topic }); // поиск карточек по заданной теме.
      cardObjects.push(...findCards);
    }

    console.log("Количество найденных карточек:", cardObjects.length);

    if (cardObjects.length === 0) return { cards: null, techProps };

    // Извлекаем _id из объектов карточек и преобразуем их в строки
    const cardIDs = cardObjects.map((card) => card._id.toString());

    const randomCards = Algorithm(cardIDs, techProps.numToSelect);

    return { cards: randomCards, techProps };
  } catch (e) {
    console.error(e);
  }
};

module.exports = selectRandomCards;
