const { User } = require('../models');

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

        // If user is not authenticated, throw a custom error
        throw new Error('Authentication required! Please log in.');
      } catch (err) {
        // Log any errors that occur during the process
        console.error(err);
      }
    },
  },
};

module.exports = resolvers;
