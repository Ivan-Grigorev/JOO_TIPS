const Chances = require("../../../../models/Tech/TopicsChances");

async function getTopicsChances() {
  try {
    return await Chances.findOne();
  } catch (e) {
    console.error("Error getting topics chances", e);
  }
}

module.exports = getTopicsChances;
