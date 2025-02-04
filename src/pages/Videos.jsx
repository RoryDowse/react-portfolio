import { Helmet } from 'react-helmet';
import VideoCard from '../components/VideoCard';
import './Videos.css';

const Videos = () => {
    const videoData = [
        {
            id: 'video1',
            title: 'Financial Landing Page | Next.js and Tailwind',
            description: 'A Next.js-powered landing page designed for optimized performance and conversions, featuring a sleek and user-friendly interface for financial services.',
            youtubeId: 'g7y1Au_3PfQ',
        },
        {
            id: 'video2',
            title: 'Dictionary Database App | React and MongoDB',
            description: 'A React-powered dictionary app that lets users search words, view meanings, and explore words by starting letter or full list.',
            youtubeId: 'Axu38Iqbnp4',
        },
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

            <div className="highlight-section">
            <h3>Subscribe</h3>
            <p>Receive the latest updates:</p>
            <a
                className="button btn btn-primary"
                href="https://www.youtube.com/@RoryDowseDev?sub_confirmation=1"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Subscribe to Rory Dowse's YouTube channel"
                title="Subscribe to Rory Dowse's YouTube channel"
            >
                Subscribe
            </a>
            </div>
            
            <div className="videos-section">
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
            </div>
        </section>
    );
};

export default Videos;