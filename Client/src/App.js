// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import MovieForm from './MovieForm';
import MoviePrompt from './MoviePrompt';
import RecommendationResults from './RecommendationResults';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/movie-form" component={MovieForm} />
          <Route path="/movie-prompt" component={MoviePrompt} />
          <Route path="/recommendation-results" component={RecommendationResults} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;