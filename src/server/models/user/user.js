const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    recoverPasswordToken: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      default: null,
    },
    country: {
      type: String,
      required: true,
    },
    profile: {
      about: {
        type: String,
        default: null,
      },
      username: {
        type: String,
        default: null,
      },
      interfaceLanguage: {
        type: String,
        enum: ["English", "Ukrainian", "Polish", "German", "France"],
        default: "English",
      },
      notifications: {
        type: Boolean,
        default: true,
      },
    },
    referral: {
      referredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
    subscription: {
      type: {
        type: String,
        default: "Common",
        // enum: ["Common", "School"],
      },
      isPremium: {
        type: Boolean,
        default: false,
        index: 1,
      },
      expired: {
        startDate: {
          type: Number,
          default: null,

          index: 1.1,
        },
        endDate: {
          type: Number,
          default: null,
          index: 1.2,
        },
      },
    },
    languages: {
      type: [
        {
          type: String,
          enum: ["JS", "Python", "Java", "Swift", "Ruby", "C", "C#", "C++"],
        },
      ],
      default: [],
    },

    avatar: {
      type: String,
      default: null,
    },
    token: {
      type: String,
      default: null,
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
