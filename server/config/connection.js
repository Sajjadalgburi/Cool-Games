require('dotenv').config();

// Import necessary modules from mongoose
const { connect, connection } = require('mongoose');

// Establish connection to MongoDB using the provided URI or a default
connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/coolgames')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Export the connection object to be used elsewhere in the application
module.exports = connection;
