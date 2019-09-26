const express = require("express");
const router = express.Router();

const { addUser, getUser, uploadImage } = require("../controllers/user");
const upload = require("../config/multer");

router.get("/", getUser);
router.post("/", addUser);
router.post("/user-image", upload.single("files"), uploadImage);

module.exports = router;
