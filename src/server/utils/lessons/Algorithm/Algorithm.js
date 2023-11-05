const moment = require("moment");

/**
 * A function that calculates and returns a selection of unique card IDs based on the current day of the week and other parameters.
 *
 * @param {Array} arrayOfIDs - An array of card IDs to choose from.
 * @param {number} cardsAmount - The total number of cards to return.
 * @returns {string[]} - An array of random selected unique card IDs.
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

  return selectedIDs;
}

module.exports = Algorithm;
