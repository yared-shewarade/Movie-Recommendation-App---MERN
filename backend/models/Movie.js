// models/Movie.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  language: String,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;