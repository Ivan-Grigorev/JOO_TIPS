// function Algorithm(cardIDs, numToSelect, chances = {}) {
//   // Вычисляем общий шанс, суммируя шансы для каждой карты (или используем шанс 1, если он не задан)
//   const totalChance = cardIDs.reduce((sum, id) => sum + (chances[id] || 1), 0);
//   const standardChance = 1 / cardIDs.length; // Стандартный шанс для каждой карты

//   // Создаем массив вероятностей для каждой карты на основе их шансов
//   const probabilities = cardIDs.map(
//     (id) => ((chances[id] || 1) * standardChance) / totalChance
//   );

//   // Создаем массив накопленных вероятностей для удобства выбора ID на основе их вероятности
//   const cumulativeProbabilities = probabilities.reduce((arr, prob) => {
//     arr.push((arr[arr.length - 1] || 0) + prob);
//     return arr;
//   }, []);

//   // Выбираем numToSelect случайных ID на основе их вероятности
//   const selectedIDs = [];
//   for (let i = 0; i < numToSelect; i++) {
//     const random = Math.random(); // Генерируем случайное число от 0 до 1
//     const selectedIndex = cumulativeProbabilities.findIndex(
//       (prob) => prob > random
//     ); // Находим индекс выбранной карты на основе вероятности
//     selectedIDs.push(cardIDs[selectedIndex]); // Добавляем выбранную карту в результат
//   }

//   return selectedIDs; // Возвращаем массив выбранных карт
// }

const moment = require("moment");

function Algorithm(arrayOfIDs, numToSelect, chances = {}) {
  // Получаем текущую дату
  const currentDate = moment();

  // Определяем текущий день недели (0 - Воскресенье, 1 - Понедельник, и т.д.)
  const currentDayOfWeek = currentDate.day();

  // Рассчитываем количество карт, которое нужно вернуть
  let numToReturn = 0;

  // Рассчитываем количество дней до субботы (7 дней недели - воскресенье)
  // TODO протестировать во вторник, возможно неверно работает
  const daysBeforeSaturday = 7 - currentDayOfWeek;

  if (daysBeforeSaturday > 0) {
    // Если до субботы ещё есть дни, то рассчитываем количество карт
    numToReturn = numToSelect * daysBeforeSaturday;
  }

  const selectedIDs = [];
  const shuffledIDs = [...arrayOfIDs]; // Создаем копию массива для перемешивания

  // Перемешиваем массив случайным образом
  for (let i = shuffledIDs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledIDs[i], shuffledIDs[j]] = [shuffledIDs[j], shuffledIDs[i]];
  }

  // Выбираем первые numToReturn элементов (они теперь случайны)
  for (let i = 0; i < numToReturn; i++) selectedIDs.push(shuffledIDs[i]);

  return selectedIDs;
}

module.exports = Algorithm;
