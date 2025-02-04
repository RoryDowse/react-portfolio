import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './css/Project.css';

export default function Project({ image, title, deployedLink, githubLink }) {
    return (
        <div className="project-container">
            <div className="project-image">
                <img 
                src={image} 
                alt={`Screenshot of ${title} project`}
                width="300"
                height="200"
                />
                <div className="overlay">
                    <a href={deployedLink} className="project-title" target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                    <a href={githubLink} className="github-link" target="_blank" rel="noopener noreferrer"
                    aria-label={`GitHub link for ${title} project`}
                    >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    );
}