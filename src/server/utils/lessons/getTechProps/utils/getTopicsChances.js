const Chances = require("../../../../models/Tech/TopicsChances");

/**
 * @function getTopicsChances
 * @description Retrieves the chances and formulas related to topic selection.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing topic selection chances and formulas.
 *
 * @throws {Error} Throws an error if there is an issue fetching topic selection chances.
 */ async function getTopicsChances() {
  try {
    return await Chances.findOne();
  } catch (e) {
    console.error("Error getting topics chances", e);
  }
}

module.exports = getTopicsChances;
