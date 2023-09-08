const express = require('express');
const router = express.Router();
const { Movie } = require('./config/database'); // Import your Mongoose model

// Define a route to get a list of movies from the database
router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find(); // Find all movies
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Define a route to get a single movie by ID from the database
router.get('/movies/:id', async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id); // Find a movie by ID
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      res.json(movie);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });

// Define a route to add a new movie to the database
router.post('/movies', async (req, res) => {
  const { title, genre, language } = req.body;

  try {
    const newMovie = new Movie({ title, genre, language });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to update all movies
router.put('/movies', async (req, res) => {
    try {
      const updatedMovies = await Movie.updateMany({}, req.body);
      res.json(updatedMovies);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

// Define a route to update an existing movie in the database
router.put('/movies/:id', async (req, res) => {
  const { id } = req.params; // Extract the movie ID from the request parameters
  const { title, genre, language } = req.body; // Updated movie data

  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { title, genre, language },
      { new: true } // Return the updated movie
    );

    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.json(updatedMovie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to delete all movies
router.delete('/movies', async (req, res) => {
    try {
      await Movie.deleteMany({});
      res.json({ message: 'All movies deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
// Define a route to delete a movie from the database
router.delete('/movies/:id', async (req, res) => {
  const { id } = req.params; // Extract the movie ID from the request parameters

  try {
    const deletedMovie = await Movie.findByIdAndRemove(id);

    if (!deletedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.json({ message: 'Movie deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;