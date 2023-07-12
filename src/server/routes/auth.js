const express = require("express");
const auth = require("../controllers/auth/auth.js");
const middlewares = require("../middlewares/auth.js");

const joiUser = require("../models/user/user-joi.js");
const joiSubscription = require("../models/user/subscription-joi.js");

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

router.put(
  "/current",
  joiUser.userDeleteJoi,
  middlewares.isUserExist,
  middlewares.auth,
  middlewares.confirmPassword,
  auth.deleteCurrentUser
);

router.get("/current", joiUser.userJoi, middlewares.auth, auth.getCurrentUser); // for persisting token

router.patch(
  "/current/profile",
  joiUser.userUpdateProfile,
  middlewares.auth,
  auth.updateUserProfile
);

router.post(
  "/current/reset-password",
  joiUser.userResetPassword,
  auth.resetUserPassword
);

router.get("/subscription", middlewares.auth, auth.getSubscriptionDetails);

router.patch(
  "/subscription/reset",
  joiSubscription.resetSubscriptionJoi,
  middlewares.auth,
  auth.resetUserSubscription
);

router.patch(
  "/subscription",
  joiSubscription.subscriptionJoi,
  middlewares.isUserExist,
  middlewares.auth,
  auth.updateUserSubscription
);

module.exports = router;
