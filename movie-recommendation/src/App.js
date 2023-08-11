import React from 'react';
import './App.css'; // You can add CSS styles here if needed
import MovieForm from './MovieForm';
import MoviePrompt from './MoviePrompt';

function App() {
  return (
    <div className="App">
      <h1>Movie Recommendation App</h1>
      <MovieForm />
      <MoviePrompt />
    </div>
  );
}

export default App;


