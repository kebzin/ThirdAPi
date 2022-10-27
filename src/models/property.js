const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const property = new Schema({
    PropertyName: {
        type: String,
        require: true
    },
    Category:{
       type: mongoose.Schema.Types.ObjectId, ref: 'category'
    },

    User: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    },

},
{timestamps: true}
)
const Property = mongoose.model('property',property);

module.exports = Property;
