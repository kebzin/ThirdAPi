
//  require express 
const express = require('express');
const router = express.Router()

// property router 

const {
    createProperty,
    properties,
    updateProperty,
    deleteProperty,
    singleProperty 
} = require('../controllers/property')

router.post('/property', createProperty )
router.get('/properties', properties)
router.put('/property/:id', updateProperty)
router.delete('/property/:id', deleteProperty)
router.get('/property/:id',singleProperty)

module.exports = router
