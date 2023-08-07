const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "UserID is required"],
    },
    points: {
      type: Number,
      required: [true, "Lesson points is required."],
      default: 0,
    },
    title: {
      type: String,
      required: [true, "Lesson title is required."],
      trim: true,
    },
    topic: {
      type: String,
      required: [true, "Lesson topic is required."],
    },
    subtopic: {
      type: String,
      required: [true, "Lesson subtopic is required."],
    },
    flashcardsCount: {
      type: Number,
      required: [true, "Number of flashcards is required."],
    },
    startTime: {
      type: Date,
      // required: [true, "Start time is required."],
      default: null,
    },
    endTime: {
      type: Date,
      // required: [true, "End time is required."],
      default: null,
    },
    lessonNumber: {
      type: Number,
      required: [true, "Lesson number is required."],
    },
    lessonDuration: {
      type: Number,
      // required: [true, "Lesson duration is required."],
      default: 45,
    },
    // ... other fields you may want to add
  },
  { versionKey: false }
);

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
