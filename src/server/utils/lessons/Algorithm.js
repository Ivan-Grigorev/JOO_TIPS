function Algorithm(cardIDs, numToSelect, chances = {}) {
  // Вычисляем общий шанс, суммируя шансы для каждой карты (или используем шанс 1, если он не задан)
  const totalChance = cardIDs.reduce((sum, id) => sum + (chances[id] || 1), 0);
  const standardChance = 1 / cardIDs.length; // Стандартный шанс для каждой карты

  // Создаем массив вероятностей для каждой карты на основе их шансов
  const probabilities = cardIDs.map(
    (id) => ((chances[id] || 1) * standardChance) / totalChance
  );

  // Создаем массив накопленных вероятностей для удобства выбора ID на основе их вероятности
  const cumulativeProbabilities = probabilities.reduce((arr, prob) => {
    arr.push((arr[arr.length - 1] || 0) + prob);
    return arr;
  }, []);

  // Выбираем numToSelect случайных ID на основе их вероятности
  const selectedIDs = [];
  for (let i = 0; i < numToSelect; i++) {
    const random = Math.random(); // Генерируем случайное число от 0 до 1
    const selectedIndex = cumulativeProbabilities.findIndex(
      (prob) => prob > random
    ); // Находим индекс выбранной карты на основе вероятности
    selectedIDs.push(cardIDs[selectedIndex]); // Добавляем выбранную карту в результат
  }

  return selectedIDs; // Возвращаем массив выбранных карт
}

module.exports = Algorithm;
