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

/**
 * A function that calculates and returns a selection of unique card IDs based on the current day of the week and other parameters.
 *
 * @param {Array} arrayOfIDs - An array of card IDs to choose from.
 * @param {number} cardsAmount - The total number of cards to return.
 * @returns {Array} - An array of random selected unique card IDs.
 */
function Algorithm(arrayOfIDs, cardsAmount) {
  const currentDate = moment();
  const currentDayOfWeek = currentDate.day();

  // Calculate the number of days until Sunday (7 days in a week - current day + 1)
  const daysUntilSunday = 7 - currentDayOfWeek;

  // Calculate the maximum number of cards that can be returned
  const maxNumToReturn = daysUntilSunday * cardsAmount;

  // Create a Set to ensure unique values
  const selectedIDsSet = new Set();

  // Shuffle the array and add unique values to the Set
  const shuffledIDs = [...arrayOfIDs].sort(() => Math.random() - 0.5);

  for (const id of shuffledIDs) {
    if (selectedIDsSet.size >= maxNumToReturn) break; // Stop if we reach the desired number of unique values
    selectedIDsSet.add(id);
  }

  // Convert the Set back to an array
  const selectedIDs = Array.from(selectedIDsSet);

  console.log(selectedIDs.length);

  return selectedIDs;
}

module.exports = Algorithm;
