const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
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
      default: "Free trial",
    },
    token: {
      type: String,
      default: null,
    },
    firstUserIP: {
      type: String,
      required: true,
    },
    browser: {
      type: String,
      required: true,
    },
    // lastUserIP: {
    //   type: String,
    //   required: true,
    //   default: null,
    // },
  },
  { versionKey: false }
);

const User = mongoose.model("User", user);

module.exports = User;
