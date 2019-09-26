const express = require("express");
const router = express.Router();

const { addAddress } = require("../controllers/address");

router.post("/", addAddress);
// router.get("/", getAddress);

module.exports = router;
