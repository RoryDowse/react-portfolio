import { Helmet } from 'react-helmet';
import React, { Suspense } from 'react';
import './Resume.css';

// Lazy-loaded Proficiencies component
const Proficiencies = React.lazy(() => import('../components/Proficiencies'));

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

            {/* Lazy-loaded Proficiencies component */}
            <Suspense fallback={<div>Loading Proficiencies...</div>}>
                <Proficiencies />
            </Suspense>
        </section>
    );
}