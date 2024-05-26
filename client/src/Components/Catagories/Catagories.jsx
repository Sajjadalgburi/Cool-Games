// Desc: Catagories component to display the list of catagories

import { Link } from 'react-router-dom';

const Catagories = () => {
  const categories = [
    'Horror',
    'Fantasy',
    'RPG',
    'Survival',
    'First-Person Shooter',
    'Racing',
    'Strategy',
    'Art',
    'Interactive Story',
    'Fighting',
    'Simulation',
  ];

  return (
    <>
      <h2 className="text-3xl font-bold my-5">Categories</h2>
      <div className="ListOfCatagories">
        <ul className="Category">
          {categories.map((category) => {
            return (
              <li key={category} className="mb-4">
                <Link to={`category/${category}}`}>{category}</Link>
              </li>
            );
          })}{' '}
        </ul>
      </div>
    </>
  );
};

export default Catagories;
