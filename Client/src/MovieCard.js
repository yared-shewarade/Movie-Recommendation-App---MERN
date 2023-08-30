// src/MovieCard.js
import React from 'react';

function MovieCard({ movie }) {
  const { title, overview, poster_path } = movie;

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
        alt={title}
        className="movie-poster"
      />
      <div className="movie-details">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-overview">{overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;