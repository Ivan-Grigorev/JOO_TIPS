const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    n: {
      type: String,
      required: true,
    },
    nPlus1: {
      type: String,
      required: true,
    },
    nPlus2: {
      type: String,
      required: true,
    },
    nMinus1: {
      type: String,
      required: true,
    },
    completed: {
      type: String,
      required: true,
    },
    completedTwice: {
      type: String,
      required: true,
    },
  },
  { collection: "topics_chances" } // Указание желаемого имени коллекции
);

const Chances = mongoose.model("topics_chances", schema);

module.exports = Chances;
