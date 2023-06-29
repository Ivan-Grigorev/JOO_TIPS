const express = require("express");
const auth = require("../controllers/auth/auth.js");
const middlewares = require("../middlewares/auth.js");

const router = express.Router();

router.post("/register",  auth.register);

module.exports = router;
