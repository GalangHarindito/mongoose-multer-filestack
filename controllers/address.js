const Address = require("../models/address");
const User = require("../models/user");

module.exports = {
  addAddress: async (req, res) => {
    // create the address first to generate its `_id`
    const address = await Address.create({
      address: req.body.address
    });

    // then pass the `address._id` to user
    const user = await User.findOneAndUpdate(
      { _id: req.body._id },
      { $push: { addresses: address._id } },
      { new: true }
    );

    res.status(200).send({
      message: "Created new address success",
      address,
      user
    });
  }
};
