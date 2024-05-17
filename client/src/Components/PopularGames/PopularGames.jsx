import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { POPULAR_GAMES_QUERY } from '../../utils/queries';
import { Button } from 'flowbite-react';
import Auth from '../../utils/auth';

const PopularGamesList = () => {
  const { loading, error, data } = useQuery(POPULAR_GAMES_QUERY);
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (!loading && data.popularGames) {
      setGames(data.popularGames);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching popular games</p>;

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
                className="flex justify-center align-middle"
              >
                <Button>View Game</Button>
              </Link>
            ) : (
              <Link className="flex justify-center align-middle">
                <Button>LOGIN</Button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularGamesList;
