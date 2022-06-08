import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Link to="./components/pages/HomePage" />
      </BrowserRouter>
    </div>
  );
}

export default App;
