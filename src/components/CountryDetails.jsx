import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchAllCountries } from '../services/api';

function CountryDetails() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const getCountry = async () => {
      const data = await fetchAllCountries();
      const found = data.find((c) => c.name.common === countryName);
      setCountry(found);
    };
    getCountry();
  }, [countryName]);

  if (!country) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5">
      {/* Back button */}
      <Link to="/" className="btn btn-outline-primary mb-4">
        ⬅ Back to Explorer
      </Link>

      <div className="card shadow-lg border-0 rounded-4 p-4">
        <div className="row g-4 align-items-center">
          {/* Flag */}
          <div className="col-md-5 text-center">
            <img
              src={country.flags.svg}
              alt="flag"
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxHeight: '250px', objectFit: 'cover' }}
            />
          </div>

          {/* Details */}
          <div className="col-md-7">
            <h2 className="mb-3 text-primary fw-bold">{country.name.common}</h2>

            <p><strong>🇺🇳 Official Name:</strong> {country.name.official}</p>
            <p><strong>🌍 Region:</strong> {country.region}</p>
            <p><strong>🌐 Subregion:</strong> {country.subregion}</p>
            <p><strong>🏛️ Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
            <p><strong>👥 Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>🗣️ Languages:</strong> {Object.values(country.languages || {}).join(', ') || 'N/A'}</p>
            <p><strong>💰 Currencies:</strong> {Object.values(country.currencies || {}).map((cur) => cur.name).join(', ') || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
