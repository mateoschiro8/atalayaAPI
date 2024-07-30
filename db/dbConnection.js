const { MongoClient } = require("mongodb");


const user = process.env.DBUSER;
const pass = process.env.DBPASS;
const uri = `mongodb+srv://${user}:${pass}@cluster0.gtwihqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri);

async function run() {
  try {
    // Query for a movie that has the title 'Back to the Future'
    // const query = { title: 'Back to the Future' };
    // const movie = await movies.findOne(query);

    const heroes = client.db('Atalaya').collection('heroes');
    const infoHeroes = client.db('Atalaya').collection('infos');

    /*
    const heroeID = await heroes.insertOne({
      _id: "btmn",
      nombre: "Batman",
      precio: 80,
      desc: "El muerciélago",
      links: {
        info: "foo.com/bar",
        borrar: "foo.com/bar",
        reservas: "foo.com/bar"
      },
    });
    */
    const infoID = await infoHeroes.insertOne({
      _id: "btmn",
      info: "Nació en ciudad gotica sabe hacer bla bla"
    });
    // const result = await heroes.deleteOne(query);
    // console.log(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// run().catch(console.dir);

async function dbConnect() {
  
  
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

// dbDisconnect();
async function dbDisconnect() {
  try {
    await client.close();
    console.log("Disconnected from MongoDB!");
  } catch (error) {
    console.error("Error disconnecting from MongoDB:", error);
    throw error;
  }
}

module.exports = {client, dbConnect, dbDisconnect};