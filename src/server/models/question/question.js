const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    questionText: {
      type: String,
      required: [true, "Question text is required"],
    }, // текст питання
    cardId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Ref to CardId is required"],
      ref: "Card",
    },
    difficultyLevels: {
      easy: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Answer",
          required: [true, "Ref to Answer is required"],
        },
      ], // масив з трьох варіантів відповідей
      medium: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Answer",
          required: [true, "Ref to Answer is required"],
        },
      ],
      hard: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Answer",
          required: [true, "Ref to Answer is required"],
        },
      ],
    },
  },
  { versionKey: false }
);

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
