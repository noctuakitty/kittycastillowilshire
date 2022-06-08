import React from 'react';
import { BrowserRouter as Router, BrowserRouter, Route } from "react-router-dom";
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <BrowserRouter>
          <Route exact path="/" component={HomePage} />
        </BrowserRouter>
      </Router>
    </div>
  );
}

export default App;
