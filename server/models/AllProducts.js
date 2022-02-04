const mongoose = require('mongoose')
const Keyboard = require('./Keyboard')
const Monitor = require('./Monitor')
const Mouse = require('./Mouse')

const AllProductsSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique: true
    },
    img: {
        type:String,
        required:true
    },
    price: {
        type:String,
        required:true
    }
})




module.exports = mongoose.model('AllProducts',AllProductsSchema)