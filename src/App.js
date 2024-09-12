// src/App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="resume-container">
      <header>
        <h1>Elijah Wennberg-Smith</h1>
        <p>Software Engineer</p>
        <p>Contact: wennbergsmithe@gmail.com | <a href="https://www.linkedin.com/in/elijah-wennberg-smith-757117140/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/wennbergsmithe/" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </header>

      <section className="resume-section">
        <h2>About Me</h2>
        <p>
          Results-driven software engineer with 3+ years of non-internship experience designing and delivering scalable, revenue-generating features. Proficient in Java, Python, JavaScript, RESTful API design, and database management. Proven track record of leading key projects from concept to deployment, improving conversion rates, and driving business insights. Adept at working in Agile environments and committed to developing innovative solutions that meet business objectives.
        </p>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <div className="resume-item">
          <h3>Software Engineer</h3>
          <p>FanRally, Inc. | Pleasanton, CA | Aug 2022 - Aug 2024</p>
          <ul>
            <li>Led the end-to-end development of core platform features using Spring Boot Java, and continuously maintained existing systems.</li>
            <li>Wrote comprehensive test suites for all new features launched.</li>
            <li>Solely developed and maintained a dynamic fee service, generating thousands in additional revenue by charging custom fees on all platform transactions.</li>
            <li>Led the creation of a real-time SMS communication service, increasing conversion rates by 10% through personalized messaging and promotions.</li>
            <li>Spearheaded the development of a self-hosted Metabase page for real-time business analytics, reducing data retrieval times by 50% and providing critical insights for investor and sales pitches, contributing to a notable increase in successful deals.</li>
            <li>Provide on-call engineering support, directly resolving high-priority client issues.</li>

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
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-item">
          <h3>Computer Science, Bachelor of Science</h3>
          <p>Rensselaer Polytechnic Institute | Class of 2020</p>
          <ul>
            <li>Data Structures, Algorithms, Web Development, Game Development, Operating Systems, Database Systems.</li>
            <li>Concentrated in Data and AI</li>
            <li>Leadership role in the RPI Ski club.</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <ul>
          <li className="skills-list">Java</li>
            <ul className="sub-skills">
              <li>Spring Boot</li>
            </ul>
          <li className="skills-list"><b>JavaScript</b></li>
          <ul className="sub-skills">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>TypeScript</li>
            </ul>
          <li className="skills-list">Relational Databases</li>
            <ul className="sub-skills">
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          <li className="skills-list">AWS</li>
            <ul className="sub-skills">
              <li>S3</li>
              <li>EC2</li>
              <li>RDS</li>
            </ul>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        <div className="resume-item">
          <h3>Project Title</h3>
          <p>Brief description of the project and your role in it.</p>
          <a href="http://link-to-project.com" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </section>
    </div>
  );
}

export default App;

