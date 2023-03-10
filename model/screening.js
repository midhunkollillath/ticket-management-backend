const mongoose  = require('mongoose')

const screeningScheme = new mongoose.Schema({
    movie :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"movie",
    },
    screen:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"screen",
    },
    startTime:{
        type:Date,
        required:true,
    },
    endTime:{
        type:Date,
        required:true,
    },
    cancelled:{
        type:Boolean,
        default:false,
    }

})
module.exports = mongoose.model('screening',screeningScheme)