const express = require("express");
const router = express.Router();
const cookie = require("../controllers/cookies/cookies.js");

router.post("/", cookie.set);

module.exports = router;
