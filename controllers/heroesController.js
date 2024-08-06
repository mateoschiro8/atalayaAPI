
const heroesService = require("../services/heroesService");

const getHeroes = async (req, res) => {
    const heroes = await heroesService.getHeroes();

    res.status(200).send(heroes);
};

const getHeroePorID = async (req, res) => {

    const infoHeroe = await heroesService.getHeroePorID(req.params.id);

    if(!infoHeroe)
        return res.status(404).send({message: 'No se conoce un héroe con tal ID'});
        
    res.status(200).send({info: infoHeroe.info});
};

const postHeroe = async (req, res) => {
    
    // console.log(req.body);

    const reqBody = req.body;

    if(!reqBody.nombre || !reqBody.precio || !reqBody.desc || !reqBody.info) 
        return res.status(400).send("Parámetros incorrectos");

    const heroe = await heroesService.postHeroe(reqBody);

    res.status(201).send(heroe);
}

const deleteHeroePorID = async (req, res) => {

    const infoHeroe = await heroesService.getHeroePorID(req.params.id);

    if(!infoHeroe)
        return res.status(404).send({message: 'No se conoce un héroe con tal ID'});

    await heroesService.deleteHeroePorID(req.params.id);

    res.status(204).send();
}

module.exports = {getHeroes, getHeroePorID, postHeroe, deleteHeroePorID};