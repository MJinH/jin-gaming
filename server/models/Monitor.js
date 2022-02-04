const mongoose = require('mongoose')

const MonitorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    img:{
        type:String
    },
    price:{
        type:String
    }
})


module.exports = mongoose.model('Monitor',MonitorSchema)