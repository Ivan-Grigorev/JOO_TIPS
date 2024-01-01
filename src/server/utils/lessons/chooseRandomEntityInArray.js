/**
 * Chooses a random entity from the given array.
 * @param {Array<string | Number | any>} array - The input array from which to choose a random entity.
 * @param {number} count - The number of random entities to select.
 * @returns {Array<string | Number | any>} - An array of randomly selected entities from the input array.
 */
function chooseRandomEntitiesInArray(array, count) {
  const iterationCount = count || 1;
  const randomEntities = new Set();

  for (let i = 0; i < iterationCount; i++) {
    const randomIndex = Math.floor(Math.random() * array.length);
    randomEntities.add(array[randomIndex]);
  }
  return [...randomEntities];
}

module.exports = chooseRandomEntitiesInArray;
