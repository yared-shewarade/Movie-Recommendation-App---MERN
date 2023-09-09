// src/api/api.js
import axios from 'axios';

// Adjust the base URL as needed
const BASE_URL = 'http://localhost:3000/api'; 

export const getMovies = () => {
  return axios.get(`${BASE_URL}/movies`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const addMovie = (newMovie) => {
  return axios.post(`${BASE_URL}/movies`, newMovie)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const updateMovie = (movieId, updatedMovie) => {
  return axios.put(`${BASE_URL}/movies/${movieId}`, updatedMovie)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const deleteMovie = (movieId) => {
  return axios.delete(`${BASE_URL}/movies/${movieId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};


export const generatePrompt = (userMovies) => {
  // Implement the logic to generate a recommendation prompt based on userMovies

  return new Promise((resolve, reject) => {
    // Generate a prompt based on userMovies and resolve with the prompt
    const generatedPrompt = `Generate a movie recommendation based on userMovies: ${JSON.stringify(userMovies)}`;
    resolve({ data: { prompt: generatedPrompt } });
  });
};