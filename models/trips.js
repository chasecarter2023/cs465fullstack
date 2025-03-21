const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  description1: { type: String, required: true },
  description2: { type: String, required: true }
});

module.exports = mongoose.model('Trip', tripSchema);
