import React, { useState, useEffect } from 'react';
import { generatePrompt as generateRecommendationPrompt } from '../api/api';

function Recommendations() {
  // State variable to store the generated prompt
  const [prompt, setPrompt] = useState('');

  // User's listed movies and selected categories (replace with actual data)
  const userMovies = [
    { movie: 'Movie 1', categories: ['Genre: Action', 'Language: English'] },
    { movie: 'Movie 2', categories: ['Genre: Comedy', 'Language: Spanish'] },
    // Add more user movies as needed
  ];

  // Function to generate the ChatGPT prompt
  const generatePrompt = async () => {
    try {
      const response = await generateRecommendationPrompt(userMovies);
      setPrompt(response.data.prompt);
    } catch (error) {
      console.error('Error generating prompt:', error);
    }
  };

  // Function to copy the generated prompt to the clipboard
  const copyPromptToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = prompt;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Prompt copied to clipboard');
  };

  useEffect(() => {
    generatePrompt();
  }, []); // Generate the prompt when the component mounts

  return (
    <div className="recommendations-container">
      <h1>Movie Recommendations</h1>
      <h2>Your Movie List:</h2>
      <ul>
        {userMovies.map((movie, index) => (
          <li key={index}>
            <strong>Movie:</strong> {movie.movie}
            <br />
            <strong>Categories:</strong> {movie.categories.join(', ')}
          </li>
        ))}
      </ul>
      <button onClick={generatePrompt}>Generate Prompt</button>
      {prompt && (
        <div>
          <h2>Generated Prompt:</h2>
          <textarea
            rows="4"
            cols="50"
            value={prompt}
            readOnly
          ></textarea>
          <button onClick={copyPromptToClipboard}>Copy Prompt</button>
          <p className="warning-text">
            <strong>Warning:</strong> Clicking the "Open ChatGPT" button will take you to an external site.
          </p>
          <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">
            Open ChatGPT
          </a>
        </div>
      )}
    </div>
  );
}

export default Recommendations;