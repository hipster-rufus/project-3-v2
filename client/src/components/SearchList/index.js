import React from 'react';
import { Link } from 'react-router-dom';

function SearchList(props) {
  return (
    <div>
      {props.results.map((result) => (
        <div className="card" key={result.name}>
            <h3 className="card-item">{result.name}</h3>
            <Link to={`/brewery/:${result.id}`}>See details</Link>
        </div>
      ))}
    </div>
  );
}

export default SearchList;