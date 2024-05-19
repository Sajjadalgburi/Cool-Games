// Destructure Schema and Model from mongoose
const { Schema } = require('mongoose');

// Define the schema for saved games
const savedGamesSchema = new Schema({
  // id filed for the game
  game_id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
  // URL to the game image field (string)
  image: {
    type: String,
  },
  // Game rating field (number), required
});

// Export the savedGamesSchema
module.exports = savedGamesSchema;
