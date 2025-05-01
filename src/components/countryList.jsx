import React from 'react';
import { Link } from 'react-router-dom';

function CountryList({ countries }) {
  return (
    <div className="row">
      {countries.map((country) => (
        <div key={country.name.common} className="col-md-4 mb-4">
          <Link to={`/country/${country.name.common}`} style={{ textDecoration: 'none' }}>
            <div className="card h-100 shadow-sm">
              <img
                src={country.flags.svg}
                className="card-img-top"
                alt={`${country.name.common} flag`}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title text-dark">{country.name.common}</h5>
                <p className="card-text text-muted">Region: {country.region}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountryList;
