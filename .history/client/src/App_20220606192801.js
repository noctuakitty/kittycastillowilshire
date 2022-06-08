import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/components'>
        <Link to="/pages/HomePage.js"></Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
