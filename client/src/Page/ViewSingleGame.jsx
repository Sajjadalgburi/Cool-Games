import { useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { SINGLE_GAME } from '../utils/queries';
import { useEffect } from 'react';

const SingleGame = () => {
  const { game_id } = useParams();

  const [fetchSingleGame, { loading, data, error }] = useLazyQuery(SINGLE_GAME);

  useEffect(() => {
    fetchSingleGame({ variables: { game_id: game_id } });
  }, [game_id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="singleGame mt-12">
      <div className="gameImageDiv ">
        <img
          className="rounded-md gameImage"
          src={data?.singleGame?.image}
          alt={data?.singleGame?.title || 'Game Image'}
        />
      </div>
      <div className="gameDetails">
        <h1 className="text-3xl font-bold text-center mt-6">
          {data?.singleGame?.title}
        </h1>
      </div>
    </div>
  );
};

export default SingleGame;
