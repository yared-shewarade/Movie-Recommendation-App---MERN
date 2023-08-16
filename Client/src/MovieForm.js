// src/MovieForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../src/styles.css';

function MovieForm() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/generate-prompt', {
        favoriteMovies,
        selectedFeatures,
      });
      // Assuming the response contains the generated prompt
      const generatedPrompt = response.data.prompt;

      // Update the generatedPrompt state
      setGeneratedPrompt(generatedPrompt);
    } catch (error) {
      console.error('Error generating prompt:', error);
    }
  };

  return (
    <div>
      {/* Form fields and logic */}
      <button onClick={handleSubmit}>Generate Prompt</button>

      {/* Display the generated prompt */}
      {generatedPrompt && (
        <div>
          <h3>Generated Prompt:</h3>
          <p>{generatedPrompt}</p>
        </div>
      )}
    </div>
  );
}

export default MovieForm;