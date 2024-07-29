const express = require("express"); 

const heroesRouter = require("./routes/heroesRoutes");

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use("/heroes", heroesRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});