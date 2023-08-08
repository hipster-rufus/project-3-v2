import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import API from "../utils/API";

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
      <p>'Brewery' under construction</p>
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
  );
}
