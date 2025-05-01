import { useEffect, useState } from 'react';
import { fetchAllCountries } from './services/api';
import React from 'react';
import SearchBar from './components/searchBar';
import RegionFilter from './components/regionFilter';
import CountryList from './components/countryList';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import LanguageFilter from './components/languageFilter';
import CountryDetails from './components/CountryDetails'; // ✅ Import CountryDetails

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const location = useLocation();

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchAllCountries();
      setCountries(data);
    };
    getCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const regionFilteredCountries = filteredCountries.filter((country) =>
    selectedRegion ? country.region === selectedRegion : true
  );

  const languageFilteredCountries = regionFilteredCountries.filter((country) =>
    selectedLanguage
      ? country.languages && Object.values(country.languages).includes(selectedLanguage)
      : true
  );

  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Navbar />}

      <Routes>
        {/* ✅ Login Route */}
        <Route path="/login" element={<Login />} />

        {/* ✅ Home Route (Country Explorer) */}
        <Route
          path="/"
          element={
            <div className="container mt-4">
              <h1 className="mb-4">🌍 Country Explorer</h1>
              <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
              <RegionFilter onSelectRegion={setSelectedRegion} />
              <LanguageFilter onSelectLanguage={setSelectedLanguage} />
              <CountryList countries={languageFilteredCountries} />
            </div>
          }
        />

        {/* ✅ Country Details Route */}
        <Route path="/country/:countryName" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
