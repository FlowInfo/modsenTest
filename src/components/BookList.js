import React, { useEffect, useState } from "react";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchBooks();
  }, [page]); 

  const fetchBooks = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=HTML&startIndex=${(page - 1) * 10}&maxResults=10&key=AIzaSyByMtJ1mpylPuE9Yr9HreMl5Bxzr7FTTS0`
    );
    const jsonData = await response.json();
    setBooks((prevBooks) => [...prevBooks, ...jsonData.items]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="book-list-container">
      <div className="book-list">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img
              src={book?.volumeInfo?.imageLinks?.thumbnail || ""}
              alt="Book Cover"
            />
            <div className="book-info">
              <h3 className="book-title">{book?.volumeInfo?.title || ""}</h3>
              <p className="book-category">
                Category: {book?.volumeInfo?.categories?.[0] || ""}
              </p>
              <p className="book-authors">
                Authors: {book?.volumeInfo?.authors?.join(", ") || ""}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="load-more">
        <button className="buttonLoad" onClick={handleLoadMore}>Load More</button>
      </div>
    </div>
  );
};

export default BookList;

