const express = require("express");
const { getAllHost } = require("../controllers/host-controllers");

const router = express.Router();

router.get("/", getAllHost);

module.exports = router;
