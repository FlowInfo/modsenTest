import React from "react";

function Input() {
  const waitingKeyPress = (event) => {
    if (event.key === 'Enter') {
      let searchValue = event.target.value; 
      searchValue = searchValue.replace(/ /g,'');
      const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyByMtJ1mpylPuE9Yr9HreMl5Bxzr7FTTS0`;

      console.log('Измененный URL:', searchUrl);
    }
  };

  return (
    <div className="search">
      <input 
        type="text" 
        id="searchInput" 
        placeholder="Enter text to search"  
        onKeyDown={waitingKeyPress}
      />
      <button id="searchButton">button</button>
    </div>
  );
}

export default Input;
