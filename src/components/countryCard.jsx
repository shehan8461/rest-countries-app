import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CountryCard = ({ country }) => {
  return (
    <div className="card shadow-sm border-0 rounded-4 h-100">
      <img
        src={country.flags.svg}
        alt={country.name.common}
        className="card-img-top rounded-top"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold text-primary">{country.name.common}</h5>
        <p className="card-text mb-1">
          <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
        </p>
        <p className="card-text mb-1">
          <strong>Region:</strong> {country.region}
        </p>
        <p className="card-text">
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
