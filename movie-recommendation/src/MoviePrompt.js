import React, { useState } from 'react';

function MoviePrompt({ selectedFeatures }) {
  // State to store the generated ChatGPT prompt
  const [chatGptResponse, setChatGptResponse] = useState('');

  // Function to handle generating a new ChatGPT prompt
  const handleGeneratePrompt = async () => {
    try {
      const response = await fetch('/api/generate-prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedFeatures }),
      });

      if (response.ok) {
        const data = await response.json();
        setChatGptResponse(data.prompt);
      } else {
        console.error('Failed to generate prompt');
      }
    } catch (error) {
      console.error('Error generating prompt:', error);
    }
  };

  // JSX to render the component
  return (
    <div>
      <h2>Generated Prompt</h2>
      <p>{chatGptResponse}</p>
      <button onClick={handleGeneratePrompt}>Generate Prompt</button>
    </div>
  );
}

export default MoviePrompt;