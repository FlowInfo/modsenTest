import React from 'react';

const FilterOptions = ({ category, sorting, setCategory, setSorting }) => {
  return (
<div className="filterOptions">
  <div>
    <label className='Category'>Categories</label>
    <select id="category" value={category} onChange={e => setCategory(e.target.value)}>
      {['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'].map(option => (
        <option key={option} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
      ))}
    </select>
  </div>

  <div>
    <label className='Sorting'>Sorting by</label>
    <select id="sorting" value={sorting} onChange={e => setSorting(e.target.value)}>
      {['relevance', 'newest'].map(option => (
        <option key={option} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
      ))}
    </select>
  </div>
</div>

  );
};

export default FilterOptions;
