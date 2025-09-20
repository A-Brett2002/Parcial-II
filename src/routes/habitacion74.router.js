const path = require("path");
const express = require("express");
const router = express.Router();
const habitaciones74Controller = require("../controllers/habitacion74.controller");

router.get("/", habitaciones74Controller.index);    

module.exports = router;