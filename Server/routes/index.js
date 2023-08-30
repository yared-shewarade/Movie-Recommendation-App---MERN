const express = require('express');
const router = express.Router();

// Sample movie data (replace with your actual data source)
const movieData = [
  { id: 1, title: 'Movie A', genre: 'Action' },
  { id: 2, title: 'Movie B', genre: 'Drama' },
  // Add more movie entries...
];

router.get('/recommendations', (req, res) => {
  const favoriteMovies = req.query.favorites.split(',');
  const selectedCategories = req.query.categories.split(',');

  // Implement our recommendation based on filter movies and user preferences
  const recommendedMovies = movieData.filter(movie =>
    favoriteMovies.includes(movie.title) && selectedCategories.includes(movie.genre)
  );

  res.json({ recommendedMovies });
});

module.exports = router;