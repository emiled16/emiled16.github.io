import React from 'react';
import { Link } from 'react-router-dom';
import { booksData } from '../data/booksData';
import './Books.css';

const Books = () => {
  return (
    <section className="books section no-min-height">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <h2 className="section-title" style={{ margin: 0 }}>Books I've Read</h2>
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

        <p className="books-intro">
          A collection of books I've completed and my in-depth thoughts on them.
          From Dostoevsky's philosophical depths to modern insights on decision-making and risk.
        </p>

        {/* Books Grid */}
        <div className="books-grid">
          {booksData.map((book) => (
            <Link 
              key={book.id} 
              to={`/books/${book.id}`}
              className="book-card-link"
            >
              <div className="book-card">
                <div className="book-cover" style={{ backgroundImage: `url(${book.cover})` }}></div>
                
                <div className="book-details">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">by {book.author}</p>
                  
                  <div className="book-meta-info">
                    <span className="book-genre">{book.genre}</span>
                    <span className="book-year">{book.year}</span>
                  </div>

                  <div className="book-rating">
                    {'⭐'.repeat(book.rating)}
                  </div>

                  <p className="book-description">{book.description}</p>

                  <div className="read-more-link">Read My Notes →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
