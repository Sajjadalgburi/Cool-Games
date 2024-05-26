// Date formatter utility function

// Function to format a date string
function formatDate(dateStr) {
  const date = new Date(dateStr);

  // Formatting options
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

// Export the function
export { formatDate };
