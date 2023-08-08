import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import '../styles/Card.css';

export default function Brewery() {
  const { breweryId } = useParams();

  console.log(breweryId);

  const [brewery, setBrewery] = useState({});

  const fetchBrewery = async () => {
    const b = await API.searchById(breweryId);
    setBrewery(b);
  };

  useEffect(() => {
    fetchBrewery();
  }, [breweryId]);

  console.log(brewery);

  return (
    <div>
      <div>
        <h1>{brewery.name}</h1>
        <div className="intro-card text-start">
          <h5>Phone: {brewery.phone}</h5>
          <h5>Website: <a className="text-info" href={brewery.website_url} >{brewery.website_url}</a>
          </h5>
          <h5>Address: {brewery.street}, {brewery.city}, {brewery.state}</h5>
          <div id="brewery-rating" className="brew-card text-center">
            <h5>Have you visited {brewery.name}? Leave a Rating!</h5>
            <Rating
              start={0}
              stop={5}
              step={1}
              initialRating={0}
              readonly={false}
              direction={"ltr"}
              fractions={2}
            />
          </div>
        </div>
      </div>

    </div>
  );
}
