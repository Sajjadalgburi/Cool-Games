import { useSelector } from 'react-redux';

const SearchResult = () => {
  const searchData = useSelector((state) => state.search.searchData);

  return (
    <div>
      {searchData ? (
        <>
          <p>yesssss</p>
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

export default SearchResult;
