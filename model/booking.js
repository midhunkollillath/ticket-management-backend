const mongoose = require('mongoose')
const bookingSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    seatsSelected:[{
        row_id:{
            type:String,
            required:true
        },
        seat:{
            type:Number,
            required:true
        }
    }]
})
module.exports = mongoose.model('booking',bookingSchema)
