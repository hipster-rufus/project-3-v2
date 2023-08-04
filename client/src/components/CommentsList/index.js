import React from 'react';
import { Link } from 'react-router-dom';

export default function CommentsList ({
  comments,
  text,
  showText = true,
  showUsername = true,
}) {
  if (!comments.length) {
    return <p>No comments yet.</p>;
  }

  return (
    <div>
      {showText && <h3>{text}</h3>}
      {comments &&
        comments.map((comment) => (
          <div key={comment._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${comment.commentUser}`}
                >
                  {comment.commentUser} <br />
                  <span style={{ fontSize: '1rem' }}>
                    commented on {comment.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You commented on {comment.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{comment.commentText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/comments/${comment._id}`}
            >
              View
            </Link>
          </div>
        ))}
    </div>
  );
};
