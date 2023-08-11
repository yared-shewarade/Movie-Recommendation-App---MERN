import React, { useState } from 'react';

function MovieForm() {
  const [favoriteMovies, setFavoriteMovies] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const handleFavoriteMoviesChange = (event) => {
    setFavoriteMovies(event.target.value);
  };

  const handleFeatureCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFeatures((prevFeatures) => [...prevFeatures, value]);
    } else {
      setSelectedFeatures((prevFeatures) =>
        prevFeatures.filter((feature) => feature !== value)
      );
    }
  };

  const handleFavoriteMoviesSubmit = async () => {
    const userId = 123; // Replace with actual user ID
    const requestBody = {
      userId,
      favoriteMovies,
      // selectedFeatures is assigned a value, but not used in this example
    };

    try {
      const response = await fetch('/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log('Favorite movies added successfully');
      } else {
        console.error('Failed to add favorite movies');
      }
    } catch (error) {
      console.error('Error adding favorite movies:', error);
    }
  };

  return (
    <div>
      <h2>Favorite Movies</h2>
      <input
        type="text"
        value={favoriteMovies}
        onChange={handleFavoriteMoviesChange}
        placeholder="Enter your favorite movies"
      />

      <h2>Movie Features</h2>
      <label>
        <input
          type="checkbox"
          value="genre"
          onChange={handleFeatureCheckboxChange}
        />
        Genre
      </label>
      {/* Add more checkboxes for other features */}
      
      <button onClick={handleFavoriteMoviesSubmit}>Add Favorite Movies</button>
    </div>
  );
}

export default MovieForm;