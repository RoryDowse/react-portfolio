import React from 'react';
import Project from '../components/Project';
import './Portfolio.css';

import project1Image from '../assets/project-1.png';
import project2Image from '../assets/project-2.png';
import project3Image from '../assets/project-3.png';
// Add more project images as needed

const projects = [
    {
        id: 1,
        image: project1Image,
        title: 'Project 1',
        deployedLink: 'https://github.com',
        githubLink: 'https://github.com',
    },
    {
        id: 2,
        image: project2Image,
        title: 'Project 2',
        deployedLink: 'https://github.com',
        githubLink: 'https://github.com',
    },
    {
        id: 3,
        image: project3Image,
        title: 'Project 3',
        deployedLink: 'https://github.com',
        githubLink: 'https://github.com',
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