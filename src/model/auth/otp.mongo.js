const { Schema, model } = require("mongoose");
 
// otp schema
 
const otpSch =new Schema(
  {
    email: {
      type: String,
      required: true
    },
    otp: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      index: { expires: 300 }
    }
  },
  { timestamps: true } // Auto remove after 5 minutes
);

module.exports = model("Otp", otpSch);

