import { gql } from '@apollo/client';

// Define the query for fetching popular games
export const POPULAR_GAMES_QUERY = gql`
  query popularGames {
    popularGames {
      game_id
      title
      rating
      link
      releaseDate
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
        title
        rating
        releaseDate
        link
        image
      }
    }
  }
`;

// Define the query for fetching context user
export const QUERY_ME = gql`
  query me {
    # Request fields for the currently authenticated user
    me {
      _id
      username
      savedGames {
        game_id
        title
        rating
        releaseDate
        link
        image
      }
    }
  }
`;

export const SINGLE_GAME = gql`
  query searchGames($game: String!) {
    searchGames(game: $game) {
      game_id
      title
    }
  }
`;
