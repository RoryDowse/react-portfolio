import Project from '../components/Project';
import './Portfolio.css';

import project1Image from '../assets/finance-flow.png';
import project2Image from '../assets/car-loan-payment-calculator.png';
import project3Image from '../assets/james-woodrow-violin.png';
import project4Image from '../assets/candidate-search.png';
import project5Image from '../assets/weather-dashboard.png';
import project6Image from '../assets/keyboard.png';
import project7Image from '../assets/metronome.png';
import project8Image from '../assets/employee-tracker.png';
import project9Image from '../assets/vehicle-builder.png';
import project10Image from '../assets/readme-generator.png';
// Add more project images as needed

const projects = [
    {
        id: 1,
        image: project1Image,
        title: 'FinanceFlow',
        deployedLink: 'https://finance-flow-f2zu.onrender.com/',
        githubLink: 'https://github.com/RoryDowse/finance-flow',
    },
    {
        id: 2,
        image: project2Image,
        title: 'Car Loan Payment Calculator',
        deployedLink: 'https://rorydowse.github.io/car-loan-payment/',
        githubLink: 'https://github.com/RoryDowse/car-loan-payment',
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
        title: 'Candidate Search',
        deployedLink: 'https://candidate-search-q9zr.onrender.com/',
        githubLink: 'https://github.com/RoryDowse/candidate-search',
    },
    {
        id: 5,
        image: project5Image,
        title: 'Weather Dashboard',
        deployedLink: 'https://weather-dashboard-wuv2.onrender.com',
        githubLink: 'https://github.com/RoryDowse/weather-dashboard',
    },
    {
        id: 6,
        image: project6Image,
        title: 'Keyboard',
        deployedLink: 'https://eloquent-nougat-8353a0.netlify.app/',
        githubLink: 'https://github.com/RoryDowse/keyboard',
    },
    {
        id: 7,
        image: project7Image,
        title: 'Metronome',
        deployedLink: 'https://aquamarine-selkie-ba12b1.netlify.app/',
        githubLink: 'https://github.com/RoryDowse/metronome',
    },
    {
        id: 8,
        image: project8Image,
        title: 'Employee Tracker',
        deployedLink: 'https://drive.google.com/file/d/1VY9Po9H4JHbiBqo2l9NSJ67scy9An9Kh/view?usp=drive_link',
        githubLink: 'https://github.com/RoryDowse/employee-tracker',
    },
    {
        id: 9,
        image: project9Image,
        title: 'Vehicle Builder',
        deployedLink: 'https://drive.google.com/file/d/1R-ngPIMKgweiBMfxdGWGjm9BPcg-Z6Yr/view?usp=drive_link',
        githubLink: 'https://github.com/RoryDowse/vehicle-builder',
    },
    {
        id: 10,
        image: project10Image,
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