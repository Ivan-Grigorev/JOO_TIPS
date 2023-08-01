const app = require("./app.js");
const mongoDB = require("./db.js");
// const httpsServer = require("./security/ssl");
const { autoCheckSubscriptionTime } = require("./utils/utils.js");
require("./cronJobs.js");
require("colors");

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`The server is listening on port ${PORT}`.yellow);

  await mongoDB();

  setInterval(autoCheckSubscriptionTime, 3600000); // 3600000 миллисекунд - 1 час
});
