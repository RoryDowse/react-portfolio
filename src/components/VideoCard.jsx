import './VideoCard.css';

const VideoCard = ({ title, description, youtubeId }) => {
    return (
        <div className="video-card">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <h3 className="video-card-title">{title}</h3>
            <p>{description}</p>
        </div> 
    );
};

export default VideoCard;