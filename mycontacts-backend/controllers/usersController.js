const asyncHandler = require('express-async-handler')
const bcrypt =  require('bcrypt')
const User = require("../models/userModel")



// @desc Register a user
// @route GET/api/user/register
//@access public

const registerUser = asyncHandler (async  (req,res)=>{
    const {username,email,password } = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("all fields are the mandatory !")
    }
    const userAvailable = await User.findOne({ email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered!")
    }

    //Hash Password
    const hashPassword = await bcrypt.hash(password,10);
    console.log("HashPassword",hashPassword)
    const user= await User.create({
        username,
        email,
        password: hashPassword,

    })

console.log(registerUser);
    res.json({messge:"Register the user"});
    
});


// @desc login user
// @route GET/api/user/login
//@access public

// const loginUser = asyncHandler(async (req,res)=>{
//     res.json({messge:"login user"});

// });


// @desc curren  user info
// @route GET/api/user/current
//@access private
// const currentUser =asyncHandler(async (req,res)=>{
//     res.json({messge:"Current users information"});

// });

module.exports = {
    registerUser,
    // loginUser,
    // currentUser
}