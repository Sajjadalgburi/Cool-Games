import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { SINGLE_GAME } from '../../utils/queries';
import { useNavigate } from 'react-router-dom';

// create a functional component SearchBar
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const [searchGames, { loading, data, error }] = useLazyQuery(SINGLE_GAME);

  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    searchGames({ variables: { game: searchValue } });

    // Redirect to /search

    navigate('/search');
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for games..."
          className="input input-bordered"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="search-icon"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </form>
    </div>
  );
};

export default SearchBar;
