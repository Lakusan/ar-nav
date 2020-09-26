const express = require('express');
const router = express.Router();
const Locations = require('../model/Locations');
const { route } = require('./auth');

//LOCATIONS - POINTS OF INTEREST
//Get all Locations
router.get('/',  async (req, res) => {
    try {
        const locations = await Locations.find()
        if (!locations) throw new Error('No Locations')
        const sorted = locations.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        
        res.status(200).json(sorted)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//Get Location by ID
router.get('/:id', async (req, res) => {
    try {
        const location = await Locations.findById(req.params.id);
        if (!location)  throw new Error('id not found');
        res.send(location);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//For Admin to add new Point of Interest
router.post('/', async (req, res, next) => {
    const newLocation = new Locations(req.body);
    try {
        const location = await newLocation.save();
        if (!location) throw new Error('Something went wrong saving the location');
        res.status(200).json(location);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//Change values of existing Point of Interest
router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = await Locations.findByIdAndUpdate(id, req.body);
        if (!response) throw Error('Something went wrong ');
        const updated = { ...response._doc, ...req.body };
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//For Admin to delete Point of Interest
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const removed = await Locations.findByIdAndDelete(id);
        if (!removed) throw Error('Something went wrong ');
        res.status(200).json(removed);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//POSTS & COMMENTS

//ADD POST
//CHANGE POST IF OWNER
router.put('/post/:id', async(req, res) => {
    const { id } = req.params

    try {
        const response = await Locations.findByIdAndUpdate(id, req.body);
        if (!response) throw Error('Something went wrong ');
        const updated = { ...response._doc, ...req.body };
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//DELETE POST AND CORRESPONDING COMMENTS IF ADMIN / OWNER
router.delete('/post/:id', async(req, res) => {

});

//ADD COMMENT TO POST
router.post('/comment/:id', async(req, res) => {

});

//CHANGE COMMENT IF OWNER
router.put('/comment/:id', async(req, res) => {

});

// DELETE POST IF ADMIN OR OWNER
router.delete('/comment/:id', async(req, res) => {

});


//Add a new Comment
// If Comment Change own comment if Owner
router.put('/comment/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = await Locations.findByIdAndUpdate(id, req.body);
        if (!response) throw Error('Something went wrong ');
        const updated = { ...response._doc, ...req.body };
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})



//Add Comment on Comment
// search for initial comment and add text to comment
//if there is a comment already search for new 
//make array of comments which grows


//Delete Comment if Admin or Owner
//!!!!!!!!!!!!!!!!!!!!!!!TODO CHECK IF PERMISSION
router.delete('/comment/:id', async (req, res) => {
    const { id } = req.params
    try {
        const removed = await Locations.findByIdAndDelete(id);
        if (!removed) throw Error('Something went wrong ');
        res.status(200).json(removed);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


module.exports = router;