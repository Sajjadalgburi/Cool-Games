require('dotenv').config();
console.log(process.env.API_KEY); // This should log your API key

const { User } = require('../models');
const { signToken } = require('../utils/auth');
const axios = require('axios');
const {
  AuthenticationError,
  UserInputError, // Ensure correct casing for UserInputError
} = require('apollo-server-express');

// you can get a free API key by signing up at https://rapidapi.com/opencritic/api/opencritic
const rapidApiKey = process.env.API_KEY;

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
        throw new AuthenticationError('You need to be logged in');
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
          'X-RapidAPI-Key': rapidApiKey, // Use the RapidAPI key from environment variable
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
          // https://img.opencritic.com/ ! IMPORTANT ! this is the base URL for the images
          // game/5434/XYHLvQr3.jpg ! IMPORTANT ! this is the image path given by each game object
          image: game.images.banner.og
            ? `https://img.opencritic.com/${game.images.banner.og}`
            : `https://via.placeholder.com/150`,
        }));
      } catch (error) {
        console.error('Error fetching popular games:', error);
        throw new Error('Failed to fetch popular games');
      }
    },

    // Resolver function for searching games
    searchGames: async (parent, { game }) => {
      const options = {
        method: 'GET',
        url: 'https://opencritic-api.p.rapidapi.com/game/search',
        params: {
          criteria: game,
        },
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
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

        console.log(response.data);

        return response.data.map((game) => ({
          game_id: game.id,
          title: game.name,
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
          throw new AuthenticationError('Failed to create user');
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
    saveGame: async (parent, { gameInput }, context) => {
      try {
        if (!context.user) {
          throw new AuthenticationError('You must be logged in to save a game');
        }

        // Validate gameInput
        const { game_id, title, rating, link, releaseDate, image } = gameInput;
        if (!game_id || !title || !rating || !link) {
          throw new UserInputError(
            'Game input must include game_id, title, rating, and link',
          );
        }

        // Update the user's savedGames array with the new gameInput
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedGames: gameInput } },
          { new: true, runValidators: true },
        );

        if (!updatedUser) {
          throw new Error('User not found');
        }

        return updatedUser;
      } catch (err) {
        console.error(err);
        throw new Error('Error saving game');
      }
    },

    // Resolver function for removing a game from a user's profile
    removeGame: async (parent, { game_id }, context) => {
      try {
        if (context.user) {
          return await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { savedGames: { game_id } } },
            { new: true },
          );
        }

        throw new AuthenticationError(
          'You need to be logged in to remove a game',
        );
      } catch (err) {
        console.error(err);
      }
    },
  },
};

module.exports = resolvers;
