const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema(
  {
    answerText: {
      type: String,
      required: [true, "Answer text is required"],
    }, // текст відповіді
    isCorrect: {
      type: Boolean,
      required: [true, "Answer isCorrect is required"],
    }, // позначка, чи є ця відповідь правильною
  },
  { versionKey: false }
);

const Answer = mongoose.model("Answer", AnswerSchema);

module.exports = Answer;
