import { gql } from '@apollo/client';

export const POPULAR_GAMES_QUERY = gql`
  query {
    popularGames {
      _id
      title
      rating
      link
    }
  }
`;
