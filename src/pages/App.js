import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import Resume from './Resume';
import QuickScan from './QuickScan';
import './App.css';

import blackDog from '../images/dogBlack.png';

function App() {
  const location = useLocation(); // Hook to get the current route

  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/"><img src={blackDog} alt="SpinPuppy" className="spin-puppy-logo" /></Link>
        
        <ul className="navbar-links">
          <li>
            {/* <Link to="/">Resume</Link> */}
          </li>
          <li>
            {location.pathname !== "/" && (
              <Link to="/" className="deep-dive">Deep Dive</Link>
            )}
            {location.pathname !== "/quickscan" && (
              <Link to="/quickscan" className="quick-scan">Quick Scan</Link>
            )}
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/quickscan" element={<QuickScan />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
