import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            <h1>Blog</h1>
            {posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                posts.map((post) => (
                    <div key={post.id} className="blog-post">
                        <h2>
                            <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h2>
                        <p>{post.intro}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Blog;