import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { POPULAR_GAMES_QUERY } from '../../utils/queries';
import Auth from '../../utils/auth';
import { useAuth } from '../../../context/AuthContext';
import SignUpModal from '../SignUpModal/Index';
import LoginInModal from '../LoginModal/Index';

// apollo client
import { useQuery, useMutation } from '@apollo/client';
import { SAVE_GAME } from '../../utils/mutations';

// imported the helper functions from localStorage.js
import { saveGameIds, getSavedGameIds } from '../../utils/localStorage';

const PopularGamesList = () => {
  // use the useQuery hook to make a query request to the server
  const { loading, error, data } = useQuery(POPULAR_GAMES_QUERY);

  // create a state for saving returned games data from the server
  const [games, setGames] = useState([]);

  // create state to hold saved game_id values
  const [savedGameIds, setSavedGameIds] = useState(getSavedGameIds());

  const {
    currentModal,
    formState,
    handleOpenModal,
    handleCloseModal,
    handleChange,
  } = useAuth();

  useEffect(() => {
    if (!loading && data && data.popularGames) {
      setGames(data.popularGames);
    }

    // if data exists or has changed from the response of the query, then run the setGames function to update the games state
    return () => saveGameIds(savedGameIds);
  }, [data, loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching popular games</p>;

  const alretUser = () => {
    alert('Please sign up or log in to save a game');
  };
  return (
    <>
      <h2 className="text-4xl font-bold my-9 text-center">Popular Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game) => (
          <div key={game.game_id} className="border rounded shadow p-4">
            <img
              src={game.image}
              alt={`Cover for ${game.title}`}
              className="h-40 w-full object-cover mb-2"
            />
            <h3 className="text-lg font-semibold mb-1">{game.title}</h3>
            <p className="text-gray-600 mb-2">Rating: {game.rating}</p>
            <p className="text-gray-600 mb-2">Genre: {game.genre}</p>
            {Auth.loggedIn() ? (
              <Link
                to={`/game/${game.game_id}`}
                className="flex justify-between align-middle"
              >
                <button className="btn btn-secondary">Save Game</button>
                <button className="btn btn-primary">View Game</button>
              </Link>
            ) : (
              <div className="flex justify-between align-middle">
                <button className="btn btn-secondary" onClick={alretUser}>
                  Save Game
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleOpenModal('logIn')}
                >
                  View Game
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      {currentModal === 'signUp' && (
        <SignUpModal
          isOpen={currentModal === 'signUp'}
          formState={formState}
          onChange={handleChange}
          onClose={handleCloseModal}
        />
      )}
      {currentModal === 'logIn' && (
        <LoginInModal
          isOpen={currentModal === 'logIn'}
          formState={formState}
          onChange={handleChange}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default PopularGamesList;
