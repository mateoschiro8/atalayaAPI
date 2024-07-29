const { MongoClient } = require("mongodb");

const dotenv = require('dotenv').config();

const user = process.env.DBUSER;
const pass = process.env.DBPASS;

const uri = `mongodb+srv://${user}:${pass}@cluster0.gtwihqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('Atalaya');
    const heroes = database.collection('heroes');

    // Query for a movie that has the title 'Back to the Future'
    // const query = { title: 'Back to the Future' };
    // const movie = await movies.findOne(query);

    const batman = {_id: "btmn", name: "Batman", costo: 30};

    const query = { name: "Batman"};

    const result = await heroes.deleteOne(query);

    console.log(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);