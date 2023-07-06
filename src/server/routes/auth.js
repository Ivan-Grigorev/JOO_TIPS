const express = require("express");
const auth = require("../controllers/auth/auth.js");
const middlewares = require("../middlewares/auth.js");

const joiUser = require("../models/user/user-joi.js");
const joiSubscription = require("../models/user/subscription-joi.js");

const router = express.Router();

router.post(
  "/signup",
  joiUser,
  middlewares.isEmailInUse,
  middlewares.isPasswordsMatch,
  middlewares.setUserDevice,
  auth.signup
);

router.post(
  "/login",
  joiUser,
  middlewares.isUserExist,
  middlewares.setUserDevice,
  middlewares.updateLastIP,
  auth.login
);

router.post(
  "/logout",
  joiUser,
  middlewares.auth,
  middlewares.setUserDevice,
  auth.logout
);

router.get("/current", joiUser, middlewares.auth, auth.getCurrentUser); // for persisting token

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
  // middlewares.updateLastIP,
  auth.updateUserSubscription
);

module.exports = router;
