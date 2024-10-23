const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    userType: {
      type: String,
      enum: ['User', 'Admin'],
      default: "User",
    },
    phone: {
      type: String,
      required: [true, "please add a phone number"],
    },
    isVerified: {
			type: Boolean,
			default: false,
		},
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);

