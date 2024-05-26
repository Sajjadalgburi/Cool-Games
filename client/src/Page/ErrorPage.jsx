import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h1 className="text-4xl font-extrabold my-6">OOPS!</h1>
      <p>
        Sorry, an unexpected error has occurred. Click the button to go back!
      </p>
      {/* // Add a button to go back using the navigate hook */}
      <button className="btn btn-secondary mt-8" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
