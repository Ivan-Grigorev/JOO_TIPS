const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    userIP: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    username: {
      type: String,
    },
    subscription: {
      type: String,
      enum: ["Free trial", "school"],
      default: null,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false }
);

const User = mongoose.model("User", user);

module.exports = { User };
