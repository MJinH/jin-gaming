const mongoose = require('mongoose')

const KeyboardSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    img: {
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})




module.exports = mongoose.model('Keyboard', KeyboardSchema)