import React, { useEffect, useState } from "react";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [data, setData] = useState({})

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => 
  {if (data.items !== undefined) {
    setBooks([...data.items])}
  } , [data]
  )

  const fetchBooks = async () => {
     
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=js&key=AIzaSyByMtJ1mpylPuE9Yr9HreMl5Bxzr7FTTS0"
      );
      const jsonData = await response.json();

      setData(jsonData);


    
    //   const bookUrls = jsonData.items.map((book) => {
    //     const thumbnail = book.volumeInfo.imageLinks?.thumbnail;
    //     return thumbnail || ""; 
    //   });

    //   setBooks(bookUrls);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="book-list">
      {books.map((imageUrl, index) => (
        <img key={index} src={imageUrl?.volumeInfo?.imageLinks?.thumbnail || ""} alt="Book Cover" />
      ))}
    </div>
  );
};

export default BookList
