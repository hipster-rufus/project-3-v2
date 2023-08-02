import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      ratings {
        _id
        value
        user
      }
    }
  }
`;

export const QUERY_RATINGS = gql`
  query getRatings {
    ratings {
      _id
      value
      user
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      ratings {
        _id
        value
        user
      }
    }
  }
`;
