import React from 'react';
import { FaPaintBrush, FaLaptopCode, FaShoppingCart, FaTools, FaSearch, FaUniversalAccess, FaRobot, FaWrench } from 'react-icons/fa';
import './Services.css';

const iconMap = {
    'Website Design': <FaPaintBrush />,
    'Website Development': <FaLaptopCode />,
    'Search Engine Optimization (SEO)': <FaSearch />,
    'eCommerce Business': <FaShoppingCart />,
    'Website Accessibility': <FaUniversalAccess />,
    'Web Applications': <FaTools />,
    'AI Integration': <FaRobot />,
    'Web Maintenance': <FaWrench />,
};

const services = [
    
    { title: 'Website Design', description: 'Crafting visually stunning and responsive websites across all devices.' },
    { title: 'Website Development', description: 'Building robust and secure websites using the latest web technologies.' },
    { title: 'Search Engine Optimization (SEO)', description: 'Optimizing your site to rank on top on Google.' },
    { title: 'eCommerce Business', description: 'Building robust online stores to drive sales and grow your business.' },
    { title: 'Website Accessibility', description: 'Ensuring your site can be used by people with disabilities and meets WCAG standards.' },
    { title: 'Web Applications', description: 'Tailored software solutions that solve unique challenges for you and your business.' },
    { title: 'AI Integration', description: 'Integrating cutting-edge AI capabilities into your website.' },
    { title: 'Web Maintenance', description: 'Keeping your website up to date and optimizing its performance for optimal user experience.' },
];

export default function Services() {
  return (
    <section className="services animated-background">
        <h2>Services</h2>
        <div className="services-container">
        {services.map((service, index) => (
            <div key={index} className="service">
            <div className="icon">{iconMap[service.title]}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </div>
        ))}
        </div>
        <button
            className="btn btn-primary btn-lg"
            aria-label="Inquire Now"
            style={{ marginTop: '80px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)' }}
            onClick={() => document.getElementById('inquire-now').scrollIntoView({ behavior: 'smooth' })}
        >
            Inquire Now
        </button>
    </section>
    );
}
