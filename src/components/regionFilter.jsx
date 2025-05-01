import React from 'react';

function RegionFilter({ onSelectRegion }) {
  return (
    <div className="mb-4 d-flex justify-content-center">
      <select
        onChange={(e) => onSelectRegion(e.target.value)}
        className="form-select"
        style={{ width: '30%' }}
      >
        <option value="">All Regions</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default RegionFilter;
