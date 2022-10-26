
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const category = new Schema({
    categoryName: {
        type: String,
        required: true,
    },
    numberOfBedrooms: {
        type: Number,
        required: true,
    },
    numberOfBathrooms: {
        type: Number,
        required: true,
    },
    Price:{
        type: Number,
        required: true,
    },

    rating: {
        type: Number,
        required: true,
    },
    
    categoryDescription: {
        type: String,
        required: true,
    },
     location:{
        type:mongoose.Schema.Types.ObjectId, ref: 'location'
     },
   
},
{timestamps: true}
);


const Category = mongoose.model('category', category);

modules.exports = exports