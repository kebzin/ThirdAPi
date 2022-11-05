

const User = require('../models/user')
const jwt = require('jsonwebtoken')




const signup =  async (req, res, next)=> {
    const content = req.body
    //  check if the user is already signed up
    let user = await User.findOne({email: content.email, phoneNumber: content.phoneNumber})
    try {
        if(user){
            return res.status(400).json({
                error: 'User already exists please login'
            })
        }

         // if the user is not signed up then create a new user
                // then hash the user password :: exaple 12345= "ertyuifogfjhdgfs34567ydgfb"
        const users = await User.create({...content})
            return res.status(201).json({data: users})
    } catch (error) {
         res.status(400).json({
            error: error
        })
        return next(error)
        
        
    }


   
}
const login = async (req, res, next) => {
    const content = req.body
    // if the user  input email,password and phoneNumber are found in the database then user will be able to log in 
    try {
    const user = await  User.findOne({email: content.email, phoneNumber: content.phoneNumber, password: content.password})
       if (!user) {
        return res.status(400).json({message: "incorrect user identity: try again "})
       }
       
       const {password, ...others} = user // the user password will not be send when returning the data
         const token = await jwt.sign({id: user._id}, "secretkey") // giving access token to the user when login succesfull
         res.cookie('accessToken', token,{
            httpOnly: true,
            // maxAge: 1000*60*60*24*365,
            secure: true,
            
         }).status(200).json({data: others})
       
    }
    catch (error) {
        res.status(400).json({message: error.message})
        return next(error)
    }
}

const logout = async(req, res, next) => {
    try {
       await res.clearCookie('accessToken',{
       sameSite: true,
        secure: true,}).status(200).json({ message :"user logout successful"})

    } catch (error) {
        res.status(400).json({message: error.message})
        return next(error)
    }
    
    
    
}
const resetPassword = (req, res, next) => {}
const forgotPassword = (req, res, next) => {}



module.exports = {
  signup,
  login,
  logout,
  resetPassword,
  forgotPassword
}





