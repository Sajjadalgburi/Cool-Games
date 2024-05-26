import PopularGamesList from '../Components/PopularGames/PopularGames';
import SearchBar from '../Components/SearchBar/SearchBar';
import Categories from '../Components/Catagories/Catagories';

const HomePage = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-6 grid-flow-row p-8">
        <aside className="md:col-span-1 lg:col-span-1">
          <SearchBar />
          <Categories />
        </aside>

        <main className="col-span-1 md:col-span-2 lg:col-span-5">
          <PopularGamesList />
        </main>
      </div>
    </>
  );
};

export default HomePage;
