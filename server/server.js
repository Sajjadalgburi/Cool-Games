// Initiate the Apollo Server and define the Express.js server

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const { start } = require('repl');

// Define the Express.js application
const app = express();

// Define the port for the Express.js server
const PORT = process.env.PORT || 3001;

// Define the Apollo Server and apply the Express.js application as middleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
