const LessonConfig = require("../../../../models/Tech/LessonConfig");

async function getLessonConfig() {
  try {
    return await LessonConfig.findOne();
  } catch (e) {
    console.error("Error getting Lesson config", e);
  }
}

module.exports = getLessonConfig;
