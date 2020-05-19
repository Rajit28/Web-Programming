

// I have referred Professor's Github https://github.com/stevens-cs546-cs554/CS-546/blob/master/lecture_04/code/dogs.js

const mongoCollections = require('./mongoCollections');
const animals = mongoCollections.animals;
const { ObjectId } = require('mongodb');


function checkIfSrting(val, variablename) {
    if (val === undefined) throw `${variablename} you have entered undefined`;
    if (typeof val !== 'string') throw `${variablename} is not a string`;
}

async function get(id) {
    if (!id) throw 'You have not provided the id';

    let animalsCollection = await animals();
    let getanimal = await animalsCollection.findOne({ _id: id });
    if (getanimal === null) throw 'Animal with this id does not exsists';

    return getanimal;
}

async function getAll() {
    let animalsCollection = await animals();
    let allanimals = await animalsCollection.find({}).toArray();
    return allanimals;
}

async function rename(id, name) {
    if (!id) throw "The id is not provided to change the name";
    if (!name) throw "Provide the new name for the animal";
    checkIfSrting(name, name);

    let animalsCollection = await animals();
    let updatedetails = {
        name: name
    };
    let updatesuccess = await animalsCollection.updateOne({ _id: id }, { $set: updatedetails });
    if (updatesuccess.modifiedCount === 0) {
        throw "The Modification was not successful";
    }
    return await get(id);
}

async function remove(id) {
    if (!id) throw 'Please provide the id';
    let animalsCollection = await animals();
    let displayremoved = await get(id);
    let updateof = await animalsCollection.deleteOne({ _id: id });

    if (updateof.deletedCount === 0) {
        throw "Could not delete";
    }
    return displayremoved;
}



async function create(name, animalType) {
    if (!name) throw 'You have not given a name';
    if (!animalType) throw 'You have not given a animal Type';
    checkIfSrting(name, name);
    checkIfSrting(animalType, animalType);

    let animalsCollection = await animals();

    let newAnimal = {
        name: name,
        animalType: animalType
    };

    let insertionInfo = await animalsCollection.insertOne(newAnimal);
    if (insertionInfo.insertedCount === 0) throw 'New Animal was not added';

    let newId = insertionInfo.insertedId;

    let animal = await get(newId);
    return animal;

}

module.exports = { create, getAll, rename, remove }