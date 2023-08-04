import React from 'react';
import { useQuery } from '@apollo/client';
import Search from '../components/Search';
import CommentsList from '../components/CommentsList';
import { QUERY_COMMENTS } from '../utils/queries';

export default function Home () {
  const { loading, data } = useQuery(QUERY_COMMENTS);
  const comments = data?.comments || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          <Search 
            title="Brewery Search"
          />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CommentsList
              comments={comments}
              title="Latest Comments"
            />
          )}
        </div>
      </div>
    </main>
  );
};