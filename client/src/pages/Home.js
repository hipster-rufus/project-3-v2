import React from 'react';
// import { useQuery } from '@apollo/client';
// import RatingsList from '../components/RatingsList';
// import { QUERY_RATINGS } from '../utils/queries';

export default function Home () {
  // const { loading, data } = useQuery(QUERY_RATINGS);
  // const ratings = data?.ratings || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            // <RatingsList
            //   ratings={ratings}
            //   title="Latest Ratings"
            // />
            
          )} */}
          <p>Hello!</p>
        </div>
      </div>
    </main>
  );
};