const express = require("express");
const { auth } = require("../../middlewares/auth.js");
const middlewares = require("../../middlewares/lessons.js");
const controllers = require("../../controllers/lessons/lessons.js");

const router = express.Router();

router.get(
  "",
  auth,
  middlewares.isScheduleAlreadyExists,
  middlewares.shouldChangeTopicStatus, // todo поставить после проверки на существование расписания
  middlewares.createScheduleToEndOfWeek,
  controllers.getLessons
);

router.get("/points", auth, controllers.getActiveLessonPoints);

router.post(
  "/finish",
  auth,
  middlewares.isLessonExistById,
  middlewares.isLessonAlreadyCompleted,
  controllers.finishLesson,
  controllers.addPoints
);

router.patch("/viewedcards", auth, controllers.addCardToViewed);

module.exports = router;
