import React from 'react';
import { FaLaptopCode, FaShoppingCart, FaTools, FaSearch, FaUniversalAccess, FaRobot, FaWrench } from 'react-icons/fa';

const iconMap = {
    'Web Design': <FaLaptopCode />,
    'eCommerce Development': <FaShoppingCart />,
    'Custom Applications': <FaTools />,
    'Search Engine Optimization (SEO)': <FaSearch />,
    'Accessibility': <FaUniversalAccess />,
    'AI Integration': <FaRobot />,
    'Web Maintenance': <FaWrench />,
};

const services = [
    { title: 'Web Design', description: 'Crafting visually stunning and responsive websites.' },
    { title: 'eCommerce Development', description: 'Building robust online stores to drive sales.' },
    { title: 'Custom Applications', description: 'Tailored software solutions for unique challenges.' },
    { title: 'Search Engine Optimization (SEO)', description: 'Optimizing your site to rank higher on Google.' },
    { title: 'Accessibility', description: 'Ensuring your site is inclusive and WCAG-compliant.' },
    { title: 'AI Integration', description: 'Integrating cutting-edge AI capabilities into your website.' },
    { title: 'Web Maintenance', description: 'Keeping your website up to date and optimizing its performance for optimal user experience.' },
];

export default function Services() {
  return (
    <section className="services">
        <h2>Our Services</h2>
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
