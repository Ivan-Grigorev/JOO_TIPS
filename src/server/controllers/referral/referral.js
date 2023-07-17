const User = require("../../models/user/user");

async function increaseReferralCount(req, res, next) {
  try {
    const { ref, email } = req.body;

    console.log("req.body in referral.js");
    console.log(req.body);

    res.json({ message: "pong" });
  } catch (error) {
    console.log(`Error while increase referral count: ${error.message}`.red);
    res
      .status(500)
      .json({ message: `Error creating/updating referral: ${error.message}` });
  }
}

module.exports = { increaseReferralCount };
