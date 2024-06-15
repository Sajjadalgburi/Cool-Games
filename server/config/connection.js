const { connect, connection } = require('mongoose');
require('dotenv').config();

connect('mongodb://localhost:27017/coolGamesDb' || process.env.MONGODB_URI);

module.exports = connection;
