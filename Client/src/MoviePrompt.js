// frontend/MoviePrompt.js
import React, { useState } from 'react';
import axios from 'axios';
import '../src/styles.css';

function MoviePrompt() {
  const [userMessage, setUserMessage] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleGenerateRecommendation = async () => {
    try {
      const response = await axios.post('/api/generate-recommendation', { userMessage });
      setRecommendation(response.data.recommendation);
    } catch (error) {
      console.error('Error generating recommendation:', error);
    }
  };

  return (
    <div>
      <h2>Movie Recommendation Prompt</h2>
      <textarea
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        placeholder="Enter your preferences..."
      />
      <button onClick={handleGenerateRecommendation}>Generate Recommendation</button>

      {recommendation && (
        <div>
          <h3>Generated Recommendation:</h3>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
}

export default MoviePrompt;