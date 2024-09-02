import React from 'react';
import './Resume.css';

export default function Resume() {
    return (
        <section className="resume">
            <h2>Resume</h2>

            {/* Link to downloadable resume */}
            <a
                href="../assets/rory-dowse-resume.pdf"
                download="Rory Dowse Resume.pdf"
                className="resume-link"
            >
                Download My Resume
            </a>

            {/* List of proficiencies */}
            <div className="proficiencies">
                <h3>Developer Proficiencies</h3>
                <ul className="proficiency-type-list">
                    <li className="proficiency-title"><strong>Front-End Technologies:</strong>
                        <ul className="proficiency-list">
                            <li>React.js</li>
                            <li>HTML</li>
                            <li>Cascading Style Sheets (CSS)</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>jQuery</li>
                            <li>Responsive Web Design</li>
                            <li>UX/UI Design</li>
                        </ul>
                    </li>
                    <li className="proficiency-title"><strong>Back-End Technologies:</strong>
                        <ul className="proficiency-list">
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                            <li>SQL</li>
                            <li>REST APIs</li>
                            <li>AJAX</li>
                            <li>Application Programming Interfaces (API)</li>
                        </ul>
                    </li>
                    <li className="proficiency-title"><strong>Development Tools and Methodologies:</strong>
                        <ul className="proficiency-list">
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Visual Studio Code</li>
                            <li>Command Line</li>
                            <li>Developer Tools</li>
                            <li>Agile Methodologies</li>
                            <li>Web Accessibility</li>
                            <li>Wireframing</li>
                            <li>Prompt Engineering</li>
                            <li>Document Object Model (DOM)</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    );
}