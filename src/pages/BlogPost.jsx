import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Fetch blog post from the local posts.json file
        const fetchPost = async () => {
            try {
                const response = await fetch(`/posts.json`);
                const data = await response.json();
                const foundPost = data.find(post => post.id === parseInt(postId));
                setPost(foundPost); // Set fetched post in the state
            } catch (error) {
                console.error('Error fetching blog post:', error);
            }
        };

        fetchPost(); // Call the fetch function
    }, [postId]); // Add postId as a dependency to re-run the effect on postId change

    if (!post) return <p>Loading...</p>;

    return (
        <div className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
};
  
export default BlogPost;