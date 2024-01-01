const chooseRandomEntitiesInArray = require("./chooseRandomEntityInArray");

function getRandomQuestions(cardsQuestions, amount) {
  const randomizedQuestions = new Set();

  for (const cardID in cardsQuestions) {
    if (Object.prototype.hasOwnProperty.call(cardsQuestions, cardID)) {
      const cardQuestions = cardsQuestions[cardID];

      // Выбираем один случайный вопрос из массива
      const randomQuestion = chooseRandomEntitiesInArray(cardQuestions, amount || 1); // prettier-ignore
      randomQuestion.forEach((ent) => randomizedQuestions.add(ent)); // Все рандомные вопросы (1 или несколько) добавляем в сет
    }
  }

  //   console.log("randomizedQuestions".green, randomizedQuestions);

  return [...randomizedQuestions];
}

module.exports = getRandomQuestions;
