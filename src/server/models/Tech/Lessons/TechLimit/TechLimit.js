const mongoose = require("mongoose");

const TechLimitSchema = new mongoose.Schema(
  {
    limit: Number,
  },
  { versionKey: false }
);

const TechLimit = mongoose.model("TechLimit", TechLimitSchema);

module.exports = TechLimit;
