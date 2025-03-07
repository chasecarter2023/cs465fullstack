// app_server/routes/traveler.js
const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to Travlr' });
});

// About route
router.get('/about', (req, res) => {
  res.render('about', { title: 'About - Travlr Getaways' });
});

// Contact route
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

// Meals route
router.get('/meals', (req, res) => {
  res.render('meals', { title: 'Meals at Travlr' });
});

// News route
router.get('/news', (req, res) => {
  res.render('news', { title: 'Latest News' });
});

// Rooms route
router.get('/rooms', (req, res) => {
  res.render('rooms', { title: 'Rooms & Suites' });
});

// Travel route
router.get('/travel', (req, res) => {
  res.render('travel', { title: 'Travel With Us' });
});

module.exports = router;
