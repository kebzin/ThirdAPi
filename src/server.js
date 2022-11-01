const mongoose = require('mongoose');

const URI = "mongodb+srv://kebba:Howareyoudoing1@rentalapp.9p5ry7s.mongodb.net/?retryWrites=true&w=majority"

const connection = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        });
        console.log('Connected to MongoDB');
    }catch (error ){
        console.log(error);
        console.log('Failed to connect to MongoDB');
    }
}

const db = ()=>{mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
});
}

module.exports = {connection, db}

