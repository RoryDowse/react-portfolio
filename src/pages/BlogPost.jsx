import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

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
        {post.content.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return <p key={index}>{block.text}</p>;
            case "code":
              return (
                <pre key={index}>
                  <code>{block.text}</code>
                </pre>
              );
            case "list":
              return block.ordered ? (
                <ol key={index}>
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              ) : (
                <ul key={index}>
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            default:
              return null; // Handle unknown types gracefully
          }
        })}
      </div>
    );
};
  
export default BlogPost;