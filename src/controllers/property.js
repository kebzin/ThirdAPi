const mongoose = require('mongoose');
const express = require('express');

const Property = require('../models/property')

// create a new property
const createProperty = async (req, res, next) => {
    const content = req.body
    console.log(content);
  try {
    const property = await property.create({...content})
    res.status(2001).json({data: property})
   
  } catch (err) {
    res.status(500).json({message: err.message})
    return next(err);

  }
};

module.exports = {
    createProperty
}
