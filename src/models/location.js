const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    locationName: {
        type: String,
        required: true,
        trim: true,
     
        
    },
    locationImage:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        
        
    },
    user:{
        type:mongoose.Schema.Types.ObjectId, ref: 'user'
    }

},
     {timestamps: true});


     const Location = mongoose.model('location', locationSchema)


     module.exports = Location;