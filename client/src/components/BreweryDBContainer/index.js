import React from 'react';
import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm';
import SearchList from '../SearchList';
import API from '../../utils/API';

export default function BreweryDBContainer () {
    const [result, setResult] = useState({});
    const [select, setSelect] = useState('');
  
    const searchBrewery = (query) =>
      API.search(query)
        .then((res) => setResult(res.data))
        .catch((err) => console.log(err));
    
    // Default search
    useEffect(() => {
      searchBrewery('Colorado');
    }, []);

    const handleSelectChange = (e) => setSelect(e.target.option);
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      searchBrewery(select);
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
      <div className='container'>
            <div>
              <SearchForm
                value={select}
                handleInputChange={handleSelectChange}
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
                <h3>No Results to Display</h3>
              )}
            </div>
      </div>
    );
  };