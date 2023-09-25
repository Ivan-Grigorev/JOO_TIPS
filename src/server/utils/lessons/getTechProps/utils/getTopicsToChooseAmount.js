const TopicsToChoose = require("../../../../models/Tech/TopicsToChooseAmount");

async function getTopicsToChooseAmount() {
  try {
    return await TopicsToChoose.findOne();
  } catch (E) {
    console.error("Error getting topics to choose amount", E);
  }
}

module.exports = getTopicsToChooseAmount;
