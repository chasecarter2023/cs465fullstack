// app.js

require('./db');


const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// Set Handlebars as the view engine
app.set('view engine', 'hbs');
// Tell Express where to find your views
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Register partials (if you have any)
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Import and use the traveler routes
const travelerRouter = require('./app_server/routes/traveler');
app.use('/', travelerRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
