
const heroesService = require("../services/heroesService");

const getHeroes = async (req, res) => {
    const heroes = await heroesService.getHeroes();

    res.status(200).send(heroes);
};

const getHeroePorID = async (req, res) => {
    const heroeID = req.params.id;

    const infoHeroe = await heroesService.getHeroePorID(heroeID);

    if(!infoHeroe)
        return res.status(404).send({ message: 'No se conoce un héroe con tal ID' });
        
    res.status(200).send({info: infoHeroe.info});
};

module.exports = {getHeroes, getHeroePorID};