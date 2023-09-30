const express = require("express");
const { auth } = require("../../middlewares/auth.js");
const middlewares = require("../../middlewares/lessons.js");
const {
  getLessons,
  finishLesson,
  addPoints,
  getActiveLessonPoints,
} = require("../../controllers/lessons/lessons.js");

const router = express.Router();

router.get(
  "",
  auth,
  middlewares.shouldAddNewTopic,
  middlewares.isScheduleAlreadyExists,
  middlewares.createScheduleToEndOfWeek,
  getLessons
);

router.get("/points", auth, getActiveLessonPoints);

router.post(
  "/finish",
  auth,
  middlewares.isLessonExistById,
  middlewares.isLessonAlreadyCompleted,
  finishLesson,
  addPoints
);

module.exports = router;
