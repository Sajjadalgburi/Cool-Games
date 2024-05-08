// Import necessary modules from mongoose
const { connect, connection } = require('mongoose');

// Establish connection to MongoDB using the provided URI or a default local URI
connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/coolgames');

// Export the connection object to be used elsewhere in the application
module.exports = connection;
