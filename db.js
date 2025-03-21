const mongoose = require('mongoose');
console.log("Attempting to connect to MongoDB...");

mongoose.connect('mongodb://127.0.0.1:27017/travlr-getaways', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000  // Increase timeout if needed
});

const db = mongoose.connection;

db.on('error', error => {
  console.error('MongoDB connection error:', error);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
  console.log('Mongoose readyState:', mongoose.connection.readyState); // Should print 1 (connected)
});

module.exports = db;
