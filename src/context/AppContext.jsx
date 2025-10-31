import React, { useState, useContext, useEffect, useCallback } from "react";

// Base URL for fetching books from Open Library API
const URL = "https://openlibrary.org/search.json?title=";

// Create a context for the application
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // State to hold the search term input by the user
  const [searchTerm, setSearchTerm] = useState("the lost world");
  // State to store the fetched books
  const [books, setBooks] = useState([]);
  // State to manage loading state
  const [loading, setLoading] = useState(true);
  // State to hold the result title for display
  const [resultTitle, setResultTitle] = useState("");

  // Function to fetch books based on the search term
  const fetchBooks = useCallback(async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      // Fetch data from the Open Library API
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const { docs } = data; // Extract the 'docs' array from the response

      if (docs) {
        // Map through the docs to create a new array of book objects
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });

        setBooks(newBooks); // Update the books state with the new array

        // Set result title based on the number of books found
        if (newBooks.length > 1) {
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Search Result Found!");
        }
      } else {
        // If no docs found, reset books and set result title
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
      setLoading(false); // Set loading to false after fetching
    } catch (error) {
      console.log(error); // Log any errors that occur during fetch
      setLoading(false); // Ensure loading is set to false on error
    }
  }, [searchTerm]);

  // Effect to fetch books whenever the search term changes
  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    // Provide the context values to the children components
    <AppContext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        resultTitle,
        setResultTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext in other components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

// Export the AppContext and AppProvider for use in the application
export { AppContext, AppProvider };
