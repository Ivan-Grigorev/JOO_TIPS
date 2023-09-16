const mongoose = require("mongoose");

const TechTopicsAutoAppearanceIntervalSchema = new mongoose.Schema(
  {
    topicsAutoAppearanceInterval: Number,
  },
  { versionKey: false }
);

const TechTopicsAppearance = mongoose.model(
  "TechTopicsAutoAppearanceInterval",
  TechTopicsAutoAppearanceIntervalSchema
);

module.exports = TechTopicsAppearance;
