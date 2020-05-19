const express = require('express');
const connection = require('./config/mongoConnections');
const app = express();
const configRoutes = require('./routes');

app.use(express.json());
configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3000');
});

// My server is running
// checked with the code provided on Github by professor
//https://github.com/stevens-cs546-cs554/CS-546/blob/master/lecture_06/code/intermediate_api/app.js