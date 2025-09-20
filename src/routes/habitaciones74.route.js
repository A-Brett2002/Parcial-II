const path = require("path");
const express = require("express");
const router = express.Router();
const habitaciones74Controller = require("../controllers/habitaciones74.controller");
router.get("/", habitaciones74Controller.index);
router.get("/:id", habitaciones74Controller.show);
module.exports = router;