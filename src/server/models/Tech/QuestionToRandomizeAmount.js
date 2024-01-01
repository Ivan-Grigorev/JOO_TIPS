const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    questionToRandomizeAmount: {
      type: Number,
      required: true,
    },
  },
  { collection: "questions_to_randomize_amount", versionKey: false } // Указание желаемого имени коллекции
);

const QuestionToRandomizeAmount = mongoose.model(
  "questions_to_randomize_amount",
  schema
);

module.exports = QuestionToRandomizeAmount;
