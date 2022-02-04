// const Keyboard = require('./models/Keyboard')
// const Monitor = require('./models/Monitor')
// const Mouse = require('./models/Mouse')
// const AllProducts = require('./models/AllProducts')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const schema = require('./schema/schema')
const {graphqlHTTP} = require('express-graphql')
const keyboard = require('./crawling/keyboard')
const monitor = require('./crawling/monitor')
const mouse = require('./crawling/mouse')
const app = express()
dotenv.config()



app.use(cors())
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))



mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(async ()=> {
    try{
        await keyboard('1')
        await monitor('1')
        await mouse('1')
    } catch(err) {
        console.log(err)
    }
    console.log('Connected to MongoDB server')
})

const startSever = () => {
    try {
        app.listen(8000,() => 
            console.log('Server is running')
        )
    } catch(err) {
        console.log(err)
    }
}



startSever()




// .then(async() => {
//     try {
//         await AllProducts.deleteMany({})
//         await Keyboard.deleteMany({})
//         await Monitor.deleteMany({})
//         await Mouse.deleteMany({})
//     } catch(err) {
//         console.log(err)
//     }
// })