const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    password: String,
    email: String,
    phoneNumber: String,
    addresses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Address"
      }
    ],
    avatar: [{
      type: Schema.Types.ObjectId,
      ref: "userImage"
    }]
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
