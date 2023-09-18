const mongoDB = require("../../db");
const Card = require("../../models/Card/Card");
const Algorithm = require("./Algorithm");
const getTechProps = require("./getTechProps");

const selectRandomCards = async (language) => {
  const db = await mongoDB();
  try {
    const techProps = await getTechProps(db, language);

    const cardObjects = [];

    // Проходимся по массиву тем, ищем карточки с соответствующими темами
    // Добавляем их в массив cardObjects
    for (const obj of techProps.topics) {
      const { topic } = obj;
      const findCards = await Card.find({ topic }); // поиск карточек по заданной теме.
      cardObjects.push(...findCards);
    }

    console.log("Количество найденных карточек:", cardObjects.length);

    // Извлекаем _id из объектов карточек и преобразуем их в строки
    const cardIDs = cardObjects.map((card) => card._id.toString());

    // Вызов функции Algorithm с правильными аргументами
    const randomCards = Algorithm(cardIDs, techProps.numToSelect);

    console.log("Выбранные карточки:", randomCards);
    return randomCards;
  } catch (e) {
    console.error(e);
  } finally {
    db.close();
  }
};

selectRandomCards("javascript");

module.exports = selectRandomCards;

// Ваша функция Algorithm остается неизменной, так как она корректно обрабатывает вероятности.
