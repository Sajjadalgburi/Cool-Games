const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

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
  },

  Mutation: {
    // Resolver function for creating a new user
    createUser: async (parent, { username, email, password }) => {
      try {
        // Create a new user with the provided username, email, and password
        const user = await User.create({ username, email, password });

        // Return the newly created user
        return user;
      } catch (err) {
        // Log any errors that occur during the process
        console.error(err);
      }
    },
  },
};

module.exports = resolvers;
