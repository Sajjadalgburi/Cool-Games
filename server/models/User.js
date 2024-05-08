// Import mongoose library
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Destructure Schema and Model from mongoose
const { Schema, Model } = mongoose;

// Import SavedGames model (assuming it's defined in 'SavedGames.js')
const SavedGames = require('./SavedGames');

// Define UserSchema using mongoose Schema
const UserSchema = new Schema({
  // Define username field with specific properties
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 1,
  },
  // Define email field with specific properties (using regex for email format)
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  // Define password field with specific properties
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  // Define savedGames field as an array of SavedGames (subdocument referencing)
  savedGames: [SavedGames],
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// pre-save middleware to create password hash
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Create a User model using the UserSchema
const User = Model('User', UserSchema);

// Export the User model for use in other files
module.exports = User;
