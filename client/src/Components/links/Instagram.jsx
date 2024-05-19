import { Link } from 'react-router-dom';

const Instagram = () => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      to="https://www.instagram.com/sajjadalgburi/"
    >
      <button className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="50"
          height="50"
          className="h-8 w-8"
          fill="currentColor"
        >
          <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66ZM146.06,256A77.94,77.94,0,1,1,224,334,78,78,0,0,1,146.06,256ZM365.33,136.19a30.79,30.79,0,1,0,30.79,30.79A30.79,30.79,0,0,0,365.33,136.19ZM448,80V432c0,44.18-35.82,80-80,80H80c-44.18,0-80-35.82-80-80V80C0,35.82,35.82,0,80,0H368C412.18,0,448,35.82,448,80ZM398.64,398.64a48.34,48.34,0,0,0,14.09-34.27V147.63a48.34,48.34,0,0,0-14.09-34.27A48.34,48.34,0,0,0,364.37,99.27H83.63a48.34,48.34,0,0,0-34.27,14.09A48.34,48.34,0,0,0,35.27,147.63V364.37a48.34,48.34,0,0,0,14.09,34.27A48.34,48.34,0,0,0,83.63,428.73H364.37A48.34,48.34,0,0,0,398.64,398.64Z" />
        </svg>
      </button>
    </Link>
  );
};

export default Instagram;
