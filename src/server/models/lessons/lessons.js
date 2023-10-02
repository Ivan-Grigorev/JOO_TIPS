const mongoose = require("mongoose");
const languagesEnum = [
  "javascript",
  "python",
  "html",
  "css",
  "scss",
  "swift",
  "solidity",
  "c++",
  "c#",
  "react",
  "node/express",
  "php",
  "django",
  "java",
  "golang",
  "kotlin",
  "mongodb",
  "mysql",
  "docker",
  "nginx",
  "tcp/ip",
];
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
    language: {
      type: String,
      enum: languagesEnum,
    },
    cards: [
      {
        ref: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Card",
          required: [true, "Card ref is required"],
        },
        topic: {
          type: String,
          required: [true, "Card topic is required"],
        },
        viewIndex: {
          type: Number,
          enum: [0, 1, 2, 3],
          default: 0,
        },
        _id: false, // Добавляем опцию _id: false
      },
    ],
    expired: {
      type: String,
      required: [true, "Expired property is required."],
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
    status: {
      type: String,
      enum: ["completed", "user_abandoned", "system_abandoned", null],
      default: null,
    },
    lessonDate: {
      type: String,
      required: [true, "Lesson date is required."],
    },
    lessonDuration: {
      type: Number,
      // required: [true, "Lesson duration is required."],
      default: 45,
    },
  },
  { versionKey: false }
);

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
