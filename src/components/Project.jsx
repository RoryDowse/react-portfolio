import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Project.css';

export default function Project({ image, title, deployedLink, githubLink }) {
    return (
        <div className="project-container">
            <div className="project-image">
                <img 
                    src={image} 
                    alt={`Screenshot of ${title}`}
                    width="100%"
                    height="100%"
                    loading="id === 1 ? 'eager' : 'lazy'"
                    />
                <div className="overlay">
                    <a href={deployedLink} className="project-title" target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                    <a href={githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    );
}