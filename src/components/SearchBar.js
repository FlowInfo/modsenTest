import React, {useState} from "react";


const SearchBar = ({ handleSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleInputChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleSearch(searchQuery);
      }
    };
  
    const handleSearchClick = () => {
      handleSearch(searchQuery);
    };
  
    return (
      <div className="searchBar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button className = "search" onClick={handleSearchClick}>Search</button>
      </div>
    );
  };

  export default SearchBar