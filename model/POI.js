const mongoose = require('mongoose');

const POISchema = new mongoose.Schema({
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
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('POI', userSchema);