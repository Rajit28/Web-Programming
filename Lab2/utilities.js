

function checkIfUndefined(val, variablename) {
    if (val === 'undefined') throw `${variablename} is not a number`;
}

// function checkifobject(v, vo) {
//     if (typeof v === 'object' && typeof vo === 'object') {
//         deepEquality(v, vo);
//         return true;
//     } else {
//         return false;
//     }
// }

// let obj5 = { x: 9, o: 5 };
// let obj3 = { x: 9, o: 5 }; // right and wrong both values working
// obj1 = {{a,1}, objnes:{x:2}};
// obj2 = {{a:1}, objnes2:

// obj1 = { a: 1, b: obj5 };
// obj2 = { a: 1, b: obj3 }; /// working

// let obj1 = {1:'h', 2:'d'}
// let obj2 = {1:'h', 2:'d'} // Working


function deepEquality(obj1, obj2) {
    //console.log("Enteredd")
    if (typeof obj1 !== 'object' || obj1 == null) throw "NOT A OBJECT TYPE!";
    if (typeof obj2 !== 'object' || obj2 == null) throw "NOT A OBJECT TYPE!";

    out = true
    let size1 = Object.values(obj1).length;
    let size2 = Object.values(obj2).length;
    if (size1 !== size2) throw "The size of is not same!";
    //for (let i = 0; i < size1; i++) {
    let key1 = Object.keys(obj1);
    // console.log(key1)
    let key2 = Object.keys(obj2);
    // console.log(key2)
    for (eachk1 in key1) {
        k1 = key1[eachk1]
        //console.log(key1[eachk1])
        if (key2.includes(k1)) {
            // console.log(k1)
            // console.log(obj1[k1])
            // console.log(obj2[k1])
            if (typeof obj1[k1] == 'object' && typeof obj2[k1] == 'object') {
                //console.log("Equal obj")
                deepEquality(obj1[k1], obj2[k1])
            }
            if (obj1[k1] != obj2[k1]) {
                //console.log(obj[eachk1])
                out = false
                break
            }
        }
        else {
            out = false
            break
        }
    }
    return out

} //console.log(deepEquality(obj1, obj2));

// function deepEquality(obj1, obj2) {

//     if (typeof obj1 !== 'object' || obj1 == null) throw "NOT A OBJECT TYPE!";
//     if (typeof obj2 !== 'object' || obj2 == null) throw "NOT A OBJECT TYPE!";

//     let size1 = Object.values(obj1).length;
//     let size2 = Object.values(obj2).length;

//     if (size1 !== size2) throw "The size of is not same!";
//     out = false;
//     for (let key in obj1) {
//         console.log("key is " + key + "obj " + obj1[key]);
//         if (key in obj2) {
//             if (obj2[key] === obj1[key])
//                 out = true;
//         }
//     }

// for (let i = 0; i < size1; i++) {

//     let val1 = Object.values(obj1)[i];
//     // if (val1 === 'object') throw "This is a object";


//     // console.log(val1)
//     let val2 = Object.values(obj2)[i];
//     //console.log(val2)

//     let key1 = Object.keys(obj1)[i];
//     //console.log(key1)
//     let key2 = Object.keys(obj2)[i];
//     //console.log(key2)
//     checkIfUndefined(val1, val1);
//     checkIfUndefined(val2, val2);
//     objectt = checkifobject(val1, val2);
//     if (objectt == false) {
//         continue;
//     }
//     //checkifobject(key1, key2);
//     // try{
//     // deepEquality(val1, val2);
//     // deepEquality(key1, key2);//}
//     // catch(e){console.log("Not same at level"+i)};
//     // checkIfUndefined(val1,val1);
//     // checkIfUndefined(val2,val2);
//     // console.log(val1, val2)
//     if (val1 !== val2) {
//         console.log("ent");
//         console.log(val1);
//         out = false
//         break
//     }
//     // console.log(key1, key2)
//     if (key1 !== key2) {
//         out = false
//         break
//     }



//  }
// console.log("The values in both the objects are exactly same !")
// return out;

// }
// console.log("Deep Equality " + deepEquality(obj1, obj2));

function uniqueElements(arr) {
    if (!(Array.isArray(arr))) throw "IT is not an Array !"

    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i]);

    }
    // console.log(set);
    let uniele = set.size;
    // console.log(uniele);
    return uniele;
}
let arr = [1, 'Rajit', 1, 3, 'Piyush', 3, 3, 'Rajit'];
//let arr = {a:1};
//let arr  ;
// uniqueElements(arr);

function countOfEachCharacterInString(str) {
    if (typeof str !== 'string') throw "The input is not a string";

    // let map = new Map();
    let map = {};
    // let countofele = 1;

    for (let i = 0; i < str.length; i++) {

        //console.log("The char in str is  "+str.charAt(i));

        let checkifexists = str.charAt(i);

        if (checkifexists in map) {
            map[checkifexists] = ++map[checkifexists]
        }
        else {
            map[checkifexists] = 1
        }

        // if (map.has(checkifexists)) {
        //     countofele = map.get(checkifexists);
        //     countofele++;
        //     map.set(checkifexists, countofele);
        // }
        // map.set(str.charAt(i), countofele)

    }

    //console.log(map);
    return map;

}
let str = 'Rajit Gohel#,!!@ is R!!@,,#ajit Gohel';
// countOfEachCharacterInString(str);

module.exports = {
    countOfEachCharacterInString, uniqueElements, deepEquality

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ROUGH WORK

// if(size1 != size2) throw " The size of both the objects are not equal";

//     let val1 = Object.values(obj1);
//     console.log("values of 1 are  "+ val1);

//     let val2 = Object.values(obj2);
//     console.log("values of 2 are  "+ val2);
//     //console.log(Object.Values(obj1)[0]);

// for(let i=0; i<size1;i++){
//    if( (Object.values(obj1)[i])) == (Object.values(obj2)[i]))){

//    }return true;






// console.log(size1);
//     let val1 = Object.values(obj1);
//     console.log(val1);

//     let val2 = Object.values(obj2);
//     console.log(val2);

    // console.log(Object.keys(obj1)[0]);




