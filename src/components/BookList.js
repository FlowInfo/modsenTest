// import React, { useEffect, useState } from "react";

// const BookList = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const fetchBooks = async () => {
//     try {
//       const response = await fetch(
//         "https://www.googleapis.com/books/v1/volumes?q=js&key=AIzaSyB_GP2txS8lk2NxDU74yIpQfnX1jp1HvYA"
//       );
//       const jsonData = await response.json();

//       const books = jsonData.items.map((book) => ({
//         title: book.volumeInfo.title,
//         author: book.volumeInfo.authors,
//         imageUrl: book.volumeInfo.imageLinks.thumbnail,
//       }));

//       setBooks(books);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="book-list">
//       {books.map((book, index) => (
//         <div key={index} className="book-item">
//           <img src={book.imageUrl} alt="Book Cover" />
//           <h3>{book.title}</h3>
//           <p>{book.author}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookList;
