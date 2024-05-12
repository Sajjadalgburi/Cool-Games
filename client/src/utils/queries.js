import { gql } from '@apollo/client';

// Define the query for fetching popular games
export const POPULAR_GAMES_QUERY = gql`
  query PopularGames {
    popularGames {
      game_id
      title
      rating
      releaseDate
      link
      image
    }
  }
`;

// Define the query for fetching a single user
export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    singleUser(userId: $userId) {
      _id
      username
      savedGames {
        game_id
      }
    }
  }
`;
