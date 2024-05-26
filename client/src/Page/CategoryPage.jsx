import { useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORY_GAME_FETCH } from '../utils/queries';

const CategoryPage = () => {
  const { categoryName } = useParams();

  const [categoryGameFetch, { loading, data, error }] =
    useLazyQuery(CATEGORY_GAME_FETCH);

  useEffect(() => {
    categoryGameFetch({ variables: { category: categoryName } });
  }, [categoryName, categoryGameFetch]);

  return (
    <div>
      <h1 className="flex text-3xl font-bold justify-center mb-6 md:justify-start mt-8 md:ml-24">
        Results for {categoryName} genre:
      </h1>
      {data?.categoryGameFetch ? (
        <>
          <div className="flex justify-center ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-8">
              {data?.categoryGameFetch.map((game) => (
                <div
                  key={game.game_id}
                  className="card w-72 bg-base-200 rounded shadow-xl"
                >
                  <div className="card-body">
                    <h2 className="card-title justify-center mb-3">
                      {game.title}
                    </h2>
                    <div className="card-actions justify-center mt-3">
                      <Link to={`/game/${game.game_id}`}>
                        <button className="btn btn-primary">Select</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div>
          <h1 className=" text-2xl uppercase font-bold text-center mt-28">
            No search results :(
          </h1>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
