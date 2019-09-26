const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var addressSchema = new Schema(
  {
    address: { type: String, required: true }
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
