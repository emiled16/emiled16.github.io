import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import { getBookById } from '../data/booksData';

const BookDetailPage = () => {
  const { bookId } = useParams();
  const book = getBookById(bookId);

  if (!book) {
    return <Navigate to="/books" replace />;
  }

  return (
    <div className="page">
      <BookDetail book={book} />
    </div>
  );
};

export default BookDetailPage;
