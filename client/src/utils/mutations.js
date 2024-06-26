import { gql } from '@apollo/client';

// mutation to create a new user
export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// mutation to login a user
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_GAME = gql`
  mutation saveGame($gameInput: GameInput!) {
    saveGame(gameInput: $gameInput) {
      _id
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

export const DELETE_GAME = gql`
  mutation removeGame($game_id: ID!) {
    removeGame(game_id: $game_id) {
      _id
      savedGames {
        game_id
      }
    }
  }
`;
