import React, { useState } from 'react';

const SearchBar = ({ searchPhotos }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    searchPhotos(term);
  };

  return (
    
    <div className="search-bar">
      <h2 >Search Images</h2>
      <input
        type="text"
        placeholder="Search for images..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
