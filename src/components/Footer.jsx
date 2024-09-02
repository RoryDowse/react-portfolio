import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="custom-footer text-light py-3">
      <div className="container text-center">
        {/* Set Icons */}
        <div className="mb-2">
          <a 
            href="https://www.linkedin.com/in/rorydowse" 
            className="text-light me-3" 
            aria-label="LinkedIn"
            style={{ fontSize: '24px' }}
            target='_blank'
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a 
            href="https://github.com/rorydowse" 
            className="text-light me-3" 
            aria-label="GitHub"
            style={{ fontSize: '24px' }}
            target='_blank'
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a 
            href="mailto:rorydowse@hotmail.com" 
            className="text-light" 
            aria-label="Email"
            style={{ fontSize: '24px' }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        
        {/* Copyright Information */}
        <p className="mb-0">&copy; {new Date().getFullYear()} Rory Dowse. All rights reserved.</p>
      </div>
    </footer>
  );
}
