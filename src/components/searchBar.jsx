import React from 'react';
// Import Bootstrap Icons
function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="d-flex justify-content-center">
      <div className="input-group mb-3" style={{ width: '300px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
        />
        <button className="btn btn-outline-primary" type="button">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
