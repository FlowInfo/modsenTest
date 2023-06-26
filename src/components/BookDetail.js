import React from "react";
import { useParams } from "react-router-dom";
import noImage from "./images/noImage.png"

const BookDetail = ({ books }) => {
    const { id } = useParams();

    const backupPicture = noImage;
  
    const selectedBook = books.find((book) => book.id === id);
  
    if (!selectedBook) {
      return <p>Loading...</p>;
    }
  
    const { volumeInfo } = selectedBook;

      const goBack = () => {
        window.history.back();
      };
  
    return (
      <div className="bookDetail">
        <div className="cardImage">
          <img className = "bookCoverImage" src={volumeInfo?.imageLinks?.thumbnail || backupPicture} alt="bookCover" />
        </div> 
        <div className="cardInfo">
          <h3>{volumeInfo?.title || ""}</h3> 
          <p className="cardCategory">
            {volumeInfo?.categories?.join(", ") || "N/A"}
          </p>
          <p className="cardAuthors">
             {volumeInfo?.authors?.join(", ") || "N/A"}
          </p>
          <p className="cardDescription">
            {volumeInfo?.description || "N/A"}
          </p>
          <div className="Back">
            <button className="backButton" onClick={goBack}> Back </button>
          </div>
        </div> 
      </div>
    );
  };

  export default BookDetail