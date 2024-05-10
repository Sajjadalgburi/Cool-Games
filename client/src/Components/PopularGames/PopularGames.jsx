// Desc: Component to display popular games

// importing nessesary libraries
import { useState, useEffect } from 'react';
import getPopularGames from '../../utils/API';

// function to display popular games
const PopularGamesList = () => {
  // setting the state for games
  const [games, setGames] = useState([]);

  // function to fetch popular games
  useEffect(() => {
    const fetchPopularGames = async () => {
      try {
        const data = await getPopularGames();
        setGames(data);
      } catch (err) {
        // Handle error (e.g., show error message, log, etc.)
        console.error('Error fetching games:', err);
      }
    };

    fetchPopularGames();
  }, []);

  return (
    <div className="colSystem grid gap-y-8 gap-x-3 grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-flow-row-dense">
      {/* sttyling for each unique card */}

      <h2>Popular Games</h2>

      {/* mapping through the games to display them */}

      {games.map((game) => {
        return (
          <div key={game.id} className="card m-5 w-70 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body flex flex-col justify-center items-center">
              {' '}
              {/* Added flex properties */}
              <h3 className="card-title">{game.name}</h3>
              <p>Game Score: {game.topCriticScore}</p>
              <p>Game Url: {game.url}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Take Me!</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// exporting the component
export default PopularGamesList;
