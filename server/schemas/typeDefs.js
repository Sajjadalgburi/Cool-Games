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
    link: String!
    releaseDate: String
    image: String
    description: String
    ageRating: String
    trailers: [String]
    genres: [String]
    platforms: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Donation {
    _id: ID
    amount: Float
    date: String
  }

  input DonationInput {
    amount: Float
  }

  type Checkout {
    session: ID
  }

  input GameInput {
    game_id: ID!
    title: String!
    rating: String!
    link: String!
    releaseDate: String
    image: String
    description: String
    ageRating: String
    trailers: [String]
    genres: [String]
    platforms: [String]
  }

  type Query {
    me: User
    ## Defining a new query to fetch popular games from the backend then display them on the front end
    popularGames: [Game]! # New query to fetch popular games
    searchGames(game: String!): [Game] # New query to search for games
    singleGame(game_id: ID!): Game # New query to fetch a single game
    categoryGameFetch(category: String!): [Game] # New query to fetch game categories
    checkout(donation: DonationInput!): Checkout
  }

  ## Specifying the type of data that can be queried from the server
  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveGame(gameInput: GameInput!): User
    removeGame(game_id: ID!): User
  }
`;

// Exporting the defined typeDefs for use in other modules
module.exports = typeDefs;
