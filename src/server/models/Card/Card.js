const mongoose = require("mongoose");
const cardSchema = new mongoose.Schema(
  {
    language: { type: String, required: true },
    topic: { type: String, required: true },
    text: { type: String, required: true },
    example: { type: String, default: null },
    qas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  },
  { versionKey: false }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
