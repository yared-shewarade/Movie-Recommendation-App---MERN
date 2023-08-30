// src/FavoriteMovies.js
import React, { useState } from 'react';

function FavoriteMovies({ onNext }) {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  
  const handleAddMovie = (event) => {
    event.preventDefault();
    const movieName = event.target.movieName.value;
    setFavoriteMovies([...favoriteMovies, movieName]);
    event.target.reset();
  };

  return (
    <div className="favorite-movies">
      <h2>Enter Your Favorite Movies</h2>
      <form onSubmit={handleAddMovie}>
        <input type="text" name="movieName" placeholder="Enter movie name" />
        <button type="submit">Add Movie</button>
      </form>
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default FavoriteMovies;