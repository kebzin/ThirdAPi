const express = require('express')
const router = express.Router();


const  {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
} = require('../controllers/user');

router.post('/user', createUser)
router.get('/users' , getAllUsers)
router.get('/user/:id', getOneUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser )

module.exports = router 