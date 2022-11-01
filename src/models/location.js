const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({

    locationImage:{
        type: String,
        trim: true, 
    },
    longititude:{
        type: String,
        trim: true,
    },
    latitude:{
        type: String,
        trim: true,
    },
    country:{
        type: String,
        trim: true,
    },
    city:{
        type: String,
        trim: true,
    },
    currency:{
        type: String,
        trim: true,
    },
    place:{
        type:String,

    },
    drivingDist:{
        type:String,
        trim: true,
    },
    walkingDist:{
        type:String,
        trim: true,
    },


    user:{
        type:mongoose.Schema.Types.ObjectId, ref: 'user'
    }

},
     {timestamps: true});


     const Location = mongoose.model('location', locationSchema)


     module.exports = Location;