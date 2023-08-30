import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard'; // Import your MovieCard component

function MovieRecommendations({ favoriteMovies, selectedCategories }) {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    // Access the TMDb API key from the environment variable
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

    // Construct your API request URL with the API key and other parameters
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&...`;

    // Fetch recommended movies based on your criteria
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setRecommendedMovies(data.results);
      })
      .catch(error => {
        console.error('Error fetching recommended movies:', error);
      });
  }, [favoriteMovies, selectedCategories]);

  return (
    <div className="movie-recommendations">
      <h2>Movie Recommendations</h2>
      <div className="movie-list">
        {recommendedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {/* Add a button that links to external recommendations */}
      <a
        href={`EXTERNAL_LINK_TO_RECOMMENDATIONS?favorites=${favoriteMovies.join(',')}&categories=${selectedCategories.join(',')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="external-link"
      >
        View Full List of Recommendations
      </a>
    </div>
  );
}

export default MovieRecommendations;