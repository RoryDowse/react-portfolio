import { Helmet } from 'react-helmet';
import './Resume.css';

export default function Resume() {
    return (
        <section className="resume">
            <Helmet>
                <title>Resume | Rory Dowse Dev</title>
                <meta name="description" content="Download Rory Dowse's resume and view the skills and proficiencies Rory can bring to your team or project." />
            </Helmet>
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
                                <li>AJAX</li>
                                <li>HTML</li>
                                <li>jQuery</li>
                                <li>React.js</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                            </ul>
                    </div>
                    <div className="proficiency-card">
                        <h4>Back-End Technologies:</h4>
                            <ul className="proficiency-list">
                                <li>SQL</li>
                                <li>YAML</li>                           
                                <li>bcrypt</li>
                                <li>Apollo</li>
                                <li>Python</li>
                                <li>NoSQL</li>
                                <li>Node.js</li>
                                <li>GraphQL</li>
                                <li>Express.js</li>
                                <li>PyMongo</li>
                                <li>Sequelize</li>
                                <li>REST APIs</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                                <li>PostgreSQL</li>
                                <li>JSON Web Token (JWT)</li>
                                <li>Application Programming Interfaces (API)</li>                         
                            </ul>
                        </div>
                    <div className="proficiency-card">
                        <h4>Development Tools and Methodologies:</h4>
                            <ul className="proficiency-list">
                                <li>Git</li>
                                <li>Vite</li>
                                <li>OOP</li>
                                <li>DOM</li>
                                <li>MERN</li>
                                <li>Vitest</li>
                                <li>GitHub</li>
                                <li>CircleCI</li>
                                <li>Cypress</li>
                                <li>Insomnia</li>
                                <li>Wireframing</li>
                                <li>Developer Tools</li>
                                <li>Web Accessibility</li>
                                <li>Visual Studio Code</li>
                                <li>MongoDB Compass</li>
                                <li>Prompt Engineering</li>
                                <li>Agile Methodologies</li>
                                <li>Responsive Web Design</li>
                                <li>Command Line Interface</li>
                                <li>Test-Driven Development</li>
                                <li>Continuous Delivery (CD)</li>
                                <li>Continuous Integration (CI)</li>

                            </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}