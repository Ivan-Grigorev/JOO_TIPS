const User = require("../../models/user/user");

async function increaseReferralCount(req, res, next) {
  try {
    const ID = req.user.id;

    await User.findByIdAndUpdate(ID, { $inc: { "referral.count": 1 } });
  } catch (error) {
    console.log(`Error while increase referral count: ${error.message}`.red);
    res
      .status(500)
      .json({ message: `Error creating/updating referral: ${error.message}` });
  }
}

module.exports = { increaseReferralCount };
