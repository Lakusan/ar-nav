const mongoose = require('mongoose');





const PostsSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: { 
        type: String,
    },
    author: {
        type: String,
    },
    locationID: {
        type: String,
    },
    comments: [
        {
            author: {
                type: String,
            },
            comment: {
                type: String,
            },
        }
    ]

});

module.exports = mongoose.model('Posts', PostsSchema);

