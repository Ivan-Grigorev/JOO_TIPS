const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "UserID is required"],
    },
    sessionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
      required: [true, "SessionID is required"],
    },
    lessonTypeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LessonType",
      required: [true, "LessonTypeID is required"],
    },
    startTime: {
      type: Date,
      required: [true, "Start time is required."],
    },
    endTime: {
      type: Date,
      required: [true, "End time is required."],
    },
    flashcardsResult: {
      type: [
        {
          flashcardId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Flashcard",
          },
          points: {
            type: Number,
            default: 0,
          },
          duration: {
            type: Number,
            default: 0,
          },
          viewsCount: {
            type: Number,
            default: 0,
          },
        },
      ],
      default: [],
    },
    testsResult: {
      type: [
        {
          testId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Test",
          },
          points: {
            type: Number,
            default: 0,
          },
          duration: {
            type: Number,
            default: 0,
          },
        },
      ],
      default: [],
    },
    totalPoints: {
      type: Number,
      default: 0,
    },
    lessonNumber: {
      type: Number,
      required: [true, "Lesson number is required."],
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
