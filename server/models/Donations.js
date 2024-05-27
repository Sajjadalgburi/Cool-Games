const { Schema } = require('mongoose');

const donationSchema = new Schema({
  amount: {
    type: Number,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = donationSchema;
