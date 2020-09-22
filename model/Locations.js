const { string } = require('joi');
const mongoose = require('mongoose');

const LocationsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    lat: {
        type: String,
    },
    lon:{
        type: String,
        required: true,
        max: 1024,
        min: 6
    }, 
    description: {
        type: String,
    },
    post: {
        data: {
            author: String,
            message: String,
            
            comment: {
                author: String,
                message: String,
                
            }
        }
    },
    model: {
        type: String,
    },
    author:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Locations', LocationsSchema);