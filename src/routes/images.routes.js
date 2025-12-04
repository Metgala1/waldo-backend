const express = require("express");
const { getImages } = require("../controllers/image.controller");

const router = express.Router();

router.get("/", getImages);

module.exports = router;
