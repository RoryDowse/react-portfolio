import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch blog posts from the local posts.json file
        const fetchPosts = async () => {
            try {
                const response = await fetch('/posts.json');
                const data = await response.json();
                setPosts(data); // Set fetched posts in the state
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchPosts(); // Call the fetch function
    }, []);

    return (
        <div className="blog-page">
            <Helmet>
                <title>Blog | Rory Dowse Dev</title>
                <link rel="canonical" href="https://rorydowsedev.com/blog" />
                <meta name="description" content="View Rory Dowse's blog posts to find solutions to questions and challenges encountered in software development." />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "url": "https://rorydowsedev.com",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://rorydowsedev.com/?s={search_term}",
                            "query-input": "required name=search_term"
                        }
                    }
                    `}
                </script>
            </Helmet>
            <h2>Blog</h2>
            {posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                posts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="blog-card-link">
                        <div className="blog-card">
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
};

export default Blog;