async function getTopicsChances() {
  try {
    const TopicsChances = null;
    return await TopicsChances.findOne();
  } catch (e) {
    console.error("Error getting topics chances", e);
  }
}

module.exports = getTopicsChances;
