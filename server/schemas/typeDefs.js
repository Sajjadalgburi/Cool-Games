// Importing graphql-tag library for creating GraphQL schema
const gql = require('graphql-tag');

// Defining GraphQL schema using gql template literal
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedGames: [Game]
  }

  type Game {
    _id: ID!
    title: String!
    description: String!
    rating: String!
    genre: String
    link: String
    image: String
  }

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  input GameInput {
    _id: ID!
    title: String!
    description: String!
    rating: String!
    genre: String
    link: String
    image: String
  }
`;

// Exporting the defined typeDefs for use in other modules
module.exports = typeDefs;
