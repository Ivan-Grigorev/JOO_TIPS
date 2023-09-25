async function getTopicsToChooseAmount() {
  try {
    const TopicsToChooseAmount = null;
    return await TopicsToChooseAmount.findOne();
  } catch (E) {
    console.error("Error getting topics to choose amount", E);
  }
}

module.exports = getTopicsToChooseAmount;
