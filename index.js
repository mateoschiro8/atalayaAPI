
const dotenv = require('dotenv').config();
const express = require("express"); 
const app = express(); 

const heroesRouter = require("./routes/heroesRoutes");
const {dbConnect, dbDisconnect} = require('./db/dbConnection');

const PORT = process.env.PORT || 3000; 

dbConnect();

app.use(express.json());

app.use("/heroes", heroesRouter);

const server = app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});

process.on('SIGINT', async () => {
    await dbDisconnect();
    process.exit(0); // Salir del proceso
});

module.exports = {app, server}; 