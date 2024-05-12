import PopularGamesList from '../Components/PopularGames/PopularGames';
import SearchBar from '../Components/SearchBar/SearchBar';
import Catagories from '../Components/Catagories/Catagories';

const HomePage = () => {
  return (
    <>
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 grid-flow-row p-8">
        <aside>
          <SearchBar />
          <Catagories />
        </aside>

        <main className="ListOfGames col-span-1 md:col-span-4 lg:col-span-5">
          <PopularGamesList />
        </main>
      </div>
    </>
  );
};

export default HomePage;
