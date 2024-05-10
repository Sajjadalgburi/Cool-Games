// Initiate the Apollo Server and define the Express.js server

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const { expressMiddleware } = require('@apollo/server/express4');

// Define the Express.js application
const app = express();

// Define the port for the Express.js server
const PORT = process.env.PORT || 3001;

// Define the Apollo Server and apply the Express.js application as middleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Define the startApolloServer function
const startApolloServer = async () => {
  await server.start();

  // aplying required middleware for application
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use('/graphql', expressMiddleware(server, { context: authMiddleware }));

  // serving different files based on the environment
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  // Connect to the database and start the Express.js server
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
