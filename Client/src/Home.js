// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../src/styles.css';

function Home() {
  return (
    <div>
      <h2>Welcome to Movie Recommendation App</h2>
      <Link to="/movie-form">Go to Movie Form</Link>
    </div>
  );
}

export default Home;