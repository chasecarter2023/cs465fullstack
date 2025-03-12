// appserver/controllers/travelerController.js

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
      res.render('travel', { title: 'Travel With Us' });
    }
  };
  
  module.exports = travelerController;
  