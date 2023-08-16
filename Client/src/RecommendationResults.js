// src/RecommendationResults.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../src/styles.css';

function RecommendationResults() {
  // Logic to fetch recommendations based on the prompt from the backend

  return (
    <div>
      <h2>Recommendation Results</h2>
      {/* Display recommendations */}
      <Link to="/home">Go to Home</Link>
    </div>
  );
}

export default RecommendationResults;