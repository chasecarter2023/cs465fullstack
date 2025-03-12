// appserver/routes/traveler.js
const express = require('express');
const router = express.Router();

// Import the traveler controller
const travelerController = require('../controllers/travelerController');

// Define your routes and delegate to the controller methods
router.get('/', travelerController.home);
router.get('/about', travelerController.about);
router.get('/contact', travelerController.contact);
router.get('/meals', travelerController.meals);
router.get('/news', travelerController.news);
router.get('/rooms', travelerController.rooms);
router.get('/travel', travelerController.travel);

module.exports = router;
