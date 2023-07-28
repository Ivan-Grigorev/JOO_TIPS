const express = require("express");
const router = express.Router();
const middlewares = require("../middlewares/referral.js");
const ref = require("../controllers/referral/referral.js");
const CSRF = require("../middlewares/csrf.js");

router.post(
  "/",
  CSRF.checkCSRF,
  middlewares.isUserExist,
  ref.increaseReferralCount
);

module.exports = router;
