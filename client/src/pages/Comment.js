import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENT } from '../utils/queries';

export default function Comment () {
  const { commentId } = useParams();

  const { loading, data } = useQuery(QUERY_COMMENT, {
    variables: { commentId: commentId },
  });

  const comment = data?.comment || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {comment.commentUser} <br />
        <span style={{ fontSize: '1rem' }}>
          had this thought on {comment.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {comment.commentText}
        </blockquote>
      </div>
    </div>
  );
};
