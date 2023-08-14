const mongoose = require("mongoose");

const duelSchema = new mongoose.Schema({
  player1: {
    userID: mongoose.Schema.Types.ObjectId,
    score: Number,
    timeSpent: Number,
    answers: [
      {
        cardID: mongoose.Schema.Types.ObjectId,
        testID: mongoose.Schema.Types.ObjectId,
        correct: Boolean,
        timeTaken: Number,
      },
    ],
  },
  player2: {
    userID: mongoose.Schema.Types.ObjectId,
    score: Number,
    timeSpent: Number,
    answers: [
      {
        cardID: mongoose.Schema.Types.ObjectId,
        testID: mongoose.Schema.Types.ObjectId,
        correct: Boolean,
        timeTaken: Number,
      },
    ],
  },
  winner: mongoose.Schema.Types.ObjectId,
  topic: String,
  timing: {
    cardTiming: Number,
    testTiming: Number,
  },
});

const roundSchema = new mongoose.Schema({
  roundNumber: Number,
  startDate: Date,
  endDate: Date,
  duels: [duelSchema],
  completed: Boolean,
});

const tournamentSchema = new mongoose.Schema({
  announcementDateTime: Date,
  applicationStartDateTime: Date,
  applicationEndDateTime: Date,
  tournamentStartDateTime: Date,
  tournamentEndDateTime: Date,
  maxParticipants: Number,
  participationAwardID: { type: mongoose.Schema.Types.ObjectId, ref: "Award" },
  placesAwardsIDs: [
    {
      place: Number,
      awardID: { type: mongoose.Schema.Types.ObjectId, ref: "Award" },
    },
  ],
  name: String,
  topics: [String],
  cards: [{ cardID: mongoose.Schema.Types.ObjectId, timing: Number }],
  tests: [
    {
      testID: mongoose.Schema.Types.ObjectId,
      timing: Number,
      difficultyLevel: Number,
    },
  ],
  participants: [
    {
      userID: mongoose.Schema.Types.ObjectId,
      score: Number,
      timeSpent: Number,
    },
  ],
  topTenParticipants: [
    { userID: mongoose.Schema.Types.ObjectId, place: Number },
  ],
  rounds: [roundSchema],
});

const Tournament = mongoose.model("Tournament", tournamentSchema);

module.exports = Tournament;
