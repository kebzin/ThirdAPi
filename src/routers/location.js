const express = require('express')
const router = express.Router();

const {
    creatLocation,
    getLocations,
    deleteLocation,
    updateLocation,
    

} = require('../controllers/location')

// location router
router.post('/creatLocation', creatLocation)
router.get('/location', getLocations)
router.put('/location/:', updateLocation)
router.delete('/location/:id', deleteLocation)


module.exports = router;