import { gql } from '@apollo/client';

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
