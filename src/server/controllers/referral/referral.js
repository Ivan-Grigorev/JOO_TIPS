const User = require("../../models/user/user");

// This function increases the referral count for the user.
async function increaseReferralCount(req, res) {
  try {
    // Extract the user's ID from the request.
    const ID = req.user.id;

    // Increment the referral count by 1 for the user.
    await User.findByIdAndUpdate(ID, { $inc: { "referral.count": 1 } });

    // Respond with a success status and no content (204 No Content).
    res.status(204).end();
  } catch (error) {
    // Log the error and send a 500 Internal Server Error response.
    console.log(`Error while increasing referral count: ${error.message}`.red);
    res
      .status(500)
      .json({ message: `Error creating/updating referral: ${error.message}` });
  }
}

module.exports = { increaseReferralCount };
