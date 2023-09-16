const mongoose = require("mongoose");

const TechLessonsSchema = new mongoose.Schema(
  {
    lessons: {
      points: {
        easy: Number,
        medium: Number,
        hard: Number,
      },

      quantity: Number,
    },
  },
  { versionKey: false }
);

const TechLessons = mongoose.model("Lesson", TechLessonsSchema);

module.exports = TechLessons;
