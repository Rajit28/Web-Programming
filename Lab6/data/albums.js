
const mongoCollections = require('../config/mongoCollections');
const { ObjectId } = require("mongodb").ObjectId;
//const bands = mongoCollections.bands;
const albums = mongoCollections.albums;
const bandsData = require("./bands");



const exportedMethods = {

    async Create(title, author, songs) {// same name as inclass pdf lab6

        if (!title) throw 'Please provide a name for your Band';
        if (typeof title !== 'string') throw 'You must enter a string for band name';

        // if (!author || !Array.isArray(author)) throw 'Please provide author ID your Band';
        if (typeof author !== 'string') throw 'You must enter a string for author';

        if (!songs || !Array.isArray(songs)) throw 'You must provide array for song';
        if (songs.length === 0) throw 'You must provide at least one song';

        const albumsCollection = await albums();

        let newAlbum = {
            title: title,
            author: author,
            songs: songs

        };

        const insertInfo = await albumsCollection.insertOne(newAlbum);
        if (insertInfo.insertedCount === 0) throw 'Album was not added';


        const newId = insertInfo.insertedId;

        const Albumget = await this.getAlbum(newId);
        const getBand = await bandsData.addAlbumToBand(Albumget);
        return Albumget;

    },

    async getAlbum(id) { // same name as inclass pdf
        const bandsCollection = await albums();
        const bandfromid = await bandsCollection.findOne({ _id: ObjectId(id) });

        if (!bandfromid) throw 'Post not found';
        return bandfromid;
    },

    async updateAlbum(albumid, title, author, songs) {// same name as inclass pdf

        const bandsCollection = await albums();
        const updatedBandData = {};

        if (title) {
            updatedBandData.title = title;
        }
        if (author) {
            updatedBandData.author = author;
        }
        if (songs) {
            updatedBandData.songs = songs;
        }


        const updatedInfo = await bandsCollection.updateOne({ _id: ObjectId(albumid) }, { $set: updatedBandData });
        if (updatedInfo.modifiedCount === 0) {
            throw 'could not update the band successfully';
        }

        const Albumget = await this.getAlbum(albumid);
        const getBand = await bandsData.addAlbumToBand(Albumget);
        return Albumget;

    }, async getAllAlbums() { // same name as inclass pdf
        const albumsCollection = await albums();

        const albumsList = await albumsCollection.find({}).toArray();

        return albumsList;

    },
    async removeAlbum(id) { // same as pdf
        const albumsCollection = await albums();
        let album = null;
        try {
            albumtodelete = await this.getAlbum(id);
        } catch (e) {
            console.log(e);
            return;
        }
        const deletionInfo = await albumsCollection.removeOne({ _id: ObjectId(id) });
        if (deletionInfo.deletedCount === 0) {
            throw "Could not delete band";
        }
        await bandsData.removeAlbumFromBand(albumtodelete);
        // You have to remove the function from the Bands database as well
        //await users.removePostFromUser(post.poster.id, id);
        return true;

    }

};

module.exports = exportedMethods;