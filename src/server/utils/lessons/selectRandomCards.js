const mongoDB = require("../../db");
const Card = require("../../models/Card/Card");
const Algorithm = require("./Algorithm");

const selectRandomCards = async (topics) => {
  const db = await mongoDB();
  try {
    // TODO оптимизировать через Promise.All()
    // беру нужные параметры из тех.коллекций
    const techTopics = await db
      .collection("topics_to_choose_amount")
      .findOne({});
    const chances = await db.collection("topics_chances").findOne({});

    console.log("Вероятности из базы данных:", chances);
    const numToSelect = techTopics.topicsToChoose;

    const cardIDs = [];

    // проходимся по массиву тем, ищем карточки с соответствующими темами
    // добавляем их в массив allCardIDs
    for (const topic of topics) {
      const findCards = await Card.find({ topic }, "_id"); // поиск карточек по заданной теме. Возвращает их _id
      cardIDs.push(...findCards);
    }
    console.log("ID's найденных карточек:", cardIDs);

    // const randomCards = await Algorithm(cardIDs, numToSelect, chances);

    // console.log("Выбранные карточки:", randomCards);
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
