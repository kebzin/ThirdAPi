

const Category = require('../models/category')
// create a new category
const postCategory = async (req, res, next) => {
    const content = req.body
    console.log(content);
    try {

        const category = await Category.create({...content})
        res.status(201).json({data: category})
    } catch (error) {
        next(error)
        return res.status(500).json({message: error})
        

    }
}
// gett all categories
const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find()
        res.status(200).json({data: categories})
    } catch (error) {
        next(error)
        return res.status(500).json({message: error})
        
    }
}  
// update category
const updateCategory = async (req, res, next) => {
    const id = req.params.body._id
    const content = req.body
    try {
        const category = await Category.findOneAndUpdate({_id: id}
            ,content,{new: true}, )
            if (!category){
                return res.status(404).json({message: 'Category not found'})
            }
        res.status(200).json({data: category})
    }
    catch (error) {
        next(error)
        return res.status(500).json({message: error})
}
}
// delete category
const deleteCategory = async (req, res, next) => {
    const id = req.params.id
    try {
        
        const category = await Category.findOneAndDelete({id})
        if (!category){
            return res.status(404).json({message: 'category not found'})
        }
        res.status(200).json({data: category})
       
    }
    catch (error) {
        next(error)
        return res.status(500).json({message: error})
}
}
// get single category
const getcategory = async (req, res, next) =>{
    const id = req.params.id;
    
    try{
        const category = await Category.findById({_id:id})
        if (!category){
            res.status(404).json({message: 'Category not found'})
        }
        res.status(200).json({data:category})
    }
    catch (err){
        next(err)
        return res.status(500).json({message: err})
    }
}


module.exports = {
    postCategory,
    getCategories,
    updateCategory,
    deleteCategory,
    getcategory
}


