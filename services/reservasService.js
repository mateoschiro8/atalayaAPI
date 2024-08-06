const {client} = require("../db/dbConnection.js");
const heroesCollection = client.db('Atalaya').collection('heroes');
const infosCollection = client.db('Atalaya').collection('infos');
const reservasCollection = client.db('Atalaya').collection('reservas');

const getReservasPorID = async (heroeID) => {
    
    const reservasHeroe = await reservasCollection.findOne({_id : heroeID});

    return reservasHeroe;
    
};


module.exports = {getReservasPorID};