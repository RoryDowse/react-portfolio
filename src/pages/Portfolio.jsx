import Project from '../components/Project';
import './Portfolio.css';

import project1Image from '../assets/project-1.png';
import project2Image from '../assets/project-2.png';
import project3Image from '../assets/project-3.png';
import project4Image from '../assets/project-4.png';
import project5Image from '../assets/project-5.png';
import project6Image from '../assets/project-6.png';
// Add more project images as needed

const projects = [
    {
        id: 1,
        image: project1Image,
        title: 'Car Loan Payment Calculator',
        deployedLink: 'https://rorydowse.github.io/car-loan-payment/',
        githubLink: 'https://github.com/RoryDowse/car-loan-payment',
    },
    {
        id: 2,
        image: project2Image,
        title: 'Weather Dashboard',
        deployedLink: 'https://weather-dashboard-wuv2.onrender.com',
        githubLink: 'https://github.com/RoryDowse/weather-dashboard',
    },
    {
        id: 3,
        image: project3Image,
        title: 'James Woodrow Violin',
        deployedLink: 'https://jameswoodrowviolin.com/',
        githubLink: 'https://github.com/RoryDowse/james-woodrow-violin',
    },
    {
        id: 4,
        image: project4Image,
        title: 'Employee Tracker',
        deployedLink: 'https://drive.google.com/file/d/1VY9Po9H4JHbiBqo2l9NSJ67scy9An9Kh/view?usp=drive_link',
        githubLink: 'https://github.com/RoryDowse/employee-tracker',
    },
    {
        id: 5,
        image: project5Image,
        title: 'Vehicle Builder',
        deployedLink: 'https://drive.google.com/file/d/1R-ngPIMKgweiBMfxdGWGjm9BPcg-Z6Yr/view?usp=drive_link',
        githubLink: 'https://github.com/RoryDowse/vehicle-builder',
    },
    {
        id: 6,
        image: project6Image,
        title: 'README Generator',
        deployedLink: 'https://drive.google.com/file/d/1Z5uzQfWhapHrhtFWBnabrZc9ubGvrIOE/view?usp=sharing',
        githubLink: 'https://github.com/RoryDowse/readme-generator',
    },
    // Add more projects as needed
];

export default function Portfolio() {
    return (
        <section className="portfolio-section">
           <h2>Portfolio</h2>
           <div className="projects-grid">
                {projects.map(project => (
                    <Project
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        deployedLink={project.deployedLink}
                        githubLink={project.githubLink}
                    />
                ))}
           </div>
        </section>
    );
}