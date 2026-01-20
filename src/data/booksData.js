// Books data with all metadata
// Template structure for adding books:
// - id: unique identifier (lowercase with hyphens)
// - title: book title
// - author: book author
// - genre: book genre/category
// - year: publication year
// - rating: your rating (1-5 stars)
// - cover: URL or path to cover image
// - description: brief description of the book
export const booksData = [
  {
    id: 'book-template',
    title: 'Book Title',
    author: 'Author Name',
    genre: 'Genre',
    year: '2024',
    rating: 5,
    cover: 'https://via.placeholder.com/200x300/667eea/ffffff?text=Book+Cover',
    description: 'Brief description of the book goes here.'
  }
];

export const getBookById = (id) => {
  return booksData.find(book => book.id === id);
};
