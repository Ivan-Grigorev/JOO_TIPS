const Lesson = require("../../models/lessons/lessons");
const moment = require("moment");

// todo добавить язык по которому идёт поиск
async function getTakenCards(userId) {
  try {
    // Находим все уроки и выбираем только поле "cards"
    const lessons = await Lesson.find({ userId }, "cards");

    // Создаем массивы для хранения всех ссылок на карточки
    const allTakenCardsIDs = [];
    const weekTakenCardsIDs = [];
    const monthTakenCardsIDs = [];

    // Получаем текущую дату
    const currentDate = moment();

    // Извлекаем ссылки на карточки из каждого урока и добавляем их в соответствующие массивы
    lessons.forEach((lesson) => {
      allTakenCardsIDs.push(...lesson.cards);

      // Проверяем, был ли урок за неделю
      const lessonInWeek = moment(lesson.lessonDate).isSameOrAfter(currentDate.clone().subtract(7, "days")); // prettier-ignore
      if (lessonInWeek) weekTakenCardsIDs.push(...lesson.cards);

      // Проверяем, был ли урок за месяц
      const lessonInMonth = moment(lesson.lessonDate).isSameOrAfter(currentDate.clone().subtract(1, "months")); // prettier-ignore
      if (lessonInMonth) monthTakenCardsIDs.push(...lesson.cards);
    });

    return {
      all: allTakenCardsIDs,
      week: weekTakenCardsIDs,
      month: monthTakenCardsIDs,
    };
  } catch (error) {
    console.error("Error fetching lessons:", error);
    throw error;
  }
}

module.exports = getTakenCards;
