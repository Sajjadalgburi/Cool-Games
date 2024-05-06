import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 grid-flow-row p-8">
        <aside className="">
          <input
            type="text"
            placeholder="Search for games..."
            className="mb-7 input input-bordered input-secondary w-full max-w-xs"
          />

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
          <div className="colSystem grid gap-y-8 gap-x-3 grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-flow-row-dense">
            {' '}
            <div className="card m-5 w-70 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body flex flex-col justify-center items-center">
                {' '}
                {/* Added flex properties */}
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card m-5 w-70 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body flex flex-col justify-center items-center">
                {' '}
                {/* Added flex properties */}
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card m-5 w-70 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body flex flex-col justify-center items-center">
                {' '}
                {/* Added flex properties */}
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card m-5 w-70 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body flex flex-col justify-center items-center">
                {' '}
                {/* Added flex properties */}
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card m-5 w-70 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body flex flex-col justify-center items-center">
                {' '}
                {/* Added flex properties */}
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card m-5 w-70 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body flex flex-col justify-center items-center">
                {' '}
                {/* Added flex properties */}
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card m-5 w-70 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body flex flex-col justify-center items-center">
                {' '}
                {/* Added flex properties */}
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card m-5 w-70 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body flex flex-col justify-center items-center">
                {' '}
                {/* Added flex properties */}
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card m-5 w-70 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body flex flex-col justify-center items-center">
                {' '}
                {/* Added flex properties */}
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card m-5 w-70 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body flex flex-col justify-center items-center">
                {' '}
                {/* Added flex properties */}
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card m-5 w-70 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body flex flex-col justify-center items-center">
                {' '}
                {/* Added flex properties */}
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
