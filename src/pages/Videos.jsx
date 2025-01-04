import './Videos.css';

const Videos = () => {
    const videoData = [
        {
            id: 'video1',
            title: 'Dictionary Database App | React and MongoDB',
            description: 'A React-powered dictionary app that lets users search words, view meanings, and explore words by starting letter or full list.',
            youtubeId: 'Axu38Iqbnp4',
        },
        {
            id: 'video2',
            title: 'Video 2',
            description: 'Description for Video 2',
            youtubeId: '',
        },
        {
            id: 'video3',
            title: 'Video 3',
            description: 'Description for Video 3',
            youtubeId: '',
        },
        {
            id: 'video4',
            title: 'Video 4',
            description: 'Description for Video 4',
            youtubeId: '',
        },
    ];

    return (
        <div className ="videos-page">
            <h2>Videos</h2>
            <div className="videos-grid">
                {videoData.map((video) => (
                    <div key={video.id} className="video-card">
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.youtubeId}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                        <h3>{video.title}</h3>
                        <p>{video.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Videos;