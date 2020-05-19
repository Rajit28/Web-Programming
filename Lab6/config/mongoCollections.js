const dbConnection = require('./mongoConnections');

/* This will allow you to have one reference to each collection per app */
/* Feel free to copy and paste this this */
const getCollectionFn = collection => {
    let _col = undefined;

    return async () => {
        if (!_col) {
            const db = await dbConnection();
            _col = await db.collection(collection);
        }

        return _col;
    };
};

/* Now, you can list your collections here: */
module.exports = {
    bands: getCollectionFn("bands"),
    albums: getCollectionFn("albums")

};


































// const dbConnection = require("./mongoConnections");

// /* This will allow you to have one reference to each collection per app */
// /* Feel free to copy and paste this this */
// const getCollectionFn = collection => {
//     let _col = undefined;

//     return async () => {

//         if (!_col) {
//             // const db = await dbConnection();
//             let db = await dbConnection.connect();
//             console.log(db);
//             _col = await db.collection(collection);
//             console.log(_col);
//         }

//         return _col;
//     };
// };

// /* Now, you can list your collections here: */
// // module.exports = {
// //     bands: getCollectionFn("bands"),
// //     albums: getCollectionFn("albums") // checked with the assignment

// // };

// module.exports = {


//     async  bands(collection) {

//         let _col = undefined;

//         console.log(_col);


//         if (_col === undefined) {

//             const db = await dbConnection();
//             console.log("hello")
//             _col = await db.collection(collection);
//             console.log(_col);
//         }

//         return _col;

//     }

// }