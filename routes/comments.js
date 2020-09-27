const express = require('express');
const User = require('../model/User');
const Locations=  require('../model/Locations');
const Posts=  require('../model/Posts');
const router = express.Router();
const verify = require('./verifyToken');

router.get('/', async (req, res) => {
    try{
    const postItems = await Posts.find();
    if (!postItems) throw new Error('Something with DB went wrong');
    const sortedItems = postItems.sort((a,b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
    res.status(200).json(sortedItems);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
    // res.render('comments', { title: 'Comments'});
})

router.get('/:id', async (req, res) => {
    try {
        const post = await Posts.find({locationID: req.params.id});
        if (!post)  throw new Error('id not found');
        res.send(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/', async (req, res) => {
 
    const titleExist = await Posts.findOne({ title: req.body.title });
    if (titleExist) return res.status(400).send('Post already exists');
     //Create New Post
    const post = new Posts({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
   
    })
  try {
    const savedPost = await post.save();
 
  } catch (err) {
    res.status(400).send(err);
  }
 
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    

    try {
        const response = await Posts.findByIdAndUpdate(id, {$push: req.body})
        if (!response) throw Error('Something went wrong ')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
  
    try {
        const removed = await Posts.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;