import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: "url(./circle.jpg)" }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;




