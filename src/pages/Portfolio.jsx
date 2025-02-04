import { Helmet } from 'react-helmet';
import Project from '../components/Project';
import './Portfolio.css';

import project1Image from '../assets/financial-landing-page.webp';
import project2Image from '../assets/dictionary-db.webp';
import project3Image from '../assets/dev-demand.webp';
import project4Image from '../assets/finance-flow.webp';
import project5Image from '../assets/car-loan-payment-calculator.webp';
import project6Image from '../assets/james-woodrow-violin.webp';
import project7Image from '../assets/keyboard.webp';
import project8Image from '../assets/metronome.webp';
import project9Image from '../assets/employee-tracker.webp';
// Add more project images as needed

const projects = [
    {
        id: 1,
        image: project1Image,
        title: 'Financial Landing Page',
        deployedLink: 'https://financial-landing-page.vercel.app/',
        githubLink: 'https://github.com/RoryDowse/financial-landing-page',
    },
    {
        id: 2,
        image: project2Image,
        title: 'Dictionary Database',
        deployedLink: 'https://dictionary-db.onrender.com',
        githubLink: 'https://github.com/RoryDowse/Dictionary-DB',
    },
    {
        id: 3,
        image: project3Image,
        title: 'DevDemand',
        deployedLink: 'https://devdemand.onrender.com/',
        githubLink: 'https://github.com/RoryDowse/DevDemand',
    },
    {
        id: 4,
        image: project4Image,
        title: 'FinanceFlow',
        deployedLink: 'https://finance-flow-f2zu.onrender.com/',
        githubLink: 'https://github.com/RoryDowse/finance-flow',
    },
    {
        id: 5,
        image: project5Image,
        title: 'Car Loan Payment Calculator',
        deployedLink: 'https://rorydowse.github.io/car-loan-payment/',
        githubLink: 'https://github.com/RoryDowse/car-loan-payment',
    },
    {
        id: 6,
        image: project6Image,
        title: 'James Woodrow Violin',
        deployedLink: 'https://jameswoodrowviolin.com/',
        githubLink: 'https://github.com/RoryDowse/james-woodrow-violin',
    },
    {
        id: 7,
        image: project7Image,
        title: 'Keyboard',
        deployedLink: 'https://eloquent-nougat-8353a0.netlify.app/',
        githubLink: 'https://github.com/RoryDowse/keyboard',
    },
    {
        id: 8,
        image: project8Image,
        title: 'Metronome',
        deployedLink: 'https://aquamarine-selkie-ba12b1.netlify.app/',
        githubLink: 'https://github.com/RoryDowse/metronome',
    },
    {
        id: 9,
        image: project9Image,
        title: 'Employee Tracker',
        deployedLink: 'https://drive.google.com/file/d/1VY9Po9H4JHbiBqo2l9NSJ67scy9An9Kh/view?usp=drive_link',
        githubLink: 'https://github.com/RoryDowse/employee-tracker',
    },
    // Add more projects as needed
];

export default function Portfolio() {
    return (
        <section className="portfolio-section" aria-labelledby="portfolio-title">
            <Helmet>
                <title>Portfolio | Rory Dowse Dev</title>
                <link rel="canonical" href="https://rorydowsedev.com/portfolio" />
                <meta name="description" content="View Rory Dowse's software development portfolio and select the project URL or GitHub repository to learn more." />
            </Helmet>
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