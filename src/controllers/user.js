const User = require('../models/user');

const createUser = async (req, res, next) => {
    const content = req.body
    
    console.log(content);
    try {
        const user = await User.create({...content});
    res.status(201).json({data: user});}
    catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}



// getting all users

const getAllUsers = async (req, res, next) => {
    let users
    try {
      users = await User.find()
      res.status(200).json({data: users})   
    }catch(error){
        console.log(error);
    }

    }


    // getOne user
const getOneUser = async (req, res, next) => {
    const id = req.params.id;
    try{
        const user = await User.findOne({_id: id})
        
        if (!user){
            res.status(404).json({message: 'User not found'})
        }
        res.status(200).json({data: user})
    }   
    catch(error){
        console.log(error);
        return next(error);

    }
}

// update a user

const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const content = req.body;
    try{
        const user = await User.findOneAndUpdate(
            {_id: id}, content, 
            {new: true}
            )
        if (!user){
            res.status(404).json({message: 'User not found'})
        }
        res.status(200).json({data: user})
        }
        catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
        return next(error)

        }
}

// delete a user
const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    try{
        const user = await User.findOneAndRemove({_id: id})
        if (!user){
            res.status(404).json({message: 'User not found'})
        }
        return res.status(200).json({data: user})
    }
    catch(error){
        console.log(error);
    res.status(500).json({message: error.message});
    return next(error)
}
}

module.exports = {createUser, getAllUsers,getOneUser, updateUser, deleteUser}