import { Link } from 'react-router-dom';
import PopularGamesList from '../Components/PopularGames/PopularGames';
import SearchBar from '../Components/SearchBar/SearchBar';

const HomePage = () => {
  return (
    <>
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 grid-flow-row p-8">
        <aside>
          <SearchBar />
          <h2 className="text-3xl font-bold my-5">Categories</h2>
          <div className="ListOfCatagories">
            <ul className="Category">
              {' '}
              <Link to="/popular">
                {' '}
                <li className="mb-4">Popular</li>
              </Link>
              <Link to="/shooter">
                {' '}
                <li className="mb-4">Shooter</li>
              </Link>
              <Link to="/openworld">
                {' '}
                <li className="mb-4">Open World</li>
              </Link>
              <Link to="/fantasy">
                {' '}
                <li className="mb-4">Fantasy</li>
              </Link>
              <Link to="/RPB">
                {' '}
                <li className="mb-4">RPB</li>
              </Link>
              <Link to="/survival">
                {' '}
                <li className="mb-4">Survival</li>
              </Link>
            </ul>
          </div>
        </aside>

        <main className="ListOfGames col-span-1 md:col-span-4 lg:col-span-5">
          <PopularGamesList />
        </main>
      </div>
    </>
  );
};

export default HomePage;
