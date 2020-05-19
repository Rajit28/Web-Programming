const MongoClient = require("mongodb").MongoClient;
// const settings = require("./settings");
// const mongoConfig = settings.mongoConfig;

let _connection = undefined;
let _db = undefined;

module.exports = async () => {
    if (!_connection) {
        _connection = await MongoClient.connect("mongodb://localhost:27017/", { useUnifiedTopology: true });
        _db = await _connection.db("Rajit_Gohel_Lab6");
    }

    return _db;
};































// const MongoClient = require("mongodb").MongoClient;
// // const settings = require("./settings");
// // const mongoConfig = settings.mongoConfig;

// let _connection = undefined;
// let _db = undefined;


// // connect = async () => {
// //     console.log(_connection);
// //     if (!_connection) {
// //         _connection = await MongoClient.connect("mongodb://localhost:27017/", { useUnifiedTopology: true });
// //         console.log(_connection);
// //         _db = await _connection.db("Rajit_Gohel_Lab6");
// //     }

// //     return _db;
// // }

// module.exports = {

//     async connect() {
//         console.log("_connection");
//         if (!_connection) {
//             _connection = await MongoClient.connect("mongodb://localhost:27017/", { useUnifiedTopology: true });
//             // console.log(_connection);
//             _db = await _connection.db("Rajit_Gohel");
//             console.log(_db);
//         }

//         return _db;

//     }

// }