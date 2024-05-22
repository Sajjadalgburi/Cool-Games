import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const ProfilePage = () => {
  // if data isn't here yet, say so
  const { loading, data } = useQuery(QUERY_ME);

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  console.log(data.me);

  return (
    <div className="profileMain mt-11">
      <div className="welcomeSection font-bold">
        <h3 className="text-5xl">
          Welcome to your profile {data.me.username}!
        </h3>
        <p className="mt-8 text-md">
          Here you can view and manage your saved games.
        </p>

        <Link to={'/'}>
          <p className=" text-sm mt-2 italic hover:text-indigo-500 transition">
            want to go back? Click Me!
          </p>
        </Link>
      </div>

      <div className="savedGamesProfile p-4 mt-10">
        <h5 className="font-semibold text-xl uppercase">
          {/* Saved Games will be displayed here */}
          {data.me.savedGames.length
            ? `Viewing ${data.me.savedGames.length} saved ${
                data.me.savedGames.length === 1 ? 'game' : 'games'
              }:`
            : 'You have no saved games!'}{' '}
        </h5>
      </div>
    </div>
  );
};

export default ProfilePage;
