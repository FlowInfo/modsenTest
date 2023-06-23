import React from "react";

const Pagination = ({ handleLoadMore }) => {
    return (
      <div className="pagination">
        <button  className='loadMore' onClick={handleLoadMore}>Load More</button>
      </div>
    );
  };

  export default Pagination