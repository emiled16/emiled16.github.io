import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCalendar, FaClock, FaUser } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogById } from '../data/blogsData';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = getBlogById(id);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (blog) {
      // Fetch the markdown content from the public folder
      fetch(`/blogs/${blog.id}.md`)
        .then(response => response.text())
        .then(text => {
          setContent(text);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error loading blog content:', error);
          setLoading(false);
        });
    }
  }, [blog]);

  if (!blog) {
    return (
      <section className="blog-detail section no-min-height">
        <div className="container">
          <div className="blog-not-found">
            <h2>Blog post not found</h2>
            <button onClick={() => navigate('/blog')} className="back-btn">
              <FaArrowLeft /> Back to Blog
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-detail section no-min-height">
      <div className="container">
        <button onClick={() => navigate('/blog')} className="back-btn">
          <FaArrowLeft /> Back to Blog
        </button>

        <article className="blog-detail-content">
          <div className="blog-detail-header">
            <div className="blog-detail-meta">
              <span className="meta-item">
                <FaCalendar /> {new Date(blog.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="meta-item">
                <FaClock /> {blog.readTime}
              </span>
              <span className="meta-item">
                <FaUser /> {blog.author}
              </span>
            </div>

            <h1 className="blog-detail-title">{blog.title}</h1>

            <div className="blog-detail-tags">
              {blog.tags.map((tag, index) => (
                <span key={index} className="blog-detail-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {blog.image && (
            <div className="blog-detail-image" style={{ backgroundImage: `url(${blog.image})` }}>
            </div>
          )}

          <div className="blog-detail-body">
            {loading ? (
              <p>Loading content...</p>
            ) : (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogDetail;
