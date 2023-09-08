import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Movie Recommendation App</h1>
      <p>
        This app allows you to discover personalized movie recommendations based on your favorite films and preferences.
      </p>
      <h2>App Information</h2>
      <p>
        With our app, you can input your favorite movies, choose various movie features, and receive tailored movie suggestions.
      </p>
      <h2>Getting Started</h2>
      <p>
        Ready to find your next favorite movie? Click the button below to get started!
      </p>
      <Link to="/add-movies">
        <button className="get-started-button">Get Started</button>
      </Link>
    </div>
  );
}

export default Home;




