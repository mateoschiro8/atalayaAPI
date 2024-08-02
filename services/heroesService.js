
const {client} = require("../db/dbConnection.js");
const heroesCollection = client.db('Atalaya').collection('heroes');
const infosCollection = client.db('Atalaya').collection('infos');

const getHeroes = async () => {
    
    const heroes = await heroesCollection.find({}).toArray();

    heroes.forEach(heroe => {
        heroe.links = {
            info: `/heroes/${heroe._id}/info`,
            borrar: `/heroes/${heroe._id}/delete`,
            reservas: `/heroes/${heroe._id}/reservas`
        };
    });

    return heroes;
};

const getHeroePorID = async (heroeID) => {

    const infoHeroe = await infosCollection.findOne({_id : heroeID});

    return infoHeroe;
}
  
const postHeroe = async (reqBody) => {

    const nuevoID = reqBody.nombre.toLowerCase().replace(/\s+/g, '').replace(/[aeiouáéíóúü]/g, '');

    const heroe = {
        _id : nuevoID,
        nombre : reqBody.nombre,
        precio : reqBody.precio,
        desc : reqBody.desc
    };

    await heroesCollection.insertOne(heroe);
    await infosCollection.insertOne({
        _id : nuevoID,
        info: reqBody.info
    });

    return heroe;
}
  
const deleteHeroePorID = async (heroeID) => {

    const heroeDeleted = await heroesCollection.deleteOne({_id : heroeID});
    const infoDeleted = await infosCollection.deleteOne({_id : heroeID});

    return heroeDeleted;

}

module.exports = {getHeroes, getHeroePorID, postHeroe, deleteHeroePorID};