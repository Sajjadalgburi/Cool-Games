import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { POPULAR_GAMES_QUERY } from '../../utils/queries';

const PopularGamesList = () => {
  const { loading, error, data } = useQuery(POPULAR_GAMES_QUERY);
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      // If data is loaded and there are games, update the state
      setGames(data.popularGames);
    }
  }, [loading, data]); // Trigger effect when loading or data changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching popular games</p>;

  return (
    <div className="colSystem grid gap-y-6 gap-x-4 grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-flow-row-dense">
      <h2>Popular Games</h2>
      {games.map((game) => (
        <div key={game.id} className="card w-80 mx-3 bg-base-100 shadow-xl">
          <figure>
            <img
              src={`https://opencritic.com/${game.images.banner.sm}`} // Use correct image size here
              alt={`Image for ${game.name}`}
            />
          </figure>
          <div className="card-body flex flex-col justify-center items-center">
            <h3 className="card-title">{game.name}</h3>
            <p>Rating {Math.ceil(game.topCriticScore)}</p>
            <Link to={game.url}>Game Url</Link>
            <Link to={'/test'} className="card-actions">
              <button className="btn btn-primary">View</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularGamesList;
