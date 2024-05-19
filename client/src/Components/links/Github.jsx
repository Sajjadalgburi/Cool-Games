import { Link } from 'react-router-dom';

const Github = () => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      to="https://github.com/Sajjadalgburi"
    >
      <button className="btn mx-4 btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.865 8.17 6.84 9.49.5.09.68-.22.68-.49l-.01-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.63.07-.62.07-.62 1.01.07 1.54 1.04 1.54 1.04.9 1.55 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.24-.25-4.6-1.12-4.6-4.97 0-1.1.39-2 1.04-2.7-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03.8-.22 1.65-.33 2.5-.33.85 0 1.69.11 2.5.33 1.91-1.3 2.75-1.03 2.75-1.03.56 1.38.21 2.41.1 2.66.64.69 1.03 1.6 1.03 2.7 0 3.86-2.36 4.72-4.6 4.97.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.59.69.49C19.135 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"
          ></path>
        </svg>
      </button>
    </Link>
  );
};

export default Github;
