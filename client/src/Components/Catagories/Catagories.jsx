// Desc: Catagories component to display the list of catagories

import { Link } from 'react-router-dom';

const Catagories = () => {
  return (
    <>
      <h2 className="text-3xl font-bold my-5">Categories</h2>
      <div className="ListOfCatagories">
        <ul className="Category">
          {' '}
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
    </>
  );
};

export default Catagories;
