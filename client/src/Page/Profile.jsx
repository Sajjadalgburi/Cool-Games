import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { removeGameId } from '../utils/localStorage';
import Auth from '../utils/auth';
import { DELETE_GAME } from '../utils/mutations';

const ProfilePage = () => {
  // use mutation to delete a game
  const [removeGame] = useMutation(DELETE_GAME);

  // handle remove game function to delete a game from the user's profile
  const handleRemoveGame = async (game_id) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await removeGame({
        variables: { game_id: game_id },
      });

      // if game is successfully deleted, remove game from local storage
      if (response.data.removeGame.savedGames) {
        removeGameId(game_id);
      }
    } catch (err) {
      // if there's an error, log the error
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  const { loading, data } = useQuery(QUERY_ME);

  if (loading) {
    return <h2 className="text-center text-2xl font-extrabold">LOADING...</h2>;
  }

  return (
    <div className="profileMain mt-11">
      <div className="welcomeSection font-bold">
        <h3 className="text-5xl">
          Welcome to your profile {data.me.username}!
        </h3>
        <p className="mt-8 text-md">
          Here you can view and manage your saved games.
        </p>

        <Link to={'/'}>
          <p className=" text-sm mt-2 italic hover:text-indigo-500 transition">
            want to go back? Click Me!
          </p>
        </Link>
      </div>

      <div className="savedGamesProfile p-4 mt-10">
        <h5 className="font-semibold text-xl uppercase">
          {/* Saved Games will be displayed here */}
          {data.me.savedGames.length
            ? `Viewing ${data.me.savedGames.length} saved ${
                data.me.savedGames.length === 1 ? 'game' : 'games'
              }:`
            : 'You have no saved games!'}{' '}
        </h5>

        <div className=" mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.me.savedGames.map((game) => (
            <div key={game.game_id} className="border rounded shadow p-4">
              <img
                src={game.image}
                alt={`Cover for ${game.title}`}
                className="h-100 w-full object-cover mb-2"
              />

              <div className="gameDescription">
                <h3 className="text-2xl text-center font-semibold mb-1">
                  {game.title}
                </h3>
                <p className="my-3 text-gray-600 mb-2">Rating: {game.rating}</p>
                <p className="my-5 text-gray-600 mb-2">
                  Release Date: {game.releaseDate}
                </p>
              </div>

              <div className="mt-6 flex justify-between align-middle">
                <Link to={game.link} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">View Game</button>
                </Link>
                <button
                  className="btn btn-error"
                  onClick={() => handleRemoveGame(game.game_id)}
                >
                  Delete Game
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
