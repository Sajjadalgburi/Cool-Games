// Import mongoose library
const mongoose = require('mongoose');

// Destructure Schema and Model from mongoose
const { Schema, model: Model } = mongoose;

// Define the schema for saved games
const savedGamesSchema = new Schema({
  // Game title field (string), required and trimmed
  title: {
    type: String,
    required: true,
    trim: true,
  },
  // Game description field (string), required
  description: {
    type: String,
    required: true,
  },
  // Game genre field (string), optional and trimmed
  genre: {
    type: String,
    required: false,
    trim: true,
  },
  link: {
    type: String,
  },
  // URL to the game image field (string)
  image: {
    type: String,
  },
  // Game rating field (number), required
  rating: {
    type: Number,
    required: true,
  },
});

// Create the SavedGames model using the savedGamesSchema
const SavedGames = Model('SavedGames', savedGamesSchema);

// Export the SavedGames model for use in other files
module.exports = SavedGames;
