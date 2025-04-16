// app.js

require('./db');

const express = require('express');
const path = require('path');
const hbs = require('hbs');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON (useful for API endpoints)
app.use(express.json());

// Set Handlebars as the view engine
app.set('view engine', 'hbs');
// Tell Express where to find your views
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Register partials (if you have any)
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Import and use the traveler routes (MVC)
const travelerRouter = require('./app_server/routes/traveler');
app.use('/', travelerRouter);

// Import and use the Trip API routes
const tripApiRoutes = require('./app_api/routes/tripRoutes');
app.use('/API', tripApiRoutes);

// Import and use the Authentication routes
// Assuming your authRoutes (with the /login endpoint) is placed in app_api/routes/authRoutes.js
const authRoutes = require('./app_api/routes/authRoutes');
app.use('/API', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
