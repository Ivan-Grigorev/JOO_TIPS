const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    languages: [
      {
        language: {
          type: String,
          required: [true, "Language name is required"],
        },
        _id: {
          type: mongoose.Schema.Types.ObjectId, // Указываем тип ObjectId
          default: mongoose.Types.ObjectId, // Устанавливаем значение по умолчанию (новый ObjectId)
        },
      },
    ],
  },
  { versionKey: false, collection: "languages_list" }
);

const LanguagesList = mongoose.model("languages_list", schema);

module.exports = LanguagesList;
