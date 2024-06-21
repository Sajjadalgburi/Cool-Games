const { connect, connection } = require('mongoose');
require('dotenv').config();

const mongoDbUri = process.env.MONGODB_URI;
const local = 'mongodb://localhost:27017/coolgames';

// Check if mongoDbUri is defined and use it, otherwise use the local URI
const uri = mongoDbUri || local;

connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = connection;
