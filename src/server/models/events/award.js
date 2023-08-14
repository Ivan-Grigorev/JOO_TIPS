const mongoose = require("mongoose");

const awardSchema = new mongoose.Schema({
  awardID: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
  imageURL: String,
});

const Award = mongoose.model("Award", awardSchema);

module.exports = Award;
