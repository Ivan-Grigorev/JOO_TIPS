const express = require("express");
const { auth } = require("../../middlewares/auth.js");
const middlewares = require("../../middlewares/lessons.js");
const {
  getLessonsPointsSum,
  getLessons,
  finishLesson,
  addPoints,
} = require("../../controllers/lessons/lessons.js");

const router = express.Router();

router.get("", auth, middlewares.isScheduleAlreadyExists, getLessons);

router.get("/points", auth, getLessonsPointsSum);

router.post(
  "/finish",
  auth,
  middlewares.isLessonExistById,
  middlewares.isLessonAlreadyCompleted,
  finishLesson,
  addPoints
);

module.exports = router;
