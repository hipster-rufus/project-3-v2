import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

// export const QUERY_RATINGS = gql`
//   query getRatings {
//     ratings {
//       _id
//       value
//       user
//       createdAt
//     }
//   }
// `;

// export const QUERY_RATING = gql`
//   query getRating($ratingId: ID!) {
//     rating(ratingId: $ratingId) {
//       _id
//       value
//       user
//       createdAt
//     }
//   }
// `;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
