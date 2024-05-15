const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const axios = require('axios');
require('dotenv').config();
const rapidApiKey = process.env.RAPID_API_KEY;

console.log(rapidApiKey);

const resolvers = {
  Query: {
    // Resolver function for fetching the logged-in user
    me: async (parent, args, context) => {
      try {
        // Check if user is authenticated
        if (context.user) {
          // Fetch and return the user by their ID
          return await User.findById(context.user._id);
        }

        // If user is not authenticated, throw an AuthenticationError
        throw AuthenticationError;
      } catch (err) {
        // Log any errors that occur during the process
        console.error(err);
      }
    },

    // Resolver function for fetching popular games
    popularGames: async () => {
      const options = {
        method: 'GET',
        url: 'https://opencritic-api.p.rapidapi.com/game',
        params: {
          sort: 'score',
          skip: '4',
        },

        headers: {
          // Use the RapidAPI key to make requests to the OpenCritic API
          'X-RapidAPI-Key':
            '935bae58b7msh586cb15b8a4de89p15ecacjsn051b09981f0b',
          'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);

        if (response.status !== 200) {
          throw new Error(
            `Failed to fetch popular games: ${response.statusText}`,
          );
        }

        return response.data.map((game) => ({
          game_id: game.id,
          title: game.name,
          rating: game.topCriticScore,
          link: game.url,
          releaseDate: game.firstReleaseDate,
          // https://img.opencritic.com/ the actual link
          // game/5434/XYHLvQr3.jpg
          image: game.images.banner.og
            ? `https://img.opencritic.com/${game.images.banner.og}`
            : `https://via.placeholder.com/150`,
        }));
      } catch (error) {
        console.error('Error fetching popular games:', error);
        throw new Error('Failed to fetch popular games');
      }
    },
  },

  Mutation: {
    // Resolver function for creating a new user
    createUser: async (parent, { username, email, password }) => {
      try {
        // Create a new user with the provided username, email, and password
        const user = await User.create({ username, email, password });

        // If the user creation fails, throw an error
        if (!user) {
          throw new Error('Failed to create user');
        }

        // Create a new token for the newly created user
        const token = signToken(user);

        // Return the newly created user
        return { user, token };
      } catch (err) {
        // Log any errors that occur during the process
        console.error(err);
      }
    },

    // Resolver function for logging in a user
    login: async (parent, { email, password }) => {
      try {
        // Find a user with the provided email
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }

        // Check if the provided password matches the stored password
        const checkPassword = await user.isCorrectPassword(password);

        if (!checkPassword) {
          throw new AuthenticationError('Incorrect credentials');
        }

        const token = signToken(user);

        return { token, user };
      } catch (err) {
        console.error(err);
      }
    },

    // Resolver function for saving a game to a user's profile
    saveGame: async (parent, { gameData }, context) => {
      try {
        if (context.user) {
          // Update the user's savedGames array with the new gameData
          return (updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedGames: gameData } },
            { new: true, runValidators: true },
          ));
        }

        throw new AuthenticationError(
          'You need to be logged in to save a game!',
        );
      } catch (err) {
        console.error(err);
      }
    },

    // Resolver function for removing a game from a user's profile
    removeGame: async (parent, { gameId }, context) => {
      try {
        if (context.user) {
          // Update the user's savedGames array by removing the game with the provided gameId
          return (updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: { savedGames: { gameId } } },
            { new: true },
          ));
        }

        throw new AuthenticationError(
          'You need to be logged in to remove a game!',
        );
      } catch (err) {
        console.error(err);
      }
    },
  },
};

module.exports = resolvers;
