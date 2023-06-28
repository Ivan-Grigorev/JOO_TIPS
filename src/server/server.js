import express from "express";
import mongoDB from "./db.js";
import "colors";

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`The server is listening on port ${PORT}`.yellow);

  await mongoDB();
});
