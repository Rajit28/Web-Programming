const MongoClient = require("mongodb").MongoClient;
// const settings = require("./settings");
// const mongoConfig = settings.mongoConfig;

let _connection = undefined;
let _db = undefined;

module.exports = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect("mongodb://localhost:27017/", { useUnifiedTopology: true });
    _db = await _connection.db("Rajit_Gohel_Lab4");
  }

  return _db;
};