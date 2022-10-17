const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./db/schema');

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  server.applyMiddleware({ app });

  await new Promise(resolve => app.listen({ port: 1234 }, resolve));
  console.log(`🚀 Server ready at http://localhost:1234${server.graphqlPath}`);
  return { server, app };
}

startApolloServer()