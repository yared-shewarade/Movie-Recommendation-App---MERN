import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import FavoriteMovies from './FavoriteMovies';
import CategoriesSelection from './CategoriesSelection';
import MovieRecommendations from './MovieRecommendations';

function App() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleFavoriteMoviesNext = (movies) => {
    setFavoriteMovies(movies);
  };

  const handleCategoriesNext = (categories) => {
    setSelectedCategories(categories);
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home {...props} onNavigate={() => props.history.push('/favorites')} />
            )}
          />
          <Route
            path="/favorites"
            render={(props) => (
              <FavoriteMovies
                {...props}
                onNext={handleFavoriteMoviesNext}
                onNavigate={() => props.history.push('/categories')}
              />
            )}
          />
          <Route
            path="/categories"
            render={(props) => (
              <CategoriesSelection
                {...props}
                onNext={handleCategoriesNext}
                onNavigate={() => props.history.push('/recommendations')}
              />
            )}
          />
          <Route
            path="/recommendations"
            render={(props) => (
              <MovieRecommendations
                {...props}
                favoriteMovies={favoriteMovies}
                selectedCategories={selectedCategories}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;