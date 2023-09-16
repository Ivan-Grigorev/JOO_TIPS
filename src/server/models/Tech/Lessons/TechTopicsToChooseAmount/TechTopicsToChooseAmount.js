const mongoose = require("mongoose");

const TechTopicsToChooseAmountSchema = new mongoose.Schema(
  {
    topicsToChooseAmount: Number,
  },
  { versionKey: false }
);

const TechTopicsToChooseAmount = mongoose.model(
  "TechTopicsToChooseAmount",
  TechTopicsToChooseAmountSchema
);

module.exports = TechTopicsToChooseAmount;
