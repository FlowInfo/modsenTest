import React from "react";

// function clearInput() {
//   var input = document.getElementById('searchInput');
//   input.value = '';
// }


class Header extends React.Component {
  render() {
    return (<div className="name">
      <header className="header">

        <div className="head">
          <h1>Search for books</h1>
        </div>

        <div className="search">
          <input type = "text" id = "searchInput" placeholder = "Enter text to serch" />
          <button id = "searchButton">button</button>
        </div>

        <div className="tabsContainer">
          <div className="category">Categories</div>
        
          <select className = "Category">
            <option>all</option>
          </select>

          <div className="sort">Sorting by</div>
          <select className = "Sort">
          <option>relevance</option>

          </select>
        </div>
        
      </header>
    </div>
  
    )
  }
}


export default Header;
