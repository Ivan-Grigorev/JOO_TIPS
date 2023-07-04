const express = require("express");
const auth = require("../controllers/auth/auth.js");
const middlewares = require("../middlewares/auth.js");

const joiUser = require("../models/user/user-joi.js");

const router = express.Router();

router.post(
  "/signup",
  joiUser,
  middlewares.isEmailInUse,
  middlewares.isPasswordsMatch,
  auth.signup
);

router.post(
  "/login",
  joiUser,
  middlewares.isUserExist,
  middlewares.updateLastIP,
  auth.login
);

router.post("/logout", joiUser, middlewares.auth, auth.logout);

module.exports = router;
