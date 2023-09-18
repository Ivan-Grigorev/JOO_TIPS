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
    // topic: {
    //   type: String,
    //   required: [true, "Lesson topic is required."],
    //   trim: true,
    // },
    // cardText: {
    //   type: String,
    //   required: [true, "Lesson subtopic is required."],
    // },
    cards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card",
        required: [true, "Card ref is required"],
      },
    ],
    expired: {
      type: Date,
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
      type: Date,
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
