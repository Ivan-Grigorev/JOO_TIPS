const express = require("express");
const auth = require("../../controllers/auth/auth.js");
const middlewares = require("../../middlewares/auth.js");

const joiUser = require("../../models/user/user-joi.js");
const CSRF = require("../../middlewares/csrf.js");

const router = express.Router();

router.post(
  "/current/reset-password",
  joiUser.userResetPassword,
  middlewares.IsUserExistByEmail,
  auth.sendRecoverMail
);

router.post(
  "/current/change-password",
  middlewares.auth,
  CSRF.checkCSRF,
  middlewares.isCurrentPasswordRight,
  auth.changePassword
);

router.get("/reset-password/:token", auth.isTokenValid);

router.post(
  "/reset-password/:token",
  middlewares.isPasswordsMatch,
  auth.setNewPassword
);

module.exports = router;
