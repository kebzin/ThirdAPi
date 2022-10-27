const { response } = require('express')
const Location = require('../models/location')


const creatLocation = async (req, res, next) => {
    const content = req.body
    try {
        const location = await Location.create({...content})
        res.status(201).json(location)
    }
    catch (error) {
        next(error)
        return res.status(500).json({data: {error: error}})
    }
    

}

const getLocations = async (req, res, next) => {
    try {
        const locations = await Location.find()
        res.status(200).json({data: locations})
    }
    catch (error) {
        next(error)
        return res.status(500).json({ error: error})
    

    }
}

const updateLocation = async (req, res, next) => {
    const id = req.params.id
    try {
        const location = await Location.findByIdAndUpdate({_id : id})
        res.status(200).json({data: location})
    } 
    catch (error) {
        next(error)
    return res.status(500).json({error: error})
    }
}


const deleteLocation = async (req, res, next) => {
    const id = req.params.id
    try {
        const location = await Location.findByIdAndRemove({_id : id})
        res.status(200).json({data: location})
    } catch (error) {
         next(error)
         return res.status(500).json({error: error}) 
    }
}


module.exports = {
    creatLocation,
    getLocations,
    deleteLocation,
    updateLocation,
}
