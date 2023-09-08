import React, { useState } from 'react';
import { addMovie } from '../api/api'; // Import the addMovie function

function AddMovies() {
  // State variables to store user inputs and selected categories
  const [movie, setMovie] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Dummy list of categories (replace with actual categories)
  const categories = [
    'Genre',
    'Language',
    'Demographic Descriptors of Protagonist',
    'Tone',
    'Release Year',
    'Demographic Descriptors of Director',
    'Quality of the Movie',
    'Country of Origin',
    'Runtime',
  ];

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((c) => c !== category)
      );
    } else {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    }
  };

  // Function to handle movie submission
  const handleMovieSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the movie data to the server using the addMovie function
      await addMovie({
        title: movie,
        categories: selectedCategories,
      });

      // Clear the form after successful submission
      setMovie('');
      setSelectedCategories([]);
    } catch (error) {
      // Handle any errors that occur during the API request
      console.error('Error adding movie:', error);
    }
  };

  return (
    <div className="add-movies-container">
      <h1>Add Your Favorite Movies</h1>
      <form onSubmit={handleMovieSubmit}>
        <label>
          Movie or TV Show:
          <input
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            placeholder="Enter a favorite movie or TV show"
          />
        </label>
        <h2>Select Categories:</h2>
        <div className="category-checkboxes">
          {categories.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}
        </div>
        <button type="submit">Save and Add</button>
      </form>
    </div>
  );
}

export default AddMovies;