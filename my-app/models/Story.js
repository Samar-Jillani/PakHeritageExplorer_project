const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  name: String,
  email: String, 
  description: String,
  locationVisited: String,
  visitDate: Date,
  rating: Number, 
  status: {
    type: String,
    default: 'approved'
  }
});

module.exports = mongoose.model('Story', storySchema);
