// app_api/models/trip.js
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  description1: { type: String, required: true },
  description2: { type: String, required: true }
});

// Check if it exists. If yes, use it; or, get a new one.
module.exports = mongoose.models.Trip || mongoose.model('Trip', tripSchema);
