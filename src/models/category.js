
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
    
    Description: {
        type: String,
        required: true,
    },
     location:{
        type:mongoose.Schema.Types.ObjectId,
         ref: 'location'
     },
     propertiesID:{
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'property' 
     },
   
     propertiesImage:[
        {
            type: String,
            
        }
     ]
},
{timestamps: true}
);


const Category = mongoose.model('category', category);


module.exports = Category;

