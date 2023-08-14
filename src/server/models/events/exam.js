const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  announcementDateTime: Date,
  applicationStartDateTime: Date,
  applicationEndDateTime: Date,
  examStartDateTime: Date,
  examEndDateTime: Date,
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
  participants: [{ userID: mongoose.Schema.Types.ObjectId, score: Number }],
  topTenParticipants: [
    { userID: mongoose.Schema.Types.ObjectId, place: Number },
  ],
});

const Exam = mongoose.model("Exam", examSchema);

export default Exam;
