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
            <h2>Blog</h2>
            {posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                posts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="blog-card-link">
                        <div className="blog-card">
                            <h3>{post.title}</h3>
                            <p>{post.intro}</p>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
};

export default Blog;