const express = require("express");
const { auth } = require("../../middlewares/auth.js");
const middlewares = require("../../middlewares/lessons.js");
const controllers = require("../../controllers/lessons/lessons.js");
const { createTestScheduleToEndOfWeek } = require("../../tests/utils/utils.js");

const router = express.Router();

router.get(
  "",
  auth,
  middlewares.isActiveLanguageExists,
  middlewares.isScheduleAlreadyExists,
  middlewares.shouldChangeTopicStatus,
  middlewares.createScheduleToEndOfWeek,
  controllers.getLessons
);

router.get(
  "/points",
  auth,
  middlewares.isActiveLanguageExists,
  controllers.getActiveLessonPoints
);

router.post(
  "/start",
  auth,
  middlewares.isActiveLanguageExists,
  middlewares.isLessonExistById,
  middlewares.isLessonAlreadyCompleted,
  middlewares.selectRandomTypeOfTasks,
  middlewares.selectRandomQuestions,
  controllers.startLesson
);

router.post(
  "/finish",
  auth,
  middlewares.isActiveLanguageExists,
  middlewares.isLessonExistById,
  middlewares.isLessonAlreadyCompleted,
  middlewares.areLessonStarted,
  controllers.finishLesson,
  controllers.addCardsToViewed,
  controllers.addPoints
);

// ! test route
router.post(
  "/testAlgorithm",
  auth,
  middlewares.isActiveLanguageExists,
  // TESTisScheduleAlreadyExists,
  middlewares.shouldChangeTopicStatus,
  createTestScheduleToEndOfWeek
);

router.post(
  "/finishAll",
  auth,
  middlewares.isActiveLanguageExists,
  controllers.finishAllLessons
);

module.exports = router;
