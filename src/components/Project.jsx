import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Project.css';

export default function Project({ id, image, title, deployedLink, githubLink }) {
    return (
        <div className="project-container">
            <div className="project-image">
                <LazyLoadImage 
                    src={image} 
                    alt={title}
                    loading={id === 1 || id === 2 || id === 3 ? "eager" : "lazy"}
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