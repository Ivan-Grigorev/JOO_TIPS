const mongoose = require("mongoose");
const cardSchema = new mongoose.Schema(
  {
    language: { type: String, required: [true, "Card language is required"] },
    topic: { type: String, required: [true, "Card topic is reqeuired"] },
    cardText: { type: String, required: [true, "Card text is required"] },
    example: { type: String, required: [true, "Card example is required"] },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: [true, "Ref to question is required"],
      },
    ],
  },
  { versionKey: false }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
