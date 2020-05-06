const {ApolloServer} =  require('apollo-server');
const typeDefs = require('./schema').schema;
const resolvers = require('./resolver').resolvers;

//TO-DO: 
// 1) move type filtering to database/sql, if possible
// 2) do some sort of string format checking, so searches become case insensitive

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});