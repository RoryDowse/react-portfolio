import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me-content">
                <img
                src="./assets/rory-dowse-headshot.webp"
                alt="Rory Dowse"
                className="about-me-photo"
                />
                <div className="about-me-bio">
                    <h2>About Me</h2>
                    <p><span className="first-letter">W</span>hat do Geocities and Longhorn have in common? Hint: it’s more than just a (questionable) UI!</p>
                    <p>Since building my first website on Yahoo Geocities in the noughties (the mid-2000s), I've been captivated by the power of technology to create progress in incredible ways. Exploring the anticipated features of Windows "Longhorn" during a project ignited my passion for innovation and the transformative impact of software engineering.</p>
                    <p>With over 8 years of experience as a front-end developer, I specialize in creating dynamic websites and applications using HTML, CSS, and JavaScript. My focus on delivering exceptional user experiences is outcome-oriented and modernizes the digital landscape.</p>
                    <p>After completing my Master's Degree in the creative arts, I designed and implemented a comprehensive learning platform connecting a global and diverse community of tutors and students, integrating fun, cutting-edge learning resources and applications. Currently, I'm expanding my skill set at Arizona State University’s Software Development Bootcamp, focusing on React, APIs, NoSQL, and GitHub. Outside of the bootcamp, I deep dive into Java technology.</p>
                    <p>I also lead a weekly study group at the Arizona State University Software Development Bootcamp, incorporate agile methodologies into our scrum meetings during projects to foster impactful contributions, and ensure we all succeed as a team. I believe it is essential to work with utmost integrity so that everyone is seen, heard, and feels like they belong, enabling us to architect, code, and ship the highest quality software in our workplace.</p>
                    <p>Let’s connect and explore how my expertise in front-end development, agile methodologies, and passion for thinking outside the box can contribute to your team's success in delivering exceptional user experiences.</p>
                </div>
            </div>
        </section>
    );
}