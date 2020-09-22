const { string } = require('joi');
const mongoose = require('mongoose');

const CommentsSchema = new mongoose.Schema({
    author: {
        type: String,
    },
    message: {
      type: String,
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comments', CommentsSchema);