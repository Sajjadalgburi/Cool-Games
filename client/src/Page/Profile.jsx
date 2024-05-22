import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div className="profileMain mt-11">
      <div className="welcomeSection font-bold">
        <h3 className="text-5xl">Welcome to your profile username!</h3>
        <p className="mt-8 text-md">
          Here you can view and manage your saved games.
        </p>

        <Link to={'/'}>
          <p className=" text-sm mt-2 italic hover:text-indigo-500 transition">
            want to go back? Click Me!
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
