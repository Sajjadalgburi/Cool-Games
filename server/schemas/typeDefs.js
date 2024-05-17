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

  ## Defining a new type called Game to represent the data that will be fetched from the backend
  type Game {
    game_id: ID!
    title: String!
    rating: String!
    releaseDate: String
    link: String!
    image: String
  }

  type Query {
    me: User
    ## Defining a new query to fetch popular games from the backend then display them on the front end
    popularGames: [Game!] # New query to fetch popular games
  }

  type Auth {
    token: ID!
    user: User
  }

  input GameInput {
    game_id: ID!
    title: String!
    description: String!
    rating: String!
    genre: String
    link: String
    image: String
  }

  ## Specifying the type of data that can be queried from the server
  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveGame(GameInput: GameInput!): User
    removeGame(gameId: ID!): User
  }
`;

// Exporting the defined typeDefs for use in other modules
module.exports = typeDefs;
