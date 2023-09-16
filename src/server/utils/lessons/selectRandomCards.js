const mongoDB = require("../../db");
const Card = require("../../models/Card/Card");
const Algorithm = require("./Algorithm");

const selectRandomCards = async () => {
  const db = await mongoDB();

  // TODO оптимизировать через Promise.All()
  // беру нужные параметры из тех.коллекций
  const techTopics = await db.collection("topics_to_choose_amount").findOne({});
  const chances = await db.collection("topics_chances").findOne({});

  const topic = `JavaScript Basics: Understanding variables, data types, and functions.`;

  // поиск карточек по заданной теме. Возвращает их _id
  const cardIDs = await Card.find({ topic }, "_id"); //* 100 карточек

  const numToSelect = techTopics.topicsToChoose;

  console.log("Вероятности из базы данных:", chances);

  // const randomCards = await Algorithm(cardIDs, numToSelect, chances);

  // console.log("Выбранные карточки:", randomCards);

  db.close();
};

selectRandomCards();

module.exports = selectRandomCards;
