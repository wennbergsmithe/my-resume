import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Resume';
import LastFM from './LastFM';
import './App.css';


import blackDog from '../images/dogBlack.png';


function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          
          <Link to="/"><img src={blackDog} alt="SpinPuppy" className="spin-puppy-logo" /></Link>
          
          <ul className="navbar-links">
            <li>
              <Link to="/musicData">Music Listening Data</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/musicData" element={<LastFM />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
