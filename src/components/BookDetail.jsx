import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { FaArrowLeft } from 'react-icons/fa';
import './BookDetail.css';

// Import book content files
import CrimeAndPunishmentContent from './bookContents/CrimeAndPunishmentContent';
import NotesFromUndergroundContent from './bookContents/NotesFromUndergroundContent';
import TheBlackSwanContent from './bookContents/TheBlackSwanContent';

const BookDetail = ({ book }) => {
  // Map book IDs to their content components
  const contentComponents = {
    'crime-and-punishment': CrimeAndPunishmentContent,
    'notes-from-underground': NotesFromUndergroundContent,
    'the-black-swan': TheBlackSwanContent
  };

  const ContentComponent = contentComponents[book.id];

  return (
    <section className="book-detail section no-min-height">
      <div className="container">
        {/* Back Button */}
        <Link to="/books" className="back-button">
          <FaArrowLeft /> Back to Books
        </Link>

        {/* Book Header */}
        <div className="book-detail-header">
          <div className="book-detail-cover" style={{ backgroundImage: `url(${book.cover})` }}></div>
          <div className="book-detail-info">
            <h1 className="book-detail-title">{book.title}</h1>
            <p className="book-detail-author">by {book.author}</p>
            <div className="book-detail-meta">
              <span className="book-meta-item">{book.genre}</span>
              <span className="book-meta-item">{book.year}</span>
              <span className="book-meta-item">
                {'⭐'.repeat(book.rating)}
              </span>
            </div>
            <p className="book-detail-description">{book.description}</p>
          </div>
        </div>

        {/* Book Content - Custom structured content for each book */}
        <div className="book-detail-content">
          {ContentComponent ? <ContentComponent /> : <p>Content coming soon...</p>}
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
