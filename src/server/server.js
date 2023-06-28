const mongoDB = require("./db.js");
const app = require("./app.js");
require("colors");

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`The server is listening on port ${PORT}`.yellow);

  await mongoDB();
});
