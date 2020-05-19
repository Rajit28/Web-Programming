const palindromeroutes = require("./palindrome");

const constructorMethod = app => {
    app.use("/", palindromeroutes);
};

module.exports = constructorMethod;