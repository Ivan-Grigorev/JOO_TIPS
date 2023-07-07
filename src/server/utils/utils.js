const getMacAddress = require("getmacaddress");
const User = require("../models/user/user");
const moment = require("moment");

const sendRemind = require("./mailer.js");
require("colors");

async function getUserMac() {
  try {
    const macAddress = await getMacAddress();
    return macAddress;
  } catch (error) {
    console.error(`Error getting MAC address: ${error}`.red);
    return null;
  }
}

async function autoCheckSubscriptionTime() {
  try {
    // Get the current time
    const currentTime = moment();
    // Define the length of one day in milliseconds
    const oneDayInMs = 24 * 60 * 60 * 1000;
    // Define the length of seven days (one week) in milliseconds
    const sevenDaysInMs = oneDayInMs * 7;

    // Fetch all users
    const users = await User.find({}).exec();

    // Loop over each user
    for (const user of users) {
      // Get the subscription expiration date of the user
      const expirationDate = moment(user.subscription.expired.endDate);
      // Calculate the remaining time of the subscription in milliseconds
      const remainingTimeInMs = expirationDate.diff(currentTime);

      // Check if the subscription has already expired
      if (remainingTimeInMs <= 0) {
        console.log(`User ${user.email} - subscription time has expired`);
        // Skip to the next user (end this iteration)
        continue;
      }

      // Check if the subscription will expire within one day
      if (remainingTimeInMs <= oneDayInMs) {
        console.log(`User ${user.email} - subscription will expire in 1 day`);
        // Skip to the next user (end this iteration)
        continue;
      }

      // Check if the subscription will expire within one week
      if (remainingTimeInMs <= sevenDaysInMs) {
        // Format the expiration date and time
        const endDate = moment(user.subscription.expired.endDate).format("DD-MM-YYYY"); // prettier-ignore
        const endTime = moment(user.subscription.expired.endTime).format("HH:mm"); // prettier-ignore
        // Send an email reminder for the subscription
        sendRemind.sendWeekSubscriptionRemind(
          user.email,
          user.name,
          endDate,
          endTime
        );
      }
    }
  } catch (error) {
    // Log any errors that occur during the execution of the function
    console.error("Error when checking subscription time:", error);
  }
}

module.exports = {
  getUserMac,
  autoCheckSubscriptionTime,
};
