// appserver/controllers/travelerController.js

const Trip = require('../../models/trips');


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

  // Travel page handler - retrieves trips from MongoDB using Mongoose
  travel: async (req, res) => {
    try {
      const trips = await Trip.find(); // Retrieve all trips from the database
      res.render('travel', { title: 'Travel With Us', trips: trips });
    } catch (err) {
      console.error('Error retrieving trips:', err);
      res.status(500).send('Error retrieving trips');
    }
  },

  // Render the edit trip form
  editTrip: async (req, res) => {
    try {
      let tripId = req.params.id;
      // Find the trip using the custom id field
      const trip = await Trip.findOne({ id: tripId });
      if (!trip) return res.status(404).send("Trip not found");
      res.render('editTrip', { title: 'Edit Trip', trip: trip });
    } catch (err) {
      console.error('Error retrieving trip:', err);
      res.status(500).send('Error retrieving trip');
    }
  },

  // Process the update form submission
  updateTrip: async (req, res) => {
    try {
      let tripId = req.params.id;
      // Find and update the trip in the database
      const updatedTrip = await Trip.findOneAndUpdate(
        { id: tripId },
        {
          name: req.body.name,
          image: req.body.image,
          description1: req.body.description1,
          description2: req.body.description2
        },
        { new: true } // Return the updated document
      );
      if (!updatedTrip) return res.status(404).send("Trip not found");
      res.redirect('/travel');
    } catch (err) {
      console.error('Error updating trip:', err);
      res.status(500).send('Error updating trip');
    }
  }
};

module.exports = travelerController;
