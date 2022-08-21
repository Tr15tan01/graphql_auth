require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const uri = process.env.MONGO_URI
const port = process.env.PORT || 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => {
        console.log('mongo connected')
        return server.listen({ port: port })
    })
    .then((res) => {
        console.log(`🚀  Server ready at ${res.url}`)
    })