const express = require("express");
const middlewares = require("../../middlewares/auth.js");
const {
  getLessonsPointsSum,
  getLessons,
  finishLesson,
} = require("../../controllers/lessons/lessons.js");

const router = express.Router();

router.get("", middlewares.auth, getLessons);

router.get("/points", middlewares.auth, getLessonsPointsSum);

router.post("/finish", middlewares.auth, finishLesson);

module.exports = router;
