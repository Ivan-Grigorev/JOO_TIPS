const Lesson = require("../../models/lessons/lessons");

async function getAllTakenCards(userId) {
  try {
    // Находим все уроки и выбираем только поле "cards"
    const lessons = await Lesson.find({ userId }, "cards");

    // Создаем массив для хранения всех ссылок на карточки
    const takenCardsIDs = [];

    // Извлекаем ссылки на карточки из каждого урока и добавляем их в массив
    lessons.forEach((lesson) => takenCardsIDs.push(...lesson.cards));

    // console.log(allCards);
    return takenCardsIDs;
  } catch (error) {
    console.error("Error fetching lessons:", error);
    throw error;
  }
}

module.exports = getAllTakenCards;
