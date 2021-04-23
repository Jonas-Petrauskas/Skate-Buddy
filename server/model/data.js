const mongoose = require('./index')

const Schema = mongoose.Schema

const skateBuddySchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  }
})

const Events = mongoose.model('Skate', skateBuddySchema)

module.exports = Events
