import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter basename='\components'>
        <Link to=".\components\pages\HomePage.js"></Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
