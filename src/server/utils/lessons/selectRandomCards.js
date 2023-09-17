const mongoDB = require("../../db");
const Card = require("../../models/Card/Card");
const Algorithm = require("./Algorithm");

const selectRandomCards = async (topics) => {
  const db = await mongoDB();
  try {
    // TODO оптимизировать через Promise.All()

    const techTopics = await db
      .collection("topics_to_choose_amount")
      .findOne({}); // беру из тех.коллекции количество тем
    const chances = await db.collection("topics_chances").findOne({}); // беру из тех.коллекции шансы появления тех или иных карточек

    console.log("Вероятности из базы данных:", chances);
    const numToSelect = techTopics.topicsToChoose; // беру значение из объекта

    const cardObjects = [];

    // проходимся по массиву тем, ищем карточки с соответствующими темами
    // добавляем их в массив cardObjects
    for (const topic of topics) {
      const findCards = await Card.find({ topic }); // поиск карточек по заданной теме.
      cardObjects.push(...findCards);
    }
    console.log("Количество найденных карточек:", cardObjects.length);

    // Извлекаем _id из объектов карточек и преобразуем их в строки
    const cardIDs = cardObjects.map((card) => card._id.toString());

    // Вызов функции Algorithm с правильными аргументами
    const randomCards = Algorithm(cardIDs, numToSelect);

    console.log("Выбранные карточки:", randomCards);
  } catch (e) {
    console.error(e);
  } finally {
    db.close();
  }
};

const topics = [
  "JavaScript Basics: Understanding variables, data types, and functions.",
];
selectRandomCards(topics);

module.exports = selectRandomCards;

// Ваша функция Algorithm остается неизменной, так как она корректно обрабатывает вероятности.
