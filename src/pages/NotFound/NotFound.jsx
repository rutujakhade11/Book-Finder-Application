// Importing the useNavigate hook for navigation
import { useNavigate } from "react-router-dom";

// NotFound component displays a 404 error message when a page is not found
const NotFound = () => {
  const navigate = useNavigate(); // Initialize the navigate function for programmatic navigation

  // Function to handle the back button click, navigating back to the homepage
  const handleBack = () => {
    navigate("/"); // Navigate back to homepage
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
        404 | Page Not Found
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={handleBack} // Trigger handleBack function on button click
        className="mt-6 px-4 py-1 md:px-6 md:py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
      >
        Back to Homepage
      </button>
    </div>
  );
};

// Export the NotFound component for use in other parts of the application
export default NotFound;
