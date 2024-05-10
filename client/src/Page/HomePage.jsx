import { Link } from 'react-router-dom';
import PopularGamesList from '../Components/PopularGames/PopularGames';

const HomePage = () => {
  const iconStyle = {
    position: 'absolute',
    right: '10px', // Adjust the right position of the icon
    top: '50%', // Center the icon vertically
    transform: 'translateY(-50%)', // Adjust for vertical centering
    width: '20px', // Adjust the size of the icon
    height: '20px',
    opacity: '0.7',
    pointerEvents: 'none', // Ensure clicks go through to the input
  };

  return (
    <>
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 grid-flow-row p-8">
        <aside className="">
          <div style={{ position: 'relative', width: '100%' }}>
            <input
              type="text"
              placeholder="Search for games..."
              className="input input-bordered"
              style={{
                width: '100%',
                padding: '8px 30px 8px 10px',
                boxSizing: 'border-box',
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              style={iconStyle}
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

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
