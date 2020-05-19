const mongoCollections = require('../config/mongoCollections');
const { ObjectId } = require("mongodb").ObjectId;
const bands = mongoCollections.bands;
// const users = require('./users');



const exportedMethods = {
    async addBand(bandName, bandMembers, yearFormed, genres, albums, recordLabel) {// same name as inclass pdf

        if (!bandName) throw 'Please provide a name for your Band';
        if (typeof bandName !== 'string') throw 'You must enter a string for band name';

        if (!bandMembers || !Array.isArray(bandMembers)) throw 'Please provide a band Members for your Band';
        if (bandMembers.length === 0) throw 'You must provide at least one band Member';

        if (!yearFormed) throw 'Please enter the year formed';
        if (typeof yearFormed !== 'number') throw 'You must enter a year integer';

        if (!genres || !Array.isArray(genres)) throw 'You must provide array for generes';
        if (genres.length === 0) throw 'You must provide at least one genre';

        // if (!albums) throw 'Please provide a name for your Band';
        // if (!albums || !Array.isArray(albums)) throw 'You must provide array of albums';
        // if (albums.length === 0) throw 'You must provide at least one album';

        if (!recordLabel) throw 'Please provide the record label ';
        if (typeof recordLabel !== 'string') throw 'You must enter a string for record label';

        const bandsCollection = await mongoCollections.bands("bands");

        let newBand = {
            bandName: bandName,
            bandMembers: bandMembers,
            yearFormed: yearFormed,
            genres: genres,
            albums: [],
            recordLabel: recordLabel
        };

        const insertInfo = await bandsCollection.insertOne(newBand);
        if (insertInfo.insertedCount === 0) throw 'band was not added';

        const newId = insertInfo.insertedId;

        const bandget = await this.getBand(newId);
        return bandget;

    },
    async getBand(id) { // same name as inclass pdf
        const bandsCollection = await bands();
        const bandfromid = await bandsCollection.findOne({ _id: ObjectId(id) });

        if (!bandfromid) throw 'Post not found';
        return bandfromid;
    },

    async getAllBands() { // same name as inclass pdf
        const bandsCollection = await bands();

        const bandsList = await bandsCollection.find({}).toArray();

        return bandsList;

    },
    async updateBand(bandId, bandName, bandMembers, yearFormed, genres,
        recordLabel) {// same name as inclass pdf

        const bandsCollection = await bands();
        const updatedBandData = {};

        if (bandName) {
            updatedBandData.bandName = bandName;
        }
        if (bandMembers) {
            updatedBandData.bandMembers = bandMembers;
        }
        if (yearFormed) {
            updatedBandData.yearFormed = yearFormed;
        }
        if (genres) {
            updatedBandData.genres = genres;
        }
        if (recordLabel) {
            updatedBandData.recordLabel = recordLabel;
        }

        const updatedInfo = await bandsCollection.updateOne({ _id: ObjectId(bandId) }, { $set: updatedBandData });
        if (updatedInfo.modifiedCount === 0) {
            throw 'could not update the band successfully';
        }

        return await this.getBand(bandId);

    },
    async removeBand(id) { // same as pdf
        const bandsCollection = await bands();
        let band = null;
        try {
            band = await this.getBand(id);
        } catch (e) {
            console.log(e);
            return;
        }
        const deletionInfo = await bandsCollection.removeOne({ _id: ObjectId(id) });
        if (deletionInfo.deletedCount === 0) {
            throw "Could not delete band";
        }
        //await users.removePostFromUser(post.poster.id, id);
        return true;

    },

    async addAlbumToBand(album) { // same as pdf
        const bandsCollection = await bands();
        try {
            band = await this.getBand(album.author);
        } catch (e) {
            console.log(e);
            return;
        }

        const updatedInfo = await bandsCollection.updateOne({ _id: ObjectId(album.author) }, { $addToSet: { 'albums': album } });

        if (updatedInfo.ModifiedCount === 0) {
            throw "Could not add album";
        }
        return await this.getBand(album.author);

    },

    ////////////////////////// remove album from band

    async removeAlbumFromBand(album) { // same as pdf
        const bandsCollection = await bands();
        try {
            band = await this.getBand(album.author);
        } catch (e) {
            console.log(e);
            return;
        }

        const updatedInfo = await bandsCollection.updateOne({ _id: ObjectId(album.author) }, { $pull: { 'albums': album } });

        if (updatedInfo.ModifiedCount === 0) {
            throw "Could not remove album";
        }
        return await this.getBand(album.author);

    }


};

module.exports = exportedMethods;
