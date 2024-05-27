const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/CoolGames';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Connection error:', error);
});

db.once('open', () => {
  console.log('Database connection successful');
});

module.exports = db;
