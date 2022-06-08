import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Link to="/" /><a href="#/components/pages/HomePage"/>
      </BrowserRouter>
    </div>
  );
}

export default App;
