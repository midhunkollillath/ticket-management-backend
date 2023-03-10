const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    director:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true
    },
    summary : {
        type:String,
        required:true
    },
    cast:{
        type:String,
        required:true
    },
    
})
module.exports = mongoose.model('movie',movieSchema)

    
