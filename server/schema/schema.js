const graphql = require('graphql')
const AllProducts = require('../models/AllProducts')
const Keyboard = require('../models/Keyboard')
const Monitor = require('../models/Monitor')
const Mouse = require('../models/Mouse')

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString
} = graphql


const AllProductsType = new GraphQLObjectType({
    name:'allProducts',
    fields: () => ({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        img:{type:GraphQLString},
        price:{type:GraphQLString}
    })
})


const KeyboardType = new GraphQLObjectType({
    name:'Keyboard',
    fields: () => ({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        img:{type:GraphQLString},
        price:{type:GraphQLString}
    })
})

const MonitorType = new GraphQLObjectType({
    name:'Monitor',
    fields: () => ({
        id: {type:GraphQLID},
        name:{type:GraphQLString},
        img:{type:GraphQLString},
        price:{type:GraphQLString}
    })
})

const MouseType = new GraphQLObjectType({
    name:'Mouse',
    fields: () => ({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        img:{type:GraphQLString},
        price:{type:GraphQLString}
    })
})


const RootQuery = new GraphQLObjectType ({
    name: 'RootQuery',
    fields: {
        allProducts: {
            type:new GraphQLList(AllProductsType),
            resolve(parent,args) {
                return AllProducts.find({})
            }
        },
        keyboards: {
            type:new GraphQLList(KeyboardType),
            resolve(parent,args) {
                return Keyboard.find({})
            }
        },
        monitors: {
            type:new GraphQLList(MonitorType),
            resolve(parent,args) {
                return Monitor.find({})
            }
        },
        mouses: {
            type:new GraphQLList(MouseType),
            resolve(parent,args) {
                return Mouse.find({})
            }
        },
        findProduct: {
            type: AllProductsType,
            args:{name:{type:GraphQLString}},
            resolve(parent,args) {
                return AllProducts.findOne({name:args.name})
            }
        }
    }
})


module.exports = new graphql.GraphQLSchema({
    query: RootQuery
})