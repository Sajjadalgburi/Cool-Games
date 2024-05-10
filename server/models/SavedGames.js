// Destructure Schema and Model from mongoose
const { Schema } = require('mongoose');

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

// Export the savedGamesSchema
module.exports = savedGamesSchema;
