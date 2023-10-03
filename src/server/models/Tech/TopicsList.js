const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    language: {
      type: String,
      required: true,
    },
    topics: [
      {
        topicTitle: { type: String, required: true },
        _id: {
          type: mongoose.Schema.Types.ObjectId, // Указываем тип ObjectId
          default: mongoose.Types.ObjectId, // Устанавливаем значение по умолчанию (новый ObjectId)
        },
      },
    ],
  },

  { collection: "topics_list" } // Указание желаемого имени коллекции
);

const TopicsList = mongoose.model("topics_list", schema);

module.exports = TopicsList;
