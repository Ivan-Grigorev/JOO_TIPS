const mongoDB = require("../../db");
const Card = require("../../models/Card/Card");
const Algorithm = require("./Algorithm");

const getTechProps = async (db, language) => {
  try {
    // TODO оптимизировать через Promise.All()

    // беру из тех.коллекции количество тем
    const techTopics = await db
      .collection("topics_to_choose_amount")
      .findOne({});

    // беру из тех.коллекции шансы появления тех или иных карточек
    const chances = await db.collection("topics_chances").findOne({});
    // console.log("Вероятности из базы данных:", chances);

    // беру значение из объекта
    const numToSelect = techTopics.topicsToChoose;

    // получаю список тем из динамической коллекции (обновляется при парсинге)
    const topics = await db
      .collection("topics_list")
      .find({ language })
      .toArray();

    return { topics, numToSelect, chances };
  } catch (e) {
    console.error(e);
  }
};

const selectRandomCards = async () => {
  const db = await mongoDB();
  try {
    const techProps = await getTechProps(db, "javascript");

    const cardObjects = [];

    console.log(techProps.topics);

    // проходимся по массиву тем, ищем карточки с соответствующими темами
    // добавляем их в массив cardObjects
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
    return;
  } catch (e) {
    console.error(e);
  } finally {
    db.close();
  }
};

selectRandomCards();

module.exports = selectRandomCards;

// Ваша функция Algorithm остается неизменной, так как она корректно обрабатывает вероятности.
