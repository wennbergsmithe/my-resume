import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import NewPage from '../pages/NewPage';
import './App.css';


import blackDog from '../images/dogBlack.png';


function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="navbar-brand">
          <img src={blackDog} alt="SpinPuppy" className="spin-puppy-logo" />
          </div>
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/newpage">New Page</Link>
            </li> */}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/newpage" element={<NewPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
