/**
 * Get the count of cards by topics.
 *Эта функция получает объект `languageObject`, представляющий информацию о языковых темах и статусах карт для этих тем.
 * @returns {{n: Number, n+1: Number ,n+2: Number, n+3: Number}} - An Object with counts for each topic.
 * @throws {Error} If there is an error while fetching the counts.
 */

function getCardsCountByTopics(languageObject) {
  try {
    const activeTopics = languageObject.activeTopicsRefs; // Извлекаем массив активных тем из объекта `languageObject`
    const topicStatuses = languageObject.topicStatuses; // Извлекаем объект статусов тем из объекта `languageObject`

    // Создаем пустой объект для хранения количества карт по темам
    const counts = {};

    // Начинаем итерацию по активным темам
    for (let i = 0; i < activeTopics.length; i++) {
      // Создаем массив строк (refs) для активных тем
      const activeTopicsRefsArray = activeTopics.map((obj) => {
        return obj.ref.toString();
      });

      // Оставляем только статусы активных тем
      const topicsObjects = topicStatuses.filter((obj) => {
        return activeTopicsRefsArray.includes(obj.topicRef.toString());
      });

      // Начинаем итерацию по активным темам
      for (let j = 0; j < topicsObjects.length; j++) {
        const topicObject = topicsObjects[j];
        const { viewStatus, cardViewStatus } = topicObject;
        const { firstViewed, secondViewed, thirdViewed, fourthViewed } =
          cardViewStatus;

        let count = null;

        // Определяем количество карт на основе статуса их просмотренности
        switch (viewStatus) {
          case 1:
            count = firstViewed.length;
            break;
          case 2:
            count = secondViewed.length;
            break;
          case 3:
            count = thirdViewed.length;
            break;
          case 4:
            count = fourthViewed.length;
            break;
          default:
            count = 0;
            break;
        }

        // Генерируем номер темы в формате "n1", "n2", и т.д.
        const topicNumber = i === 0 ? "" : `+${i}`;

        // Сохраняем результат в объекте `counts` с ключами вида "n1", "n2", и т.д.
        counts[`n${topicNumber}`] = count;
      }
    }

    // Возвращаем объект `counts` с количеством карт по темам
    return counts;
  } catch (e) {
    console.error("Error getting cards count by topics", e);
    throw new Error("Error getting cards count by topics", e);
  }
}

module.exports = getCardsCountByTopics;
