import { useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { SINGLE_GAME } from '../utils/queries';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SingleGame = () => {
  const { game_id } = useParams();

  const [fetchSingleGame, { loading, data, error }] = useLazyQuery(SINGLE_GAME);

  useEffect(() => {
    fetchSingleGame({ variables: { game_id: game_id } });
  }, [game_id, fetchSingleGame]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Helper function to convert YouTube URL to embed URL
  const getEmbedUrl = (url) => {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get('v');
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const trailerUrl = data?.singleGame?.trailers
    ? getEmbedUrl(data.singleGame.trailers)
    : '';

  return (
    <div className="singleGame mt-12">
      <div className="gameImageDiv flex justify-center">
        <img
          className="rounded-md gameImage  w-4/6  md:w-2/3 shadow-xl"
          src={data?.singleGame?.image}
          alt={data?.singleGame?.title || 'Game Image'}
        />
      </div>
      <div className=" card-body w-3/3 md:w-2/3 p-7 shadow-xl flex justify-center ">
        <h1 className="text-4xl font-bold text-center my-6">
          {data?.singleGame?.title}
        </h1>

        <div className="gameDetails flex justify-between">
          <div className="left-side">
            genres: {data?.singleGame?.genres} <br />
            {data?.singleGame?.releaseDate} •
          </div>
          <div className="right-side">
            <Link to={data?.singleGame?.link} className="">
              link to URL
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGame;
