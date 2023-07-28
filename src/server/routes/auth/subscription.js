const express = require("express");
const auth = require("../../controllers/auth/auth.js");
const middlewares = require("../../middlewares/auth.js");

const joiSubscription = require("../../models/user/subscription-joi.js");
const CSRF = require("../../middlewares/csrf.js");

const router = express.Router();

router.get(
  "/subscription",
  middlewares.auth,
  CSRF.checkCSRF,
  auth.getSubscriptionDetails
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
