// Desc: Catagories component to display the list of catagories

import { Link } from 'react-router-dom';

const Catagories = () => {
  return (
    <>
      <h2 className="text-3xl font-bold my-5">Categories</h2>
      <div className="ListOfCatagories">
        <ul className="Category">
          {' '}
          <Link to="Horror">
            {' '}
            <li className="mb-4">Horror</li>
          </Link>
          <Link to="Fantasy">
            {' '}
            <li className="mb-4">Fantasy</li>
          </Link>
          <Link to="RPG">
            {' '}
            <li className="mb-4">RPG</li>
          </Link>
          <Link to="Survival">
            {' '}
            <li className="mb-4">Survival</li>
          </Link>
          <Link to="First-Person Shooter">
            {' '}
            <li className="mb-4">First-Person Shooter</li>
          </Link>
          <Link to="Racing">
            {' '}
            <li className="mb-4">Racing</li>
          </Link>
          <Link to="Strategy">
            {' '}
            <li className="mb-4">Strategy</li>
          </Link>
          <Link to="Art">
            {' '}
            <li className="mb-4">Art</li>
          </Link>
          <Link to="Interactive Story">
            {' '}
            <li className="mb-4">Interactive Story</li>
          </Link>
          <Link to="Fighting">
            {' '}
            <li className="mb-4">Fighting</li>
          </Link>
          <Link to="Simulation">
            {' '}
            <li className="mb-4">Simulation</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Catagories;
