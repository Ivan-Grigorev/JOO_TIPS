const mongoose = require("mongoose");

const OptionSchema = new mongoose.Schema({
  text: String, // текст відповіді
  isCorrect: Boolean, // позначка, чи є ця відповідь правильною
});

const QuestionSchema = new mongoose.Schema({
  questionText: String, // текст питання
  cardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Card",
  },
  difficultyLevels: {
    easy: [OptionSchema], // масив з трьох варіантів відповідей
    medium: [OptionSchema],
    hard: [OptionSchema],
  },
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
