const express = require("express");
const auth = require("../controllers/auth/auth.js");
const middlewares = require("../middlewares/auth.js");

const joiUser = require("../models/user/user-joi.js");

const router = express.Router();

router.post("/register", joiUser, middlewares.isEmailInUse, auth.register);

router.post(
  "/login",
  middlewares.isUserExist,
  middlewares.updateLastIP,
  auth.login
);

router.post("/logout", middlewares.auth, middlewares.updateLastIP, auth.logout);

module.exports = router;
