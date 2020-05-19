const geo = require('./geometry')
const util = require('./utilities')


let rajit = 'rajit';
let obj = { a: 1, b: 2 };
let array = [undefined, null, 1];

// VOLUME OF RECTANGLE
try {
    console.log(' geo.volumeOfRectangularPrism(5,5,5)', geo.volumeOfRectangularPrism(5, -5, 5));// checking correct
} catch (e) {
    console.log(e);
}
try {
    console.log(' geo.volumeOfRectangularPrism(3,undefined,5)', geo.volumeOfRectangularPrism(3, undefined, 5)); //checking correct
} catch (e) {
    console.log(e);
}
try {
    console.log(' geo.volumeOfRectangularPrism(5,null,5)', geo.volumeOfRectangularPrism(5, null, 5)); //checking correct
} catch (e) {
    console.log(e);
}
try {
    console.log(' geo.volumeOfRectangularPrism(5,2,5)', geo.volumeOfRectangularPrism(5, 2, 5)); // Perfect condition pass
} catch (e) {
    console.log(e);
}
try {
    console.log(' geo.volumeOfRectangularPrism(2,1,5)', geo.volumeOfRectangularPrism(rajit, 1, 5)); //checking correct
} catch (e) {
    console.log(e);
}

////////////////////////////////////// CHECKED
// SURFACE AREA OF RECTANGLE
try {
    console.log(' geo.surfaceAreaOfRectangularPrism(5, -5, 5)', geo.surfaceAreaOfRectangularPrism(5, -5, 5)); //checking correct
} catch (e) {
    console.log(e);
}
try {
    console.log(' geo.surfaceAreaOfRectangularPrism(3, undefined, 5)', geo.surfaceAreaOfRectangularPrism(3, undefined, 5)); //checking correct
} catch (e) {
    console.log(e);
}
try {
    console.log(' geo.surfaceAreaOfRectangularPrism(5, null, 5)', geo.surfaceAreaOfRectangularPrism(5, null, 5)); //checking correct
} catch (e) {
    console.log(e);
}
try {
    console.log(' geo.surfaceAreaOfRectangularPrism(1, 2, 3)', geo.surfaceAreaOfRectangularPrism(1, 2, 3)); //perfect condition
} catch (e) {
    console.log(e);
}
try {
    console.log(' geo.surfaceAreaOfRectangularPrism(1, 2, 3)', geo.surfaceAreaOfRectangularPrism(1, rajit, 3)); //checking correct
} catch (e) {
    console.log(e);
}

/////////////////////////////////////////////////////////////////// CHECKED
// VOLUME OF SPHERE
try {
    console.log(' geo.volumeOfSphere(-1)', geo.volumeOfSphere(-1)); //checking correct
} catch (e) {
    console.log(e);
}
try {
    console.log(' geo.volumeOfSphere(undefined)', geo.volumeOfSphere(undefined)); //checking correct
} catch (e) {
    console.log(e);
}
try {
    console.log(' geo.volumeOfSphere(null)', geo.volumeOfSphere(null)); //checking correct
} catch (e) {
    console.log(e);
}
try {
    console.log(' geo.volumeOfSphere(rajit)', geo.volumeOfSphere(rajit)); //checking correct
} catch (e) {
    console.log(e);
}
try {
    console.log(' geo.volumeOfSphere(1)', geo.volumeOfSphere(1)); // PAss case
} catch (e) {
    console.log(e);
}

//////////////////////////////////////////////////////////////// Checked
// SURFACE AREA OF SPHERE
try {
    console.log(' geo.surfaceAreaOfSphere(1)', geo.surfaceAreaOfSphere(-1));  // checked
} catch (e) {
    console.log(e);
}
try {
    console.log(' geo.surfaceAreaOfSphere(undef)', geo.surfaceAreaOfSphere(undefined)); // // checked
} catch (e) {
    console.log(e);
}
try {
    console.log(' geo.surfaceAreaOfSphere(null)', geo.surfaceAreaOfSphere(null)); // checked
} catch (e) {
    console.log(e);
}
try {
    console.log(' geo.surfaceAreaOfSphere(rajit)', geo.surfaceAreaOfSphere(rajit)); // checked
} catch (e) {
    console.log(e);
}
try {
    console.log(' geo.surfaceAreaOfSphere(1)', geo.surfaceAreaOfSphere(1)); // PAss case
} catch (e) {
    console.log(e);
}
////////////////////////////////////////////////////////////////////////////////////////////

// UNIQUE ELEMENTS

try {
    console.log(' util.uniqueElements(1)', util.uniqueElements(1)); // 
} catch (e) {
    console.log(e);
}
try {
    console.log(' util.uniqueElements(rajit)', util.uniqueElements(rajit)); // 
} catch (e) {
    console.log(e);
}
try {
    console.log(' util.uniqueElements(rajit)', util.uniqueElements(obj)); // 
} catch (e) {
    console.log(e);
}
try {
    console.log(' util.uniqueElements(array)', util.uniqueElements(array)); // 
} catch (e) {
    console.log(e);
}
try {
    console.log(' util.uniqueElements(rajit)', util.uniqueElements(null)); // 
} catch (e) {
    console.log(e);
}

///////////////////////////////////////////////////////////////////

// COUNT OF EACH CHARACTER IN A STRING

try {
    console.log('util.countOfEachCharacterInString(null)', util.countOfEachCharacterInString(null)); // checked
} catch (e) {
    console.log(e);
}
try {
    const cm = util.countOfEachCharacterInString('I have a class at 6');
    console.log(cm);
    //console.log('util.countOfEachCharacterInString(null)', util.countOfEachCharacterInString('I have a class today at 6')); // checked
} catch (e) {
    console.log(e);
}
try {
    console.log('util.countOfEachCharacterInString(null)', util.countOfEachCharacterInString(null)); // checked
} catch (e) {
    console.log(e);
}
try {
    console.log('util.countOfEachCharacterInString(null)', util.countOfEachCharacterInString(675)); // checked
} catch (e) {
    console.log(e);
}
try {
    console.log('util.countOfEachCharacterInString(null)', util.countOfEachCharacterInString(undefined)); // checked
} catch (e) {
    console.log(e);
}

//console.log(cm);
///////////////////////////////////////////////////////////////// checked

// DEEP EQUALITY
// obj1 = { a: 1, b: obj5 };
// obj2 = { a: 1, b: obj3 };
// let obj5 = { x: 9, o: 5 };
// let obj3 = { x: 9, o: 5 };
// obj1 = { a: 1, b: obj5 };
// obj2 = { a: 1, b: obj3 };

try {
    console.log(' util.deepEquality(obj1, obj2)', util.deepEquality(obj1, obj2)); // checked
} catch (e) {
    console.log(e);
}
try {
    console.log(' util.deepEquality(obj1, obj2)', util.deepEquality(null, null)); // checked
} catch (e) {
    console.log(e);
}
try {
    console.log(' util.deepEquality(obj1, obj2)', util.deepEquality(123, null)); // checked
} catch (e) {
    console.log(e);
}
try {
    console.log(' util.deepEquality(obj1, obj2)', util.deepEquality(undefined, null)); // checked
} catch (e) {
    console.log(e);
}
try {
    console.log(' util.deepEquality(obj1, obj2)', util.deepEquality('rajit', 'dsds')); // checked
} catch (e) {
    console.log(e);
}
/////////////////////////////

