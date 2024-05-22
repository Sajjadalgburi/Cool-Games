import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const ProfilePage = () => {
  // if data isn't here yet, say so
  const { loading, data } = useQuery(QUERY_ME);

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  console.log(data.me);

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
                className="h-40 w-full object-cover mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">{game.title}</h3>
              <p className="text-gray-600 mb-2">Rating: {game.rating}</p>
              <p className="text-gray-600 mb-2">
                Release Date: {game.releaseDate}
              </p>
              <div className="flex justify-between align-middle">
                <Link to={game.link} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">View Game</button>
                </Link>
                <button className="btn btn-error">DELETE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
