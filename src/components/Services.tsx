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
    { title: 'Search Engine Optimization (SEO)', description: 'Optimizing your site to rank higher on Google.' },
    { title: 'eCommerce Business', description: 'Building robust online stores to drive sales and grow your business.' },
    { title: 'Website Accessibility', description: 'Ensuring your site is usable by people with disabilities and meets WCAG standards.' },
    { title: 'Web Applications', description: 'Tailored software solutions for unique challenges.' },
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
    </section>
    );
}
