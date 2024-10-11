import './Resume.css';

export default function Resume() {
    return (
        <section className="resume">
            <div className="resume-section">
                <h2>Resume</h2>

                {/* Link to downloadable resume */}
                <div className="download-section">
                <h3>Download</h3>
                <p>My resume:</p>
                <a
                    href="../assets/rory-dowse-resume.pdf"
                    download="Rory Dowse Resume.pdf"
                    className="download-form button btn btn-primary"
                >
                    Download
                </a>
                </div>
            </div>

            {/* List of proficiencies */}
            <div className="proficiencies">
                <h3 className="proficiencies-title">Developer Proficiencies</h3>
                <div className="proficiency-cards">
                    <div className="proficiency-card">
                        <h4 className="proficiency-card-title">Front-End Technologies:</h4>
                            <ul className="proficiency-list">
                                <li>CSS</li>
                                <li>HTML</li>
                                <li>jQuery</li>
                                <li>React.js</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>UX/UI Design</li>
                                <li>Responsive Web Design</li>
                            </ul>
                    </div>
                    <div className="proficiency-card">
                        <h4>Back-End Technologies:</h4>
                            <ul className="proficiency-list">
                                <li>SQL</li>
                                <li>AJAX</li>                               
                                <li>bcrypt</li>
                                <li>Apollo</li>
                                <li>NoSQL</li>
                                <li>Node.js</li>
                                <li>GraphQL</li>
                                <li>Express.js</li>
                                <li>Sequelize</li>
                                <li>REST APIs</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                                <li>PostgreSQL</li>
                                <li>Prompt Engineering</li>
                                <li>JSON Web Token (JWT)</li>
                                <li>Application Programming Interfaces (API)</li>                         
                            </ul>
                        </div>
                    <div className="proficiency-card">
                        <h4>Development Tools and Methodologies:</h4>
                            <ul className="proficiency-list">
                                <li>Git</li>
                                <li>DOM</li>
                                <li>OOP</li>
                                <li>Vite</li>
                                <li>GitHub</li>
                                <li>Insomnia</li>
                                <li>Wireframing</li>
                                <li>Developer Tools</li>
                                <li>Web Accessibility</li>
                                <li>Visual Studio Code</li>
                                <li>MongoDB Compass</li>
                                <li>Agile Methodologies</li>
                                <li>Command Line Interface</li>
                            </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}