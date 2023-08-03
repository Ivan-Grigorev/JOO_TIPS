const express = require("express");
const middlewares = require("../../middlewares/auth.js");
const { getLessonsPointsSum } = require("../../controllers/lessons/lessons.js");

const router = express.Router();

router.get("/points", middlewares.auth, getLessonsPointsSum);

module.exports = router;
