const express = require("express");
const router = express.Router();
const middlewares = require("../middlewares/referral.js");
const ref = require("../controllers/referral/referral.js");

router.post("/", middlewares.isUserExist, ref.increaseReferralCount);

module.exports = router;
