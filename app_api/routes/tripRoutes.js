// app_api/routes/tripRoutes.js
const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

// GET all trips
router.get('/trips', tripController.getAllTrips);

// GET a single trip by ID
router.get('/trips/:id', tripController.getTripById);

module.exports = router;
