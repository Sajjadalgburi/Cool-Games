const { connect, connection, mongo } = require('mongoose');
require('dotenv').config();

const mongoDbUri = process.env.MONGODB_URI;

connect('mongodb://localhost:27017/coolGamesDb' || mongoDbUri);

module.exports = connection;
