// SearchBar component allows users to input a search term
// and navigate to the book results page based on that term.

import { useRef } from "react";
import { HiSearch } from "react-icons/hi";
import { useGlobalContext } from "../../context/AppContext.jsx"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
   // Extracting setSearchTerm and setResultTitle from global context
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchInput = useRef(""); // Ref to access the input value
  const navigate = useNavigate(); // Hook to programmatically navigate

    // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    let tempSearchTerm = searchInput.current.value.trim(); // Get and trim input value

    // Check if the input is empty or contains only non-word characters
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("Search Books"); // Default search term
      setResultTitle("Please Enter Something ..."); // Set a message for empty input
    } else {
      setSearchTerm(tempSearchTerm); // Set the search term from input
    }

    navigate("/book"); // Navigate to the book results page
  };

  return (
    <div className="flex items-center max-w-[680px] mx-auto p-2 bg-white rounded-full shadow-lg">
      <form onSubmit={handleSubmit} className="flex-grow w-full">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Search Books..."
            className="flex-grow p-2 text-gray-700 font-semibold text-[1.1rem] rounded-full focus:outline-none"
            ref={searchInput}
          />
          <button
            type="submit"
            className="p-2 text-[#8d27ae] rounded-full hover:text-[#c010fa] transition duration-300"
          >
            <HiSearch size={32} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;