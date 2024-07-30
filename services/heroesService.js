
const {client} = require("../db/dbConnection.js");
const heroesCollection = client.db('Atalaya').collection('heroes');
const infoCollection = client.db('Atalaya').collection('infos');

const getHeroes = async () => {
    
    const heroes = await heroesCollection.find({}).toArray();

    return heroes;
};

const getHeroePorID = async (heroeID) => {

    const infoHeroe = await infoCollection.findOne({_id : heroeID});

    return infoHeroe;

}
  
  
module.exports = {getHeroes, getHeroePorID};