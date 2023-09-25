const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    topicsToChoose: {
      type: Number,
      required: true,
    },
  },
  { collection: "topics_to_choose_amount" } // Указание желаемого имени коллекции
);

const TopicsToChooseAmount = mongoose.model("topics_to_choose_amount", schema);

module.exports = TopicsToChooseAmount;
