import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Fetch blog post from the local posts.json file
        const fetchPost = async () => {
            try {
                const response = await fetch(`/posts.json`);
                const data = await response.json();
                const foundPost = data.find(post => post.slug === slug);
                setPost(foundPost); // Set fetched post in the state
            } catch (error) {
                console.error('Error fetching blog post:', error);
            }
        };

        fetchPost(); // Call the fetch function
    }, [slug]); // Add slug as a dependency to re-run the effect on slug change

    if (!post) return <p className="loading">Loading...</p>;

    return (
        <div className="blog-post">
        <Helmet>
            <title>{post.title} | Rory Dowse Dev</title>
            <link rel="canonical" href={`https://rorydowsedev.com/blog/${post.slug}`} />

            {/* Open Graph Meta Tags for Social Sharing */}
            <meta name="title" property="og:title" content={`${post.title} | Rory Dowse Dev`} />
            <meta name="type" property="og:type" content="article" />
            <meta name="image" property="og:image" content={post.image ? `https://rorydowsedev.com${post.image}` : "https://rorydowsedev.com/assets/rory-dowse-headshot.webp"} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="description" property="og:description" content={post.description} />
            <meta name="author" content={post.author} />
            <meta name="date" content={post.date} />
            <meta name="url" property="og:url" content={`https://rorydowsedev.com/blog/${post.slug}`} />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${post.title} | Rory Dowse Dev`} />
            <meta name="twitter:description" content={post.description} />
            <meta name="twitter:url" content={`https://rorydowsedev.com/blog/${post.slug}`} />
            <meta name="twitter:image" content={post.image ? `https://rorydowsedev.com${post.image}` : "https://rorydowsedev.com/assets/rory-dowse-headshot.webp"} />
            <meta name="twitter:image:width" content="1200" />
            <meta name="twitter:image:height" content="630" />
        </Helmet>

        <h2>{post.title}</h2>
        <div className="post-meta">
          <span className="post-author">By {post.author}</span> | <span className="post-date">{post.date}</span>
        </div>
        {post.content.map((block, index) => {
          switch (block.type) {
            case "heading":
              return <h3 key={index}>{block.text}</h3>;
            case "subheading":
              return <h4 key={index}>{block.text}</h4>;
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