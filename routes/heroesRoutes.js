const express = require("express");
const router = express.Router();

const heroesController = require("../controllers/heroesController");

router.get("/", heroesController.getHeroes);

module.exports = router;