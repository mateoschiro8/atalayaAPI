const express = require("express");
const router = express.Router();

const heroesController = require("../controllers/heroesController.js");
const reservasController = require("../controllers/reservasController.js");

// Listado de todos los héroes
router.get("/", heroesController.getHeroes);

// Info de héroe específico x ID
router.get("/:id", heroesController.getHeroePorID);

// Agregar héroes
router.post("/", heroesController.postHeroe);

// Borrar héroes
router.delete("/:id", heroesController.deleteHeroePorID);

// Listar reservas
router.get("/:id/reservas", reservasController.getReservasPorID)

module.exports = router;