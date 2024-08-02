const express = require("express");
const router = express.Router();

const heroesController = require("../controllers/heroesController");

// Listado de todos los héroes
router.get("/", heroesController.getHeroes);

// Info de héroe específico x ID
router.get("/:id", heroesController.getHeroePorID);

// Agregar héroes
router.post("/", heroesController.postHeroe);

// Borrar héroes
router.delete("/:id", heroesController.deleteHeroePorID);

module.exports = router;