import React, { useState } from 'react';
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Import company logos
import fanrallyLogo from '../images/FR.png';
import humanInterestLogo from '../images/HI.png';
import ivyComputerLogo from '../images/IC.png';
import linkedInLogo from '../images/LinkedInLogo.png';
import gitHubLogo from '../images/GitHubLogo.png';

function Resume() {
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
          About Me <FontAwesomeIcon icon={getIcon(sections.about)} className="section-icon" />
        </h2>
        {sections.about && (
          <p>
            Results-driven software engineer with 3+ years of non-internship experience designing and delivering scalable, revenue-generating features. Proficient in Java, Python, JavaScript, RESTful API design, and database management. Proven track record of leading key projects from concept to deployment, improving conversion rates, and driving business insights. Adept at working in Agile environments and committed to developing innovative solutions that meet business objectives.
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
                <li>Led the end-to-end development of core platform features using Spring Boot Java, and continuously maintained existing systems.</li>
                <li>Wrote comprehensive test suites for all new features launched.</li>
                <li>Solely developed and maintained a dynamic fee service, generating thousands in additional revenue by charging custom fees on all platform transactions.</li>
                <li>Led the creation of a real-time SMS communication service, increasing conversion rates by 10% through personalized messaging and promotions.</li>
                <li>Spearheaded the development of a self-hosted Metabase page for real-time business analytics, reducing data retrieval times by 50% and providing critical insights for investor and sales pitches, contributing to a notable increase in successful deals.</li>
                <li>Provided on-call engineering support, directly resolving high-priority client issues.</li>
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
                <li>Primary defender against escalated customer issues with the recordkeeping system.</li>
                <li>Developed a process to quickly and safely resolve issues using live production APIs and data.</li>
                <li>Dramatically decreased escalation resolution time with custom tooling.</li>
                <li>Developed automated tools to streamline the resolution of customer escalations using JavaScript and PostgreSQL.</li>
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
                <li>Owned and executed numerous projects, including a custom task management system, and deployment automation scripts.</li>
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
      <section className='resume-section'>
      <h2 onClick={() => toggleSection('projects')} style={{ cursor: 'pointer' }}>
          Projects <FontAwesomeIcon icon={getIcon(sections.projects)} className="section-icon" />
        </h2>
        {sections.projects && (
          <div>
            <h4 className='project-title'>Apple Music Library Analyzer</h4>
            <ul className='project-info'>
              <li>A python application that stores Apple Music library information over time and provides lists, metrics, charts and other analyses of the data collected.</li>
              <li>Data Pipeline that ingests data in batches using an XML file that is parsed, and processed into temporal data and stored into MySQL.</li>
              <li>Uses Vega-Altair visualization library.</li>
              <li><a href='https://github.com/wennbergsmithe/LibraryAnalyzer' target='_blank' rel="noopener noreferrer">GitHub page.</a></li>
            </ul>

            <h4 className='project-title'>Car Rental API</h4>
            <ul className='project-info'>
              <li>An express.js API that tracks cars owned by a rental agency.</li>
              <li>Users can create a record of owned cars and their information such as make, model, and mileage.</li>
              <li>Cars can be rented, and the trips are tracked. Duration and mileage of trip is recorded.</li>
              <li>It is built with Node.js, Express.js, and PostgreSQL.</li>
              <li><a href='https://github.com/wennbergsmithe/Car-Rental-API' target='_blank' rel="noopener noreferrer">GitHub page.</a></li>
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}

export default Resume;
