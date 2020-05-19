const express = require("express");
const app = express();
const configRoutes = require("./routes");

configRoutes(app);

app.listen(3000, () => {
    console.log("Server is now Active");
    console.log("The routes will be available on http://localhost:3000");
});