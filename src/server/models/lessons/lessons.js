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
    language: {
      type: String,
      enum: [
        "Javascript",
        "Python",
        "HTML",
        "CSS",
        "SCSS",
        "SWIFT",
        "Solidity",
        "C++",
        "C#",
        "React",
        "Node/Express",
        "PHP",
        "Django",
        "Java",
        "Golang",
        "Kotlin",
        "MongoDB",
        "MySQL",
        "Docker",
        "Nginx",
        "TCP/IP",
      ],
    },
    topic: {
      type: String,
      required: [true, "Lesson topic is required."],
      trim: true,
    },
    cardText: {
      type: String,
      required: [true, "Lesson subtopic is required."],
    },
   cardsAmount: {
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
    status: {
      type: String,
      enum: ["completed", "user_abandoned", "system_abandoned", null],
      default: null,
    },
    lessonDate: {
      type: Date,
      required: [true, "Lesson date is required."],
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
  },
  { versionKey: false }
);

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
