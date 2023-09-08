// backend/config/database.js

const mongoose = require('mongoose');

// Define a data model (e.g., Movie) using Mongoose schema
const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  language: String,
  // Add more fields as needed
});

// Create a model from the schema
const Movie = mongoose.model('Movie', movieSchema);

module.exports = {
  Movie,    // Export the Movie model for use in your routes
};