const express = require('express');
const router = express.Router();
const data = require('../data/bands');
const album = require('../data/albums');



router.post('/', async (req, res) => {
    const bandsPostData = req.body;
    console.log(bandsPostData);
    if (!bandsPostData.title) {
        res.status(400).json({ error: 'You must provide album title' });
        return;
    }
    if (!bandsPostData.author) {
        res.status(400).json({ error: 'You must provide band id for album' });
        return;
    }
    if (!bandsPostData.songs) {
        res.status(400).json({ error: 'You must provide songs' });
        return;
    }
    try {
        const newPost = await album.Create(bandsPostData.title, bandsPostData.author, bandsPostData.songs)
        res.json(newPost);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.put('/:id', async (req, res) => {
    const updatedData = req.body;
    if (!updatedData.author || !updatedData.title || !updatedData.songs) {
        res.status(400).json({ error: 'Supply All fields' });
        return;
    }
    try {
        await album.getAlbum(req.params.id);
    } catch (e) {
        res.status(404).json({ error: 'band not found' });
        return;
    }

    try {
        const updatedBand = await album.updateAlbum(req.params.id, updatedData.title, updatedData.author, updatedData.songs);//bandsData.updateBand(req.params.id, updatedData);
        res.json(updatedBand);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.get('/', async (req, res) => {
    try {
        const albumsList = await album.getAllAlbums();// get all albums
        res.json(albumsList);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const albumList = await album.getAlbum(req.params.id);
        res.json(albumList);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.patch('/:id', async (req, res) => {
    const requestBody = req.body;
    let updatedObject = {};
    try {
        const oldPost = await album.getAlbum(req.params.id);
        if (requestBody.title && requestBody.title !== oldPost.title) updatedObject.title = requestBody.title;
        if (requestBody.author && requestBody.author !== oldPost.author) updatedObject.author = requestBody.author;
        if (requestBody.songs && requestBody.songs !== oldPost.songs) updatedObject.songs = requestBody.songs;

    } catch (e) {
        res.status(404).json({ error: 'Album not found' });
        return;
    }

    try {
        const updatedBand = await album.updateAlbum(req.params.id, requestBody.title, requestBody.author, requestBody.songs);//bandsData.updateBand(req.params.id, updatedData);
        res.json(updatedBand);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.delete('/:id', async (req, res) => {
    if (!req.params.id) {
        res.status(400).json({ error: 'You must Supply id to delete' });
        return;
    }
    try {
        await album.getAlbum(req.params.id);
    } catch (e) {
        res.status(404).json({ error: 'Post not found' });
        return;
    }
    try {
        await album.removeAlbum(req.params.id);
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

module.exports = router;