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