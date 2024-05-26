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
      <h1>hi</h1>
    </div>
  );
};

export default CategoryPage;
