import React from "react";
import { Link } from "react-router-dom";

function SearchList({ id, name }) {
  return (
    <div>
      <div className="card" key={name}>
        <h3 className="card-item">{name}</h3>
        <Link to={`/breweries/${id}`}>See details</Link>
      </div>
    </div>
  );
}

export default SearchList;
