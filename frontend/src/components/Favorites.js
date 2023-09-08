import React, { useState, useEffect } from 'react';
import { getMovies, addMovie, updateMovie, deleteMovie } from '../api/api';

function FavoritesMovies() {
  // State variables to store user's favorite movies and categories
  const [favorites, setFavorites] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedMovie, setEditedMovie] = useState('');
  const [editedCategories, setEditedCategories] = useState([]);

  // Function to fetch favorite movies from the server
  const fetchFavorites = async () => {
    try {
      const data = await getMovies();
      setFavorites(data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  // Function to handle adding a favorite movie
  const handleAddFavorite = async () => {
    try {
      const newFavorite = {
        movie: editedMovie,
        categories: editedCategories,
      };

      await addMovie(newFavorite);
      fetchFavorites();

      // Clear the input fields after adding
      setEditedMovie('');
      setEditedCategories([]);
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };

  // Function to handle editing a favorite movie
  const handleEditFavorite = async () => {
    try {
      const updatedFavorite = {
        movie: editedMovie,
        categories: editedCategories,
      };

      await updateMovie(favorites[editingIndex]._id, updatedFavorite);
      fetchFavorites();

      // Reset the editing state
      setEditingIndex(-1);
      setEditedMovie('');
      setEditedCategories([]);
    } catch (error) {
      console.error('Error editing favorite:', error);
    }
  };

  // Function to handle removing a favorite movie
  const handleRemoveFavorite = async (index) => {
    try {
      await deleteMovie(favorites[index]._id);
      fetchFavorites();
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  return (
    <div className="favorites-container">
      <h1>Your Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>You haven't added any favorite movies yet.</p>
      ) : (
        <ul>
          {favorites.map((favorite, index) => (
            <li key={index}>
              <strong>Movie:</strong> {favorite.movie}
              <br />
              <strong>Categories:</strong> {favorite.categories.join(', ')}
              <br />
              <button onClick={() => setEditingIndex(index)}>Edit</button>
              <button onClick={() => handleRemoveFavorite(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      {editingIndex !== -1 && (
        <div>
          <h2>Edit Favorite Movie</h2>
          <input
            type="text"
            value={editedMovie}
            onChange={(e) => setEditedMovie(e.target.value)}
            placeholder="Edit the movie name"
          />
          <br />
          <input
            type="text"
            value={editedCategories.join(', ')}
            onChange={(e) => setEditedCategories(e.target.value.split(', '))}
            placeholder="Edit categories (comma-separated)"
          />
          <br />
          <button onClick={handleEditFavorite}>Save</button>
        </div>
      )}

      {/* Button to add a new favorite movie */}
      <div>
        <h2>Add Favorite Movie</h2>
        <input
          type="text"
          value={editedMovie}
          onChange={(e) => setEditedMovie(e.target.value)}
          placeholder="Enter the movie name"
        />
        <br />
        <input
          type="text"
          value={editedCategories.join(', ')}
          onChange={(e) => setEditedCategories(e.target.value.split(', '))}
          placeholder="Enter categories (comma-separated)"
        />
        <br />
        <button onClick={handleAddFavorite}>Add</button>
      </div>
    </div>
  );
}

export default FavoritesMovies;