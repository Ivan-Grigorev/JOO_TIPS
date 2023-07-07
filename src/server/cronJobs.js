const cron = require("node-cron");
const { autoCheckSubscriptionTime } = require("./utils/utils");

// Schedule the job to run at 00:00 every day
cron.schedule("0 0 * * *", autoCheckSubscriptionTime);
