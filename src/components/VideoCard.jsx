import { useState } from 'react';
import './VideoCard.css';

const VideoCard = ({ title, description, youtubeId }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    return (
        <div className="video-card">
            {isPlaying ? (
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${youtubeId}?rel=0&autohide=1&modestbranding=1&autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <div className="video-facade" onClick={handlePlayVideo} role="button" tabIndex={0} onKeyDown={handlePlayVideo}>
                    <img
                        width="560"
                        height="315"
                        src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                        alt={`Thumbnail for ${title}`}
                        loading="lazy"
                    />
                    <button className="play-button" aria-label={`Play ${title}`}></button>
                </div>
            )}
            <h3 className="video-card-title">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default VideoCard;
