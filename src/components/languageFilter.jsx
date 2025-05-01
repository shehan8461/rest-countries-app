import React from 'react';

function LanguageFilter({ onSelectLanguage }) {
  return (
    <div className="mb-4 d-flex justify-content-center">
      <select
        onChange={(e) => onSelectLanguage(e.target.value)}
        className="form-select"
        style={{ width: '30%' }}
      >
        <option value="">All Languages</option>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Spanish">Spanish</option>
        <option value="Arabic">Arabic</option>
        <option value="Chinese">Chinese</option>
      </select>
    </div>
  );
}

export default LanguageFilter;
