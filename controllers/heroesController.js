
const heroesService = require("../services/heroesService");

const getHeroes = (req, res) => {
    const heroes = heroesService.getHeroes();
    res.send(heroes);
};

module.exports = { getHeroes };