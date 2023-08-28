const mongoose = require("mongoose");
const cardSchema = new mongoose.Schema(
  {
    language: { type: String, required: [true, "Card language is required"] },
    topic: { type: String, required: [true, "Card topic is rqeuired"] },
    text: { type: String, required: [true, "Card text is required"] },
    example: { type: String, required: [true, "Card example is required"] },
    question: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  },
  { versionKey: false }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
