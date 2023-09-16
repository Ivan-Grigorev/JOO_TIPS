const mongoose = require("mongoose");

const TechLessonsSchema = new mongoose.Schema(
  {
    lessonPoints: {
      easy: { type: Number },
      medium: { type: Number },
      hard: { type: Number },
    },

    missedLessonsRadius: Number,

    cardsAmount: Number,
  },
  { versionKey: false }
);

const TechLessons = mongoose.model("TechLesson", TechLessonsSchema);

module.exports = TechLessons;
