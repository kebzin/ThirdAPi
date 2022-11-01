
const express = require('express')
const router = express.Router();



const { 
    postCategory ,
    getCategories,
    updateCategory,
    deleteCategory
} = require('../controllers/category');


// categories router
router.post('/postCategory',  postCategory)
router.get('/categories', getCategories)
router.put('/category/:id', updateCategory)
router.delete('/category/:id', deleteCategory)


module.exports = router;
