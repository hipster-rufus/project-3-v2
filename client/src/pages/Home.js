import React from 'react';
// import { useQuery } from '@apollo/client';
// import RatingsList from '../components/RatingsList';
// import { QUERY_RATINGS } from '../utils/queries';
import '../styles/Card.css';

export default function Home () {
  // const { loading, data } = useQuery(QUERY_RATINGS);
  // const ratings = data?.ratings || [];

  return (
    <main>
      <h1>Welcome to BrewFly!</h1>
      <div className="intro-card">
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            // <RatingsList
            //   ratings={ratings}
            //   title="Latest Ratings"
            // />
            
          )} */}
      </div>
    </main>
  );
};