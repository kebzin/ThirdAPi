const express = require('express')
const router = express.Router();

const  {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
} = require('../controllers/user');
const {
    createProperty,
    properties,
    updateProperty,
    deleteProperty,
    singleProperty 
} = require('../controllers/property')
const { 
    postCategory ,
    getCategories,
    updateCategory,
    deleteCategory
} = require('../controllers/category');

const {
    creatLocation,
    getLocations,
    deleteLocation,
    updateLocation,
    

} = require('../controllers/location')


router.post('/register', createUser)
router.get('/users' , getAllUsers)
router.get('/user/:id', getOneUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser )



// categories router
router.post('/postCategory',  postCategory)
router.get('/categories', getCategories)
router.put('/category/:id', updateCategory)
router.delete('/category/:id', deleteCategory)


// property router
router.post('/property', createProperty )
router.get('/properties', properties)
router.put('/property/:id', updateProperty)
router.delete('/property/:id', deleteProperty)
router.get('/property/:id',singleProperty)

// location router
router.post('/creatLocation', creatLocation)
router.get('/location', getLocations)
router.put('/location/:', updateLocation)
router.delete('/location/:id', deleteLocation)


module.exports = router;