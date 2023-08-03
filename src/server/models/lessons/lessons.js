const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId, // используется для ссылки на другую коллекцию (в данном случае, предположительно на пользователей)
      ref: "User", // имя модели, на которую ссылаемся
      required: [true, "UserID is required"],
    },
    points: {
      type: Number,
      required: [true, "Lesson points is required."],
      default: 0,
    },
    title: {
      // добавим заголовок урока для примера
      type: String,
      required: [true, "Lesson title is required."],
      trim: true,
    },
    dateCompleted: {
      // дата завершения урока, это может быть полезной информацией
      type: Date,
      default: Date.now,
    },
    // ... другие поля, которые вы можете добавить
  },
  { versionKey: false }
);

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
