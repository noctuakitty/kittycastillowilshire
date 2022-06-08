import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/pages/HomePage';

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;




