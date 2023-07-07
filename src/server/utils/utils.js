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
    const currentTime = moment();

    const users = await User.find({}).exec();

    for (const user of users) {
      const expirationDate = moment(user.subscription.expired.endDate);
      const remainingTime = expirationDate.diff(currentTime);

      const endDate = moment(user.subscription.expired.endDate).format(
        "DD-MM-YYYY"
      );
      const endTime = moment(user.subscription.expired.endTime).format("HH:mm");

      if (remainingTime <= 0) console.log(`Пользователь ${user.email} - время подписки истекло`); // prettier-ignore

      sendRemind.sendWeekSubscriptionRemind(user.email, user.name, endDate, endTime);
    }
  } catch (error) {
    console.error("Ошибка при проверке времени подписки:", error);
  }
}

module.exports = {
  getUserMac,
  autoCheckSubscriptionTime,
};
