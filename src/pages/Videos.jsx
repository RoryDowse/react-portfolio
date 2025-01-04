import { Helmet } from 'react-helmet';
import VideoCard from '../components/VideoCard';
import './Videos.css';

const Videos = () => {
    const videoData = [
        {
            id: 'video1',
            title: 'Dictionary Database App | React and MongoDB',
            description: 'A React-powered dictionary app that lets users search words, view meanings, and explore words by starting letter or full list.',
            youtubeId: 'Axu38Iqbnp4',
        },
        // {
        //     id: 'video2',
        //     title: 'Video 2',
        //     description: 'Description for Video 2',
        //     youtubeId: '',
        // },
        // {
        //     id: 'video3',
        //     title: 'Video 3',
        //     description: 'Description for Video 3',
        //     youtubeId: '',
        // },
        // {
        //     id: 'video4',
        //     title: 'Video 4',
        //     description: 'Description for Video 4',
        //     youtubeId: '',
        // },
    ];

    return (
        <section className ="videos-page">
            <Helmet>
                <title>Videos | Rory Dowse Dev</title>
                <link rel="canonical" href="https://rorydowsedev.com/videos" />
                <meta name="description" content="View Rory Dowse's video and to learn more about Rory's projects." />
            </Helmet>
            <h2>Videos</h2>
            <div className="videos-grid">
                {videoData.map((video) => (
                   <VideoCard
                        key={video.id}
                        title={video.title}
                        description={video.description}
                        youtubeId={video.youtubeId}
                    />
                ))}
            </div>
        </section>
    );
};

export default Videos;