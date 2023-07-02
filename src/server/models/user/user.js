const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    name: {
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
      default: "Free trial",
    },
    avatar: {
      type: String,
      default: null,
    },
    token: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      enum: ["School", "Simple"],
    },
    status: {
      type: String,
      enum: ["Premium", "Free"],
    },
    IP: {
      firstUserIP: {
        type: String,
        required: true,
      },
      lastUserIP: {
        type: String,
        required: true,
      },
    },
    // macAddress: {
    //   type: String,
    //   required: true,
    // },
    deviceInfo: {
      os: {
        type: String,
        required: true,
      },
      device: {
        type: String,
        required: true,
      },
      browser: {
        type: String,
        required: true,
      },
    },
    registrationDate: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const User = mongoose.model("User", user);

module.exports = User;
