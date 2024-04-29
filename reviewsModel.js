const mongoose = require('mongoose');

// Create a schema for the reviews.

const reviewSchema =  new mongoose.Schema({
    text : {
        type : String,
        required : true,
    },
    rating :{
        type : Number,
        required : true,
    },
    author :{
        type : String
    },
    description :{
        type :String,
    },
    images:[String],
    createdAt : {
        type : Date,
        default : new Date(),
    },
    updatedAt : {
        type : Date,
        default : new Date(),
    }
})

const reviewModel = mongoose.model('Reviews' , reviewSchema);
module.exports = reviewModel;
