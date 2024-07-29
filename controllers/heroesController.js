
const heroesService = require("../services/heroesService");

const getHeroes = async (req, res) => {
    const heroes = await heroesService.getHeroes();
    // console.log("estoy e");
    // console.log(heroes);
    res.status(200).send(heroes);
};

module.exports = { getHeroes };