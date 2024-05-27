import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import SignUpModal from '../SignUpModal/Index';
import LoginInModal from '../LoginModal/Index';

// links component so i dont have to repeat the same code (DRY)
import Github from '../links/Github';
import LinkedIn from '../links/LinkedIn';
//  using custom made context hook for the modals
import { useAuth } from '../../../context/AuthContext';

const Navigation = () => {
  // using the useAuth hook to get the currentModal, formState, handleOpenModal, handleCloseModal, and handleChange
  const {
    currentModal,
    formState,
    handleOpenModal,
    handleCloseModal,
    handleChange,
  } = useAuth();
  return (
    <>
      <div className="navbar bg-base-100 mt-4">
        <div className="navbar-start">
          <div className="dropdown md:ml-3">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-6 w-6 md:h-8 md:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 z-[1] p-3 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <Link to="/">Homepage</Link>
              </li>

              {Auth.loggedIn() ? (
                <>
                  {' '}
                  <li>
                    <Link to={'/'}>
                      <p onClick={Auth.logout}>logout</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="profile">Profile</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <button onClick={() => handleOpenModal('signUp')}>
                      Sign In
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleOpenModal('logIn')}>
                      Log In
                    </button>
                  </li>
                  {currentModal === 'signUp' && (
                    <SignUpModal
                      isOpen={currentModal === 'signUp'}
                      formState={formState}
                      onChange={handleChange}
                      onClose={handleCloseModal}
                      onClick={handleOpenModal}
                    />
                  )}
                  {currentModal === 'logIn' && (
                    <LoginInModal
                      isOpen={currentModal === 'logIn'}
                      formState={formState}
                      onChange={handleChange}
                      onClose={handleCloseModal}
                    />
                  )}
                </>
              )}

              <li>
                <Link to="about-me">About me</Link>
              </li>
              <li>
                <Link to="donate">Donate</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost text-2xl uppercase">
            cool games
          </Link>{' '}
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate mx-2">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller hidden-checkbox"
              value="light"
            />

            {/* sun icon */}
            <svg
              className="swap-off fill-current w-6 h-6 md:w-9 md:h-9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current  w-6 h-6 md:w-9 md:h-9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <Github />
          <LinkedIn />
        </div>
      </div>
    </>
  );
};

export default Navigation;
