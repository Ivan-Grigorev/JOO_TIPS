const Chances = require("../../../../models/Tech/TopicsChances");

/**
 * @function getTopicsChances
 * @description Retrieves the chances and formulas related to topic selection.
 *
 * @returns {Promise<{
 *   n: string,               // Probability for the first topic (e.g., '100%').
 *   nPlus1: string,          // Probability for the second topic (e.g., '75%').
 *   nPlus2: string,          // Probability for the third topic (e.g., '50%').
 *   nMinus1: string,         // Probability for other topics (e.g., '5%').
 *   completed: string,       // Probability for completed topics (e.g., '2.5%').
 *   completedTwice: string   // Probability for topics completed twice (e.g., '1%').
 * }>} A promise that resolves to an object containing topic selection chances and formulas.
 *
 * @throws {Error} Throws an error if there is an issue fetching topic selection chances.
 */
async function getTopicsChances() {
  try {
    return await Chances.findOne();
  } catch (e) {
    console.error("Error getting topics chances", e);
  }
}

module.exports = getTopicsChances;
