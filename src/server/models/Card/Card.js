import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  language: { type: String, required: true },
  topic: { type: String, required: true },
  text: { type: String, required: true },
  example: { type: String },
  qas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
});

const Card = mongoose.model("Card", cardSchema);

export default Card;
