// create a functional component SearchBar
const SearchBar = ({ search, setSearch }) => {
  const iconStyle = {
    position: 'absolute',
    right: '10px', // Adjust the right position of the icon
    top: '50%', // Center the icon vertically
    transform: 'translateY(-50%)', // Adjust for vertical centering
    width: '20px', // Adjust the size of the icon
    height: '20px',
    opacity: '0.7',
    pointerEvents: 'none', // Ensure clicks go through to the input
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <input
        type="text"
        placeholder="Search for games..."
        className="input input-bordered"
        style={{
          width: '100%',
          padding: '8px 30px 8px 10px',
          boxSizing: 'border-box',
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        style={iconStyle}
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
