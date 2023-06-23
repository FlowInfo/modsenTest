import React from "react";
import {Link} from 'react-router-dom';
import noImage from "./images/noImage.png"

const BookCard = ({ book }) => {
    const categories = book?.volumeInfo?.categories || [];
    const authors = book?.volumeInfo?.authors || [];

    const thumbnail = book?.volumeInfo?.imageLinks?.thumbnail;
    const backupPicture = noImage;

    const title = book?.volumeInfo?.title || '';

    return (
      <Link to={`/books/${book.id}`} style={{ textDecoration: 'none' }}>
      <div className="bookCard">
        {thumbnail ? (<div className="imageWrapper">
          <img
            className="bookCardImage"
            src={thumbnail}
            alt="bookCover"
            />
            </div>) : (<div className="noImageWrapper">
              <img src = {backupPicture} alt=""/>
            </div>)}
        <div className="textInfo">
          <h3 className="bookCardTitle">{title}</h3> 
          <p>Category: {categories[0] || ''}</p>
          <p>Authors: {authors.join(', ') || ''}</p>
        </div>
      </div>
      </Link>
    );
  };

  export default BookCard