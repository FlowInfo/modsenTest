import React, {useEffect, useState} from "react";
import BookCard from "./BookCard";
import Pagination from "./Pagination";



const BookList = ({ books, totalBooks, handleLoadMore }) => {
  const [loading, setLoading] = useState(false);

  const uniqueBooks = books.filter((book, index, arr) => {
    return arr.findIndex((b) => b.id === book.id) === index;
  });

  const handleButtonClick = () => {
    handleLoadMore();
    setLoading(true);
  }

  useEffect(() => {
    setLoading(false);
  }, [books]);

  return (
    <>
<div className="bookList">
        {totalBooks > 0 ? (
          <p className="totalBooks">Found {totalBooks} results</p>
        ) : (
          <p className="totalBooks">Found 0 results</p>
        )}
          <div className="bookGrid">
            {uniqueBooks.map((book) => (
              <BookCard key={book.id} book={book} />
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
