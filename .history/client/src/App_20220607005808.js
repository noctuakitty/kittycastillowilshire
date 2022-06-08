import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;




