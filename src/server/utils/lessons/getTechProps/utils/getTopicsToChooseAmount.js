const TopicsToChoose = require("../../../../models/Tech/TopicsToChooseAmount");

/**
 * @function getTopicsToChooseAmount
 * @description Retrieves the amount of topics that can be chosen for lessons.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing the following properties:
 *   - topicsToChoose (number): The number of topics that can be chosen.
 *
 * @throws {Error} Throws an error if there is an issue fetching the topics to choose amount.
 */ async function getTopicsToChooseAmount() {
  try {
    return await TopicsToChoose.findOne();
  } catch (E) {
    console.error("Error getting topics to choose amount", E);
  }
}

module.exports = getTopicsToChooseAmount;
