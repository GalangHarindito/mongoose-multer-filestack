const User = require("../models/user");
const UserImage = require("../models/userImage");

module.exports = {
  addUser: async (req, res) => {
    try {
      console.log(req.body);
      const user = await User.create(req.body);
      // after user is created, send user id to model user image --- \\end\\
      const userAvatar = await UserImage.create({
        filename: req.body.files[0].filename,
        path: req.body.files[0].url
      });

      await User.findOneAndUpdate(
        { _id: user._id },
        { $push: { avatar: userAvatar._id } },
        { new: true }
      );

      res.status(200).send({
        message: "user created",
        user,
        userAvatar
      });
    } catch (error) {
      res.status(400).send({
        message: "user failed to create",
        error: error.message
      });
    }
  },
  getUser: (req, res) => {
    User.find()
      .populate("addresses", "address -_id")
      .populate("avatar", "path")
      .then(result => {
        res.send(result);
      })
      .catch(error => console.log(error));
  },

  uploadImage: (req, res) => {
    UserImage.create({
      filename: req.files[0].filename,
      path: req.files[0].path
    })
      .then(result => res.send(result))
      .catch(error => res.send(error));
  }
};
