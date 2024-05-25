import { useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { SINGLE_GAME } from '../utils/queries';
import { useEffect } from 'react';

const SingleGame = () => {
  const { game_id } = useParams();

  const [singleGame, { loading, data, error }] = useLazyQuery(SINGLE_GAME);

  useEffect(() => {
    singleGame({ variables: { game_id: game_id } });
  }, [data]);

  return (
    <div className="singleGame">
      <h1>Game Details</h1>
      <p>Game ID: {game_id}</p>
      {/* Add more details and fetch data based on game_id */}
    </div>
  );
};

export default SingleGame;
