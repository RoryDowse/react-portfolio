import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './css/Footer.css';

export default function Footer() {
  return (
    <footer className="custom-footer text-light py-3">
      <div className="container text-center">
        {/* Set Icons */}
        <div className="mb-2">
          <a 
            href="https://www.linkedin.com/in/rorydowse" 
            className="linkedin-link me-4" 
            aria-label="LinkedIn"
            style={{ fontSize: '2rem' }}
            target='_blank'
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a 
            href="https://github.com/rorydowse" 
            className="github-link me-4" 
            aria-label="GitHub"
            style={{ fontSize: '2rem' }}
            target='_blank'
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a 
            href="mailto:rorydowse@hotmail.com" 
            className="email-link" 
            aria-label="Email"
            style={{ fontSize: '2rem' }}
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
