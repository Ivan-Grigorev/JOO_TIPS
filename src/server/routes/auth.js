const express = require("express");
const auth = require("../controllers/auth/auth.js");
const middlewares = require("../middlewares/auth.js");
const profileMiddlewares = require("../middlewares/profile.js");

const joiUser = require("../models/user/user-joi.js");
const joiSubscription = require("../models/user/subscription-joi.js");
const CSRF = require("../middlewares/csrf.js");

const router = express.Router();

router.post(
  "/signup",
  joiUser.userJoi,
  middlewares.isEmailInUse,
  middlewares.isPasswordsMatch,
  middlewares.setUserDevice,
  auth.signup
);

router.post(
  "/login",
  joiUser.userJoi,
  middlewares.isUserExist,
  middlewares.setUserDevice,
  middlewares.updateLastIP,
  auth.login
);

router.post(
  "/logout",
  joiUser.userJoi,
  middlewares.auth,
  middlewares.setUserDevice,
  auth.logout
);

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

router.get(
  "/subscription",
  middlewares.auth,
  CSRF.checkCSRF,
  auth.getSubscriptionDetails
);

router.patch(
  "/current/profile",
  joiUser.userUpdateProfile,
  middlewares.auth,
  CSRF.checkCSRF,
  profileMiddlewares.checkUniqueFields,
  auth.updateUserProfile
);

router.patch(
  "/subscription/reset",
  joiSubscription.resetSubscriptionJoi,
  middlewares.auth,
  CSRF.checkCSRF,
  auth.resetUserSubscription
);

router.patch(
  "/subscription",
  joiSubscription.subscriptionJoi,
  middlewares.isUserExist,
  middlewares.auth,
  CSRF.checkCSRF,
  auth.updateUserSubscription
);

module.exports = router;
