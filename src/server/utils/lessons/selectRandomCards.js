const mongoDB = require("../../db");
const Algorithm = require("./Algorithm");

const selectRandomCards = async () => {
  const db = await mongoDB();

  const techTopics = await db.collection("topics_to_choose_amount").findOne({});
  const techChances = await db.collection("topics_chances").findOne({});
  const cardIDs = null;

  const numToSelect = techTopics.topicsToChoose;
  const chances = {};

  console.log(techChances);

  // const randomCards = await Algorithm(cardIDs, numToSelect, chances);

  // console.log(randomCards);
};

selectRandomCards();

module.exports = selectRandomCards;
