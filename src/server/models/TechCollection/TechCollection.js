const mongoose = require("mongoose");

const techSchema = new mongoose.Schema(
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

const Tech = mongoose.model("Lesson", techSchema);

module.exports = Tech;
