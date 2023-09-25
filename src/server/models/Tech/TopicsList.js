const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    language: {
      type: String,
      required: true,
    },
    topics: {
      type: [String],
      required: true,
    },
  },

  { collection: "topics_list" } // Указание желаемого имени коллекции
);

const TopicsList = mongoose.model("topics_list", schema);

module.exports = TopicsList;
