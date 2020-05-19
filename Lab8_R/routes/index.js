let resultRoute = require("./result");


let constructorMethod = app => {
    app.use("/", resultRoute);



    app.use("*", (req, res) => {
        res.status(400).send({
            error: "Page not found"
        });
    });
};

module.exports = constructorMethod;