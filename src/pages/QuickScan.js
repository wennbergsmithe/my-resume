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
    <div className="resume-container">
      <header>
        <div className='titles'>
          <h1>Eli Wennberg-Smith</h1>
          <h2>Software Engineer</h2>
        </div>
          {/* <a href= "mailto: wennbergsmithe@gmail.com"> wennbergsmithe@gmail.com </a> |  */}

          <div className="socials">
            <a href="https://www.linkedin.com/in/elijah-wennberg-smith-757117140/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInLogo} alt="LinkedIn" className="linkedin-logo" />
            </a>
            <a href="https://github.com/wennbergsmithe/" target="_blank" rel="noopener noreferrer">
              <img src={gitHubLogo} alt="GitHub" className="git-logo" />
            </a>
          </div>
      </header>

      <section className="resume-section">
        <h2 onClick={() => toggleSection('about')} style={{ cursor: 'pointer' }}>
          Quick Scan <FontAwesomeIcon icon={getIcon(sections.about)} className="section-icon" />
        </h2>
        {sections.about && (
          <p>
            This is a quick scan of my experience and skills. For a deep dive of my resume, projects, skills and experience, please visit the deep dive link above.
          </p>
        )}
      </section>
      
      <section className="resume-section">
        <h2 onClick={() => toggleSection('experience')} style={{ cursor: 'pointer' }}>
          Experience <FontAwesomeIcon icon={getIcon(sections.experience)} className="section-icon" />
        </h2>
        {sections.experience && (
          <>
            <div className="resume-item">
              <h3>
                <a href="https://www.fanrally.com" target="_blank" rel="noopener noreferrer">
                  <img src={fanrallyLogo} alt="FanRally Logo" className="company-logo" />
                </a>
                Software Engineer
              </h3>
              <p>FanRally, Inc. | Pleasanton, CA | Aug 2022 - Aug 2024</p>
              <ul>
                <li>Tech used: Spring Boot, MySQL, Redis, AWS ECS EC2 S3 RDS.</li>
                <li>Generated thousands of dollars in revenue with customizable fee service.</li>
                <li>Increased conversion on incremental purcases by %10 by integrating with Twilio to issue mass promotional messaging.</li>
                <li>Introduced business intelligence to FanRally by implementing a metabase page for data analytics.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h3>
                <a href="https://www.humaninterest.com" target="_blank" rel="noopener noreferrer">
                  <img src={humanInterestLogo} alt="Human Interest Logo" className="company-logo" />
                </a>
                Software Engineer - Support Engineer
              </h3>
              <p>Human Interest, Inc. | San Francisco, CA | May 2021 – Jul 2022</p>
              <ul>
                <li>Tech used: TypeScript, Node.js, TypeORM, PostgreSQL.</li>
                <li>Decreased resolution time of escalated issues by 75% with automation.</li>
                <li>Collaborated with product owners, drafting technical design documents and implementing solutions.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h3>
                <a href='https://www.ivycomputer.com' target='_blank' rel="noopener noreferrer">
                  <img src={ivyComputerLogo} alt="Ivy Computer Logo" className="company-logo" />
                </a>
                Software Engineer Intern
              </h3>
              <p>Ivy Computer, Inc. | Waterbury Center, VT | Aug 2019 – Aug 2020</p>
              <ul>
                <li>Developed full stack Windows applications using Visual Basic 6 and MySQL.</li>
                <li>Decreased deployment time by 50% with deployment automation scripts.</li>
                <li>Dramatically increased workorder organization with a custom task management system.</li>
              </ul>
            </div>
          </>
        )}
      </section>

      <section className="resume-section">
        <h2 onClick={() => toggleSection('education')} style={{ cursor: 'pointer' }}>
          Education <FontAwesomeIcon icon={getIcon(sections.education)} className="section-icon" />
        </h2>
        {sections.education && (
          <div className="resume-item">
            <h3>Computer Science, Bachelor of Science</h3>
            <p>Rensselaer Polytechnic Institute | Class of 2020</p>
            <ul>
              <li>Data Structures, Algorithms, Web Development, Game Development, Operating Systems, Database Systems.</li>
              <li>Concentrated in Data and AI</li>
              <li>Leadership role in the RPI Ski club.</li>
            </ul>
          </div>
        )}
      </section>

      <section className="resume-section">
        <h2 onClick={() => toggleSection('skills')} style={{ cursor: 'pointer' }}>
          Skills <FontAwesomeIcon icon={getIcon(sections.skills)} className="section-icon" />
        </h2>
        {sections.skills && (
          <ul className="skills-list">
            <li>Spring Boot</li>
            <li>Java</li>
            <li>Python</li>
            <li>Shell Scripting</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>MySQL</li>
            <li>Hibernate</li>
            <li>PostgreSQL</li>
            <li>S3</li>
            <li>EC2</li>
            <li>RDS</li>
            <li>Redis</li>
            <li>RESTful APIs</li>
          </ul>
        )}
      </section>
    </div>
  );
}

export default QuickScan;
