import React, { useState } from 'react';
import './QuickScan.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Import company logos
import fanrallyLogo from '../images/FR.png';
import humanInterestLogo from '../images/HI.png';
import ivyComputerLogo from '../images/IC.png';
import linkedInLogo from '../images/LinkedInLogo.png';
import gitHubLogo from '../images/GitHubLogo.png';

function QuickScan() {
  const [sections, setSections] = useState({
    about: true,
    experience: true,
    education: true,
    skills: true,
    projects: true,
  });

  const toggleSection = (section) => {
    setSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const getIcon = (isOpen) => (isOpen ? faChevronDown : faChevronRight);

  return (
    <div className="qs-container">
      
    </div>
  );
}

export default QuickScan;
