const express = require("express");
const { auth } = require("../../middlewares/auth.js");
const middlewares = require("../../middlewares/lessons.js");
const controllers = require("../../controllers/lessons/lessons.js");

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
  "/finish",
  auth,
  middlewares.isActiveLanguageExists,
  middlewares.isLessonExistById,
  middlewares.isLessonAlreadyCompleted,
  controllers.finishLesson,
  controllers.addPoints
);

router.patch(
  "/viewedcards",
  auth,
  middlewares.isActiveLanguageExists,
  middlewares.isActiveLanguageExists,
  middlewares.shouldChangeTopicStatus,
  middlewares.isCardProvided,
  controllers.addCardToViewed
);

module.exports = router;
