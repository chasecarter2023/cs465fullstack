// seed.js
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Trip = require('./models/trips'); // Adjusted to match your file name
require('./db'); // Establish the MongoDB connection

// Read sample data from trips.json
const tripsFilePath = path.join(__dirname, 'data', 'trips.json');

const tripsData = JSON.parse(fs.readFileSync(tripsFilePath, 'utf8'));

// Insert the sample data into the database
Trip.insertMany(tripsData)
  .then(() => {
    console.log('Sample trips have been inserted');
    // Close the database connection after insertion
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting sample trips:', err);
  });
