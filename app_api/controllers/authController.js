// controllers/authController.js
const jwt = require('jsonwebtoken');

// Define a secret key for signing the token
// In production, store this in an environment variable
const secretKey = 'yourSecretKey';

exports.login = (req, res) => {
  const { username, password } = req.body;

  // Hardcoded credentials for demo purposes
  if (username === 'admin' && password === 'password123') {
    // Create the JWT: payload contains the username, token expires in 1 hour.
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

    // Return the token to the client
    return res.json({ token });
  } else {
    // If credentials are invalid, return an Unauthorized response
    return res.status(401).json({ message: 'Invalid credentials' });
  }
};
