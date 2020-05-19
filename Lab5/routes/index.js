let educationRoutes = require("./education");
let storyRoutes = require("./story");
let aboutRoutes = require("./about");

// refered https://github.com/stevens-cs546-cs554/CS-546/blob/master/lecture_05/code/routes/index.js SIr's lecture code


let constructorMethod = app => {
    app.use("/education", educationRoutes);
    app.use("/story", storyRoutes);
    app.use("/about", aboutRoutes);

    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not found" });
    });
};

module.exports = constructorMethod;