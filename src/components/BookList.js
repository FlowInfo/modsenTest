// import React, { useEffect, useState } from "react";

// const BookList = () => {
//   const [books, setBooks] = useState([]);
//   const [data, setData] = useState({})

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   useEffect(() => 
//   {if (data.items !== undefined) {
//     setBooks([...data.items])}
//   } , [data]
//   )

//   const fetchBooks = async () => {
     
//     const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=js&key=AIzaSyByMtJ1mpylPuE9Yr9HreMl5Bxzr7FTTS0");
//     const jsonData = await response.json();

//     setData(jsonData);
//   }

//   return (
//     <div className="book-list">
//       {books.map((imageUrl, index) => (
//         <img key={index} src={imageUrl?.volumeInfo?.imageLinks?.thumbnail || ""} alt="Book Cover" />
//       ))}
//     </div>
//   );
// };

// export default BookList


import React, { useEffect, useState } from "react";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchBooks();
  }, [page]); 

  const fetchBooks = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=js&startIndex=${(page - 1) * 10}&maxResults=10&key=AIzaSyByMtJ1mpylPuE9Yr9HreMl5Bxzr7FTTS0`
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
          <img
            key={index}
            src={book?.volumeInfo?.imageLinks?.thumbnail || ""}
            alt="Book Cover"
          />
        ))}
      </div>
      <div className="load-more">
        <button className="buttonLoad" onClick={handleLoadMore}>Load More</button>
      </div>
    </div>
  );
};

export default BookList;


