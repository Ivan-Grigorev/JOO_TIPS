const experss = require("express");
const middlewares = require("../../middlewares/auth.js");
const { getLessonsPointsSum } = require("../../controllers/lessons/lessons.js");

const router = experss.Router();

router.get("/points", middlewares.auth, getLessonsPointsSum);

module.exports = router;
