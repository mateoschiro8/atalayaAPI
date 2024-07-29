const app = require("express")(); 

const heroesRouter = require("./routes/heroesRoutes");

const PORT = process.env.PORT || 3000; 

app.use("/heroes", heroesRouter);

const server = app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});

module.exports = {app, server}; 