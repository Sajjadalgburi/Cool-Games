import { useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { SINGLE_GAME } from '../utils/queries';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/dateFormatter';

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

  // Map through trailers to create iframe elements
  const trailerIframes =
    data?.singleGame?.trailers?.map((trailer, index) => (
      <iframe
        key={index}
        width="560"
        height="315"
        src={getEmbedUrl(trailer)}
        title={`Game Trailer ${index + 1}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    )) || 'No trailers available';

  // Adding spacing between genres and platforms for better readability
  const genres = data?.singleGame?.genres.join(', ') || 'N/A';
  const platforms = data?.singleGame?.platforms.join(', ') || 'N/A';

  // Format the release date using the formatDate function
  const gameReleaseDate = formatDate(data?.singleGame?.releaseDate);

  // rounded rating
  const rating = Math.round(data?.singleGame?.rating);

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

        <div className="gameDetails text-xl font-medium flex justify-between">
          <div className="left-side text-center">
            <div className="genres">
              <p className=" font-semibold text-2xl  mb-1">Genres</p> {genres}
            </div>{' '}
            <br />
            {gameReleaseDate} || {platforms}
          </div>

          <div className="right-side text-center">
            <div className="url">
              <p className=" font-semibold text-2xl  mb-1">URL</p>
              <Link to={data?.singleGame?.link} className="text-center">
                Take Me There
              </Link>
            </div>{' '}
            <br />
            <p className=" font-semibold text-2xl  mb-1"> Rating</p>
            {rating}
          </div>
        </div>
      </div>

      <div className="trailers">
        <h1 className="text-4xl font-bold text-center my-10">Game Trailers</h1>
        <div className="trailerSection flex flex-wrap justify-center gap-4">
          {trailerIframes}
        </div>
      </div>

      <div className="gameDescription">
        <h1 className="text-4xl font-bold text-center my-10">
          Game Description
        </h1>
        <p className="text-sm p-3 md:text-xl font-medium text-center">
          {data?.singleGame?.description}
        </p>
      </div>
    </div>
  );
};

export default SingleGame;
