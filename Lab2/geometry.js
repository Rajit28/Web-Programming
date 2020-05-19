function checkIfNumber(val, variablename) {
    if (val === undefined) throw `${variablename} you have entered undefined`;
    if (typeof val !== 'number') throw `${variablename} is not a number`;
    if (val < 0) throw "you have entered a negative value";
    if (typeof str === 'string') throw "The input is a string";

}

function volumeOfRectangularPrism(length, width, height) {
    checkIfNumber(length, length);
    checkIfNumber(width, width);
    checkIfNumber(height, height);
    // if(typeof length !== 'number') throw " The Length is not a number";
    // if(isNaN(length)) throw "length is NaN";
    // if(typeof width !== 'number') throw " The width is not a number";
    // if(isNaN(width)) throw "length is NaN";
    // if(typeof height !== 'number') throw " The height is not a number";
    // if(isNaN(height)) throw "length is NaN";
    let volume = length * width * height;
    return volume;
}

function surfaceAreaOfRectangularPrism(length, width, height) {
    checkIfNumber(length, length);
    checkIfNumber(width, width);
    checkIfNumber(height, height);
    let surfaceArea = 2 * ((length * width) + (width * height) + (length * height));
    return surfaceArea;
}

function volumeOfSphere(radius) {
    checkIfNumber(radius, radius);

    let volOfSphere = ((4 / 3) * Math.PI * Math.pow(radius, 3));
    return volOfSphere;
}

function surfaceAreaOfSphere(radius) {
    checkIfNumber(radius, radius);
    let surfaceAreaSp = (4 * Math.PI * Math.pow(radius, 2));
    return surfaceAreaSp;

}

module.exports = {
    volumeOfRectangularPrism, surfaceAreaOfRectangularPrism, volumeOfSphere, surfaceAreaOfSphere

}