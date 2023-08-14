const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  metricParameter: Number,
  awardID: { type: mongoose.Schema.Types.ObjectId, ref: "Award" },
  achievementPercentage: Number,
  name: String,
  imageURL: String,
});

const Achievement = mongoose.model("Achievement", achievementSchema);

export default Achievement;
