
const express = require('express');
const router = express.Router();
const data = require('../data/bands');
// const bandsData = require()




router.post('/', async (req, res) => {
    const bandsPostData = req.body;
    console.log(bandsPostData);
    if (!bandsPostData.bandName) {
        res.status(400).json({ error: 'You must provide band name' });
        return;
    }
    if (!bandsPostData.bandMembers) {
        res.status(400).json({ error: 'You must provide band Member' });
        return;
    }
    if (!bandsPostData.yearFormed) {
        res.status(400).json({ error: 'You must provide year formed' });
        return;
    }
    if (!bandsPostData.genres) {
        res.status(400).json({ error: 'You must provide genre' });
        return;
    }
    // if (!bandsPostData.albums) {
    //     res.status(400).json({ error: 'You must provide album' });
    //     return;
    // }
    if (!bandsPostData.recordLabel) {
        res.status(400).json({ error: 'You must provide recordlabel' });
        return;
    }
    try {
        const { bandName, bandMembers, yearFormed, genres, albums, recordLabel } = bandsPostData;
        const newPost = await data.addBand(bandName, bandMembers, yearFormed, genres, albums, recordLabel);
        res.json(newPost);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.get('/', async (req, res) => {
    try {
        const bandList = await data.getAllBands();
        res.json(bandList);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const bandList = await data.getBand(req.params.id);
        res.json(bandList);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.
    put('/:id', async (req, res) => {
        const updatedData = req.body;
        if (!updatedData.bandName || !updatedData.bandMembers || !updatedData.yearFormed || !updatedData.genres || !updatedData.recordLabel) {
            res.status(400).json({ error: 'Supply All fields' });
            return;
        }
        try {
            await data.getBand(req.params.id);// bandsData.getBand(req.params.id);
        } catch (e) {
            res.status(404).json({ error: 'band not found' });
            return;
        }

        try {
            const updatedBand = await data.updateBand(req.params.id, updatedData.bandName, updatedData.bandMembers, updatedData.yearFormed, updatedData.genres, updatedData.recordLabel);//bandsData.updateBand(req.params.id, updatedData);
            res.json(updatedBand);
        } catch (e) {
            res.status(500).json({ error: e });
        }
    });

router.patch('/:id', async (req, res) => {
    const requestBody = req.body;
    let updatedObject = {};
    try {
        const oldPost = await data.getBand(req.params.id);
        if (requestBody.bandName && requestBody.bandName !== oldPost.bandName) updatedObject.bandName = requestBody.bandName;
        if (requestBody.bandMembers && requestBody.bandMembers !== oldPost.bandMembers) updatedObject.bandMembers = requestBody.bandMembers;
        if (requestBody.yearFormed && requestBody.yearFormed !== oldPost.yearFormed) updatedObject.yearFormed = requestBody.yearFormed;
        if (requestBody.genres && requestBody.genres !== oldPost.genres)
            updatedObject.genres = requestBody.genres;
        if (requestBody.recordLabel && requestBody.recordLabel !== oldPost.recordLabel)
            updatedObject.recordLabel = requestBody.recordLabel;
    } catch (e) {
        res.status(404).json({ error: 'Post not found' });
        return;
    }

    try {
        const updatedBand = await data.updateBand(req.params.id, requestBody.bandName, requestBody.bandMembers, requestBody.yearFormed, requestBody.genres, requestBody.recordLabel);
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
        await data.getBand(req.params.id);
    } catch (e) {
        res.status(404).json({ error: 'Post not found' });
        return;
    }
    try {
        await data.removeBand(req.params.id);
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});


module.exports = router;