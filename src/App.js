import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';



function App() {
  const [sections, setSections] = useState({
    about: true,
    experience: true,
    education: true,
    skills: true,
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
        <h1>Elijah Wennberg-Smith</h1>
        <p>Software Engineer</p>
        <p>
          Contact: wennbergsmithe@gmail.com |{' '}
          <a
            href="https://www.linkedin.com/in/elijah-wennberg-smith-757117140/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/wennbergsmithe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </header>

      <section className="resume-section">
        <h2 onClick={() => toggleSection('about')} style={{ cursor: 'pointer' }}>
         About Me <FontAwesomeIcon icon={getIcon(sections.about) }  className="section-icon" />
        </h2>
        {sections.about && (
          <p>
            Results-driven software engineer with 3+ years of non-internship
            experience designing and delivering scalable, revenue-generating
            features. Proficient in Java, Python, JavaScript, RESTful API
            design, and database management. Proven track record of leading key
            projects from concept to deployment, improving conversion rates, and
            driving business insights. Adept at working in Agile environments
            and committed to developing innovative solutions that meet business
            objectives.
          </p>
        )}
      </section>

      <section className="resume-section">
        <h2
          onClick={() => toggleSection('experience')}
          style={{ cursor: 'pointer' }}
        >
          Experience <FontAwesomeIcon icon={getIcon(sections.experience)} className="section-icon" />
        </h2>
        {sections.experience && (
          <>
            <div className="resume-item">
              <h3>Software Engineer</h3>
              <p>FanRally, Inc. | Pleasanton, CA | Aug 2022 - Aug 2024</p>
              <ul>
                <li>
                  Led the end-to-end development of core platform features using
                  Spring Boot Java, and continuously maintained existing
                  systems.
                </li>
                <li>Wrote comprehensive test suites for all new features launched.</li>
                <li>
                  Solely developed and maintained a dynamic fee service,
                  generating thousands in additional revenue by charging custom
                  fees on all platform transactions.
                </li>
                <li>
                  Led the creation of a real-time SMS communication service,
                  increasing conversion rates by 10% through personalized
                  messaging and promotions.
                </li>
                <li>
                  Spearheaded the development of a self-hosted Metabase page for
                  real-time business analytics, reducing data retrieval times by
                  50% and providing critical insights for investor and sales
                  pitches, contributing to a notable increase in successful
                  deals.
                </li>
                <li>Provided on-call engineering support, directly resolving high-priority client issues.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h3>Software Engineer - Support Engineer</h3>
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
              <h3>Software Engineer Intern</h3>
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
        <h2
          onClick={() => toggleSection('education')}
          style={{ cursor: 'pointer' }}
        >
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
        <h2
          onClick={() => toggleSection('skills')}
          style={{ cursor: 'pointer' }}
        >
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
            <li>TypeScript</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>S3</li>
            <li>EC2</li>
            <li>RDS</li>
          </ul>
        )}
      </section>

      {/* <section className="resume-section">
        <h2>Projects</h2>
        <div className="resume-item">
          <h3>Project Title</h3>
          <p>Brief description of the project and your role in it.</p>
          <a href="http://link-to-project.com" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </section> */}
    </div>
  );
}

export default App;
