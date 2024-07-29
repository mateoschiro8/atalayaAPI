
const {client} = require("../db/dbConnection.js");
const heroesCollection = client.db('Atalaya').collection('heroes');

const getHeroes = async () => {
    
    
    const heroes = await heroesCollection.find({}).toArray();

    return heroes;
};
  
  
module.exports = { getHeroes };