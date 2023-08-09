import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import { ADD_COMMENT } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import API from "../utils/API";
import AuthService from "../utils/API";
import '../styles/Card.css';

export default function Brewery() {
  // Fetch single brewery
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

  // POST new comment
  const [text, setText] = useState('');

  const [addComment] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const comment = await addComment({
        variables: {
          text,
          breweryId: brewery.id,
          breweryName: brewery.name,
          user: AuthService.getUser().data.username,
        },
      });
      setText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'text') {
      setText(value);
    }
  };
  return (
    <div>
      <div>
        <h1>{brewery.name}</h1>
        <div className="intro-card text-start">
          <h5>Phone: {brewery.phone}</h5>
          <h5>Website: <a className="text-info" href={brewery.website_url} >{brewery.website_url}</a>
          </h5>
          <h5>Address: {brewery.street}, {brewery.city}, {brewery.state}</h5>
              <div className="text-center brew-card p-4">
              <h5>Have you visited {brewery.name}? Let them know what you think!</h5>
                <div className="m-3">
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
                <form onSubmit={handleFormSubmit} className='card-body'>
                  <div className="form-item row m-3">
                    <textarea
                      className="form-input"
                      placeholder="Leave a comment"
                      name="text"
                      type="textarea"
                      value={text}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-item row">
                    <input
                      className="form-input"
                      name="breweryId"
                      type="text"
                      value={brewery.id}
                      hidden
                    />
                  </div>
                  <div className="form-item row">
                    <input
                      className="form-input"
                      name="breweryName"
                      type="text"
                      value={brewery.name}
                      hidden
                    />
                  </div>
                  <button
                    className="form-btn"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
        </div>
      </div>

    </div>
  );
}