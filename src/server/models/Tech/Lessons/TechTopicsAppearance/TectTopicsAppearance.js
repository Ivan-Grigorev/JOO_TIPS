const mongoose = require("mongoose");

const TechTopicsAutoAppearanceIntervalSchema = new mongoose.Schema(
  {
    topicsAutoAppearanceInterval: Number,
  },
  { versionKey: false }
);

const TechTopicsAppearanceInterval = mongoose.model(
  "TechTopicsAutoAppearanceInterval",
  TechTopicsAutoAppearanceIntervalSchema
);

module.exports = TechTopicsAppearanceInterval;
