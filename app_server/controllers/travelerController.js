// appserver/controllers/travelerController.js

const fs = require('fs');

const travelerController = {
  // Home page handler
  home: (req, res) => {
    res.render('index', { title: 'Welcome to Travlr' });
  },

  // About page handler
  about: (req, res) => {
    res.render('about', { title: 'About - Travlr Getaways' });
  },

  // Contact page handler
  contact: (req, res) => {
    res.render('contact', { title: 'Contact Us' });
  },

  // Meals page handler
  meals: (req, res) => {
    res.render('meals', { title: 'Meals at Travlr' });
  },

  // News page handler
  news: (req, res) => {
    res.render('news', { title: 'Latest News' });
  },

  // Rooms page handler
  rooms: (req, res) => {
    res.render('rooms', { title: 'Rooms & Suites' });
  },

  // Travel page handler
  travel: (req, res) => {
    const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
    res.render('travel', { title: 'Travel With Us', trips: trips });
  },

  // New method: Render the edit trip form
  editTrip: (req, res) => {
    let trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
    let tripId = req.params.id;
    // Ensure that the IDs match by type (e.g., string vs number)
    let trip = trips.find(t => t.id === tripId);
    if (!trip) return res.status(404).send("Trip not found");
    res.render('editTrip', { title: 'Edit Trip', trip });
  },

  // New method: Process the update form submission
  updateTrip: (req, res) => {
    let trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
    let tripId = req.params.id;
    let tripIndex = trips.findIndex(t => t.id === tripId);
    if (tripIndex === -1) return res.status(404).send("Trip not found");

    // Update trip details from form data (make sure body-parser middleware is in use)
    trips[tripIndex] = {
      ...trips[tripIndex],
      name: req.body.name,
      image: req.body.image,
      description1: req.body.description1,
      description2: req.body.description2
    };

    fs.writeFileSync('./data/trips.json', JSON.stringify(trips, null, 2));
    res.redirect('/travel');
  }
};

module.exports = travelerController;
