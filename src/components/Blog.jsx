import React, { useState } from 'react';
import { FaCalendar, FaClock, FaTimes } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  // Template blog post - add your own blog posts by following this structure
  const blogPosts = [
    {
      id: 1,
      title: 'Blog Post Title',
      excerpt: 'Brief description or excerpt of the blog post goes here. This will be displayed as a preview on the blog page.',
      date: '2024-01-20',
      readTime: '5 min read',
      tags: ['Tag1', 'Tag2', 'Tag3'],
      image: 'https://via.placeholder.com/800x400/667eea/ffffff?text=Blog+Post'
    }
  ];

  // Define tag colors - add your own tags and colors here
  const tagColors = {
    'Tag1': '#667eea',
    'Tag2': '#f5576c',
    'Tag3': '#43e97b'
  };

  const [selectedTags, setSelectedTags] = useState([]);

  // Get all unique tags from blog posts
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  // Filter posts based on selected tags
  const filteredPosts = selectedTags.length === 0
    ? blogPosts
    : blogPosts.filter(post =>
        selectedTags.every(tag => post.tags.includes(tag))
      );

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearAllTags = () => {
    setSelectedTags([]);
  };

  return (
    <section className="blog section no-min-height">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <h2 className="section-title" style={{ margin: 0 }}>Blog</h2>
          <span style={{ 
            padding: '0.4rem 0.8rem', 
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
            color: 'white', 
            borderRadius: '6px', 
            fontSize: '0.8rem', 
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Work in Progress
          </span>
        </div>

        <p className="blog-intro">
          Thoughts on technology, machine learning, data science, and the intersection of tech with finance and geopolitics.
        </p>

        {/* Tag Filter Section */}
        <div className="filter-section">
          <div className="filter-header">
            <h3>Filter by Tags</h3>
            {selectedTags.length > 0 && (
              <button className="clear-btn" onClick={clearAllTags}>
                <FaTimes /> Clear All
              </button>
            )}
          </div>
          
          <div className="tags-container">
            {allTags.map((tag, index) => (
              <button
                key={index}
                className={`filter-tag ${selectedTags.includes(tag) ? 'active' : ''}`}
                style={{
                  '--tag-color': tagColors[tag] || '#6366f1',
                  backgroundColor: selectedTags.includes(tag) 
                    ? tagColors[tag] || '#6366f1' 
                    : 'transparent',
                  borderColor: tagColors[tag] || '#6366f1',
                  color: selectedTags.includes(tag) ? '#fff' : 'var(--text-primary)'
                }}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          {selectedTags.length > 0 && (
            <div className="active-filters">
              <span className="filter-label">Active filters:</span>
              {selectedTags.map((tag, index) => (
                <span
                  key={index}
                  className="active-filter-tag"
                  style={{ backgroundColor: tagColors[tag] || '#6366f1' }}
                >
                  {tag}
                  <button onClick={() => toggleTag(tag)} className="remove-tag">
                    <FaTimes />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>
            Showing <strong>{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'post' : 'posts'}
            {selectedTags.length > 0 && ` matching selected filters`}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="blog-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image" style={{ backgroundImage: `url(${post.image})` }}>
                  <div className="blog-overlay"></div>
                </div>
                
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">
                      <FaCalendar /> {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="blog-read-time">
                      <FaClock /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>

                  <div className="blog-tags">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="blog-tag"
                        style={{
                          backgroundColor: `${tagColors[tag] || '#6366f1'}20`,
                          color: tagColors[tag] || '#6366f1',
                          borderColor: tagColors[tag] || '#6366f1'
                        }}
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="read-more-btn">Read More →</button>
                </div>
              </article>
            ))
          ) : (
            <div className="no-results">
              <p>No blog posts found matching the selected filters.</p>
              <button className="clear-btn" onClick={clearAllTags}>Clear Filters</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
