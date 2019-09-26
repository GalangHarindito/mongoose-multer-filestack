const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userImageSchema = new Schema(
  {
    filename: String,
    path: String
  },
  { timestamps: true }
);

const UserImage = mongoose.model("userImage", userImageSchema);

module.exports = UserImage;
