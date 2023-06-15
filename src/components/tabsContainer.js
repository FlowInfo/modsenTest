import React from "react";

function Container() {
  return (
    <div className="tabsContainer">
    <div className="category">Categories</div>

    <select className="Category" >
      <option value="all">all</option>
      <option value="art">art</option>
      <option value="biography">biography</option>
      <option value="computers">computers</option>
      <option value="history">history</option>
      <option value="medical">medical</option>
      <option value="poetry">poetry</option>
    </select>

    <div className="sort">Sorting by</div>
    <select className="Sort">
      <option value="relevance">relevance</option>
      <option value="newest">newest</option>
    </select>
  </div>
  );
}

export default Container;


