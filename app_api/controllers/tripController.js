// app_api/controllers/tripController.js
const Trip = require('../models/trip');

exports.getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (err) {
    console.error('Error retrieving trips:', err);
    res.status(500).json({ message: 'Server error while retrieving trips' });
  }
};

exports.getTripById = async (req, res) => {
  try {
    const trip = await Trip.findOne({ id: req.params.id });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(200).json(trip);
  } catch (err) {
    console.error('Error retrieving trip by ID:', err);
    res.status(500).json({ message: 'Server error while retrieving trip' });
  }
};
