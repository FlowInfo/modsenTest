import React from "react";

function Container() {
  return (
    <div className="tabsContainer">
      <div className="category">Categories</div>

      <select className="Category">
        <option>all</option>
      </select>

      <div className="sort">Sorting by</div>
      <select className="Sort">
        <option>relevance</option>
      </select>
    </div>
  );
}

export default Container;