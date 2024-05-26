// React and React Router imports
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Apollo Client imports
import { useQuery, useMutation } from '@apollo/client';

// Utility imports
import { POPULAR_GAMES_QUERY } from '../../utils/queries';
import { SAVE_GAME } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { saveGameIds, getSavedGameIds } from '../../utils/localStorage';
import { useAuth } from '../../../context/AuthContext';

// Component imports
import SignUpModal from '../SignUpModal/Index';
import LoginInModal from '../LoginModal/Index';

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

  const [saveGame] = useMutation(SAVE_GAME);

  useEffect(() => {
    if (!loading && data && data.popularGames) {
      setGames(data.popularGames);
    }
  }, [data, loading]);

  useEffect(() => {
    saveGameIds(savedGameIds);
  }, [savedGameIds]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching popular games</p>;

  const alertUser = () => {
    alert('Please sign up or log in to save a game');
  };

  // handle saviing a game fucntion
  const handleSaveGame = async (game_id) => {
    const gameToSave = games.find((game) => game.game_id === game_id);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      // Remove the previous game ID if it exists
      const filteredSavedGameIds = savedGameIds.filter(
        (savedGameId) => savedGameId !== game_id,
      );

      // Manually remove the __typename field from the game object
      // This is necessary because the saveGame mutation does not accept the __typename field
      const { __typename, ...gameData } = gameToSave;

      // Ensure game_id is a string and not null
      if (typeof gameData.game_id !== 'string' || !gameData.game_id) {
        throw new Error('Invalid game_id');
      }

      // Save the game according to the saveGame mutation from GraphQL
      const response = await saveGame({
        variables: { gameInput: { ...gameData } },
      });

      // If the saveGame mutation is successful, update the savedGameIds state
      if (response.data && response.data.saveGame) {
        setSavedGameIds([...filteredSavedGameIds, gameData.game_id]);
      }
    } catch (err) {
      console.error(err);
    }
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
              <div className="flex justify-between align-middle">
                <Link to={`/game/${game.game_id}`}>
                  <button className="btn btn-primary">View Game</button>
                </Link>
                <button
                  className="btn btn-secondary"
                  disabled={savedGameIds?.some(
                    (savedGameId) => savedGameId === game.game_id,
                  )}
                  onClick={() => handleSaveGame(game.game_id)}
                >
                  {savedGameIds?.some(
                    (savedGameId) => savedGameId === game.game_id,
                  )
                    ? 'Already Saved'
                    : 'Save'}
                </button>
              </div>
            ) : (
              <div className="flex justify-between align-middle">
                <button
                  className="btn btn-primary"
                  onClick={() => handleOpenModal('logIn')}
                >
                  View Game
                </button>
                <button className="btn btn-secondary" onClick={alertUser}>
                  Save Game
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
