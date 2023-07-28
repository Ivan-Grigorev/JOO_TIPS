const express = require("express");
const auth = require("../../controllers/auth/auth.js");
const middlewares = require("../../middlewares/auth.js");
const profileMiddlewares = require("../../middlewares/profile.js");

const joiUser = require("../../models/user/user-joi.js");
const CSRF = require("../../middlewares/csrf");
const router = express.Router();

router.put(
  "/current",
  joiUser.userDeleteJoi,
  middlewares.isUserExist,
  middlewares.auth,
  CSRF.checkCSRF,
  middlewares.confirmPassword,
  auth.deleteCurrentUser
);

router.get(
  "/current",
  joiUser.userJoi,
  middlewares.auth,
  CSRF.checkCSRF,
  auth.getCurrentUser
); // for persisting token

router.patch(
  "/current/profile",
  joiUser.userUpdateProfile,
  middlewares.auth,
//   CSRF.checkCSRF,
  profileMiddlewares.checkUniqueFields,
  auth.updateUserProfile
);

module.exports = router;
