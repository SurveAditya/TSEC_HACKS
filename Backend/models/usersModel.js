const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    noOfTransactions: {
      type: Number,
      default: 0,
    },
    reported: {
      type: Number,
      default:0
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);