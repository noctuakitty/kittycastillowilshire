import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/aboutpage" element={<AboutPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




