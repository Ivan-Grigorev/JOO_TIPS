const mongoose = require("mongoose");

const OptionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      // required: [true, "Option text is required"],
    }, // текст відповіді
    isCorrect: {
      type: Boolean,
      // required: [true, "IsCorrect is required property"],
    }, // позначка, чи є ця відповідь правильною
  },
  { versionKey: false }
);

const QuestionSchema = new mongoose.Schema(
  {
    questionText: {
      type: String,
      // required: [true, "Question text is required"],
    }, // текст питання
    cardId: {
      type: mongoose.Schema.Types.ObjectId,
      // required: [true, "Card id is required"],
      ref: "Card",
    },
    difficultyLevels: {
      easy: [OptionSchema], // масив з трьох варіантів відповідей
      medium: [OptionSchema],
      difficult: [OptionSchema],
    },
  },
  { versionKey: false }
);

const Question = mongoose.model("Question", QuestionSchema);
const QuestionOption = mongoose.model("QuestionOption", OptionSchema);

module.exports = { Question, QuestionOption };
