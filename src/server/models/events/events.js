const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    enum: ["achievement", "tournament", "examination"],
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Achievement = eventSchema.discriminator(
  "Achievement",
  new mongoose.Schema({
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  })
);

const Tournament = eventSchema.discriminator(
  "Tournament",
  new mongoose.Schema({
    place: {
      type: Number,
    },
  })
);

const Examination = eventSchema.discriminator(
  "Examination",
  new mongoose.Schema({
    score: {
      type: Number,
    },
  })
);

const Event = mongoose.model("Event", eventSchema);

module.exports = {
  Event,
  Achievement,
  Tournament,
  Examination,
};
