const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
    type: String,
    required: true,
    trim: true
},
  lastName: {
    type: String,
    required: true,
    trim: true,
},
 phoneNumber: {
    type: String,
    required: true,
    trim: true,
        
},
  email: {
    type: String,
    required: true,
},
  password: {
    type: String,
    required: true
},
vPassword: {
    type: String,
    required: true,
}

},
{timestamps: true}
);

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})


const User = mongoose.model('User', userSchema);

module.exports = User;

