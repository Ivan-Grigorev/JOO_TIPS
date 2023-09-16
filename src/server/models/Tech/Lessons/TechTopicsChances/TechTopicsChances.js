const mongoose = require("mongoose");

const TechTopicsChancesSchema = new mongoose.Schema(
  {
    topicsAppearanceChances: {
      n: Number,
      nPlus1: Number,
      nPlus2: Number,
      nMinus1: Number,
      old1: Number,
    },
  },
  { versionKey: false }
);

const TechTopicsChances = mongoose.model("TechLesson", TechTopicsChancesSchema);

module.exports = TechTopicsChances;
