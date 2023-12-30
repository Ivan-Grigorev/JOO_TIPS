/**
 * Chooses a random entity from the given array.
 * @param {Array<string | Number | any>} array - The input array from which to choose a random entity.
 * @returns {string | Number | any} - A randomly selected entity from the array.
 */
function chooseRandomEntityInArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
module.exports = chooseRandomEntityInArray;
