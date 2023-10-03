const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    languages: [
      {
        language: {
          type: String,
          required: [true, "Language name is required"],
        },
        _id: true,
      },
    ],
  },
  { versionKey: false },
  { collection: "languages_list" } // Указание желаемого имени коллекции
);

const LanguagesList = mongoose.model("languages_list", schema);

module.exports = LanguagesList;
