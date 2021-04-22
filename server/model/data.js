const mongoose = require('./index');

const Schema = mongoose.Schema;

const skateBuddySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  // },
  // image: {
  //   type: String
  },
  description: {
    type: String,
    required: true
  }
});

const Events = mongoose.model('Skate', skateBuddySchema);

module.exports = Events;