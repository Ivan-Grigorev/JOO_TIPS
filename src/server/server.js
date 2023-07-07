const mongoDB = require("./db.js");
const app = require("./app.js");
const { autoCheckSubscriptionTime } = require("./utils/utils.js");
require("colors");

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`The server is listening on port ${PORT}`.yellow);

  await mongoDB();

  autoCheckSubscriptionTime()

  setInterval(autoCheckSubscriptionTime, 3600000); // 3600000 миллисекунд - 1 час
});
