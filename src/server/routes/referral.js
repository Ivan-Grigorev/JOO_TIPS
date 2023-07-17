const express = require("express");
const router = express.Router();
const ref = require("../controllers/referral/referral.js");

router.post("/", ref.increaseReferralCount);

module.exports = router;
