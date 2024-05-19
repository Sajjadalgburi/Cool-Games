import { Link } from 'react-router-dom';

const LinkedIn = () => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      to="https://www.linkedin.com/in/sajjadalgburi/"
    >
      <button className="btn mr-4 btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="50"
          height="50"
          className="h-8 w-8"
          fill="currentColor"
        >
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1c-29.73 0-53.79-24.15-53.79-53.9 0-29.76 24.06-53.9 53.79-53.9s53.79 24.14 53.79 53.9c0 29.75-24.06 53.9-53.79 53.9zm394.31 339.9h-92.6V302.4c0-34.7-12.5-58.4-43.3-58.4-23.6 0-37.6 15.9-43.8 31.2-2.3 5.7-2.8 13.6-2.8 21.5V448h-92.68s1.24-235.3 0-259.1h92.68v36.7c-.2.3-.4.6-.5.9h.5V194c12.3-19 34.2-46 83.3-46 60.8 0 106.3 39.7 106.3 125.1V448z" />
        </svg>
      </button>
    </Link>
  );
};

export default LinkedIn;
