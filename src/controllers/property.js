const mongoose = require('mongoose');
const express = require('express');

const Property = require('../models/property')

// create a new property
const createProperty = async (req, res, next) => {
    const content = req.body
    console.log(content);
  try {
    const property = await Property.create({...content})
    res.status(2001).json({data: property})
   
  } catch (err) {
    res.status(500).json({message: err.message})
    return next(err);

  }
};

// get all properties
const properties = async (req, res, next) => {
  try {
    const properties = await Property.find().populate("User")
    res.status(200).json({data: properties})
  }
  catch (err) {
    res.status(500).json({message: err.message})
    return next(err);
  }
}

// get a single property

const property = async (req, res, next) => {
  const id = req.params.id
  try {
    const property = await Property.findById({_id: id})
    if (!property){
      res.status(404).json({message: 'Property not found'})
    }
    res.status(200).json({data: property})
  }
  catch (err) {
    res.status(500).json({message: err.message})
    return next(err);
  }
}

// update a property
const updateProperty = async (req, res, next) =>{
  const id = req.params.id
  const content = req.body
  try {
    const property = await Property.findByIdAndUpdate(
      {_id: id}, content,
      {new: true})

      if (!property){
        res.status(404).json({message: 'Property not found'})
      }
      res.status(200).json({data: property})
    }
    catch (err) {
      res.status(500).json({message: err.message})
      return next(err);
    }

      
}

// delete a property
const deleteProperty = async (req, res, next) =>{
  const id = req.params.id
  try {
    const property = await Property.findByIdAndRemove({_id: id})
    if (!property){
      res.status(404).json({message: 'Property not found'})
    }
    res.status(200).json({data: property})
  }
  catch (err) {
    res.status(500).json({message: err.message})
    return next(err);
  }
}
//get single property
const singleProperty = async (req, res, next) => {
  const id = req.params.id
  try {
    const property = await Property.findById({_id: id})
    if (!property){
      res.status(404).json({message: 'Property not found'})
  }
  res.status(200).json({data: property})
  }
  catch (err) {
    res.status(500).json({message: err.message})
    return next(err);
  }
}

module.exports={
  createProperty,
  properties,
  updateProperty,
  deleteProperty,
  singleProperty
}


