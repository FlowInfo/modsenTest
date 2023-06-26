import React, {useEffect, useState} from "react";
import BookCard from "./BookCard";
import Pagination from "./Pagination";



const BookList = ({ books, totalBooks, handleLoadMore }) => {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    handleLoadMore();
    setLoading(true);
  }

  useEffect(() => {
    setLoading(false);
  }, [books]);

  return (
    <>
      <div className="book-list">
        {totalBooks > 0 && (
          <p className="totalBooks">Found {totalBooks} results</p>
        )}
        <div className="bookGrid">
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
      {loading && <p className="loading">Loading...</p>}

      {!loading && books.length < totalBooks && (
        <Pagination handleLoadMore={handleButtonClick} />
      )}
    </>
  );
};

export default BookList;
