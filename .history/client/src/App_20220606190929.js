import React from 'react';
import { BrowserRouter, Routes } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes exact path="/" component={HomePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
