// Destructure Schema and Model from mongoose
const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');

// Import SavedGames model
const savedGamesSchema = require('./SavedGames');

// import donation schema

const donationSchema = require('./Donations');

// Define userSchema using mongoose Schema
const userSchema = new Schema(
  {
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
    savedGames: {
      type: [savedGamesSchema],
      default: [],
    },

    donation: {
      type: [donationSchema],
      default: [],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

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

// Create a User model using the userSchema
const User = model('User', userSchema);

// Export the User model for use in other files
module.exports = User;
