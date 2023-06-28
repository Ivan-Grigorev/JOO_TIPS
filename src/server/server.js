import mongoDB from "./db.js";
import { app } from "./app.js";
import "colors";

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`The server is listening on port ${PORT}`.yellow);

  await mongoDB();
});
