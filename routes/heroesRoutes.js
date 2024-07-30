const express = require("express");
const router = express.Router();

const heroesController = require("../controllers/heroesController");

// Listado de todos los héroes
router.get("/", heroesController.getHeroes);

// Info de héroe específico x ID
router.get("/:id", heroesController.getHeroePorID);


module.exports = router;