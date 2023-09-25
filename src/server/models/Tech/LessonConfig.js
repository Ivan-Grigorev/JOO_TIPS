const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    dayLesson: {
      duration: Number,
      cardsAmount: Number,
    },
    weekLesson: {
      duration: Number,
      cardsAmount: Number,
    },
    monthLesson: {
      duration: Number,
      cardsAmount: Number,
    },
    missedDayLessonsRadius: Number,
    missedWeekLessonsRadius: Number,
    missedMonthLessonsRadius: Number,
    lessonPoints: {
      easy: Number,
      medium: Number,
      hard: Number,
    },
  },
  { collection: "lessons_tech" }
);

const LessonConfig = mongoose.model("lessons_tech", schema);

module.exports = LessonConfig;
