import React from 'react';
import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm';
import SearchList from '../SearchList';
import API from '../../utils/API';
import '../../styles/Card.css';

export default function BreweryDBContainer () {
    const [result, setResult] = useState({});
    const [search, setSearch] = useState('');
  
    const searchBrewery = (query) =>
      API.search(query)
        .then((res) => setResult(res.data))
        .catch((err) => console.log(err));
    
    // Default search
    useEffect(() => {
      searchBrewery('Colorado');
    }, []);

    const handleInputChange = (e) => setSearch(e.target.value);
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      searchBrewery(search);
    };
  
    const {
      id = '',
      name = '',
      street = '',
      city = '',
      state = '',
      postal_code = '',
      phone = '',
      website_url = '',
    } = result;
  
    return (
      <div>
        <h1>Breweries</h1>
            <div className='form-card'>
              <SearchForm
                value={search}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
              />
            </div>
            <div>
              {state ? (
                <SearchList
                    id={id}
                    name={name}
                    street={street}
                    city={city}
                    state={state}
                    postal_code={postal_code}
                    phone={phone}
                    website_url={website_url}
                />
              ) : (
                <h3>No Results to display</h3>
              )}
            </div>
      </div>
    );
  };