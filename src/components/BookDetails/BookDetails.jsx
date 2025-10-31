import { useState, useEffect } from "react"; // Importing hooks for state and effect management
import { useParams } from "react-router-dom"; // Importing useParams to access URL parameters
import Loading from "../Loader/Loader"; // Importing the Loading component to show a loading spinner
import coverImg from "../../images/cover_not_found.jpg"; // Default image to display when a book cover is not found
import { FaArrowLeft } from "react-icons/fa"; // Importing an icon for the back button
import { useNavigate } from "react-router-dom"; // Importing useNavigate for programmatic navigation

const URL = "https://openlibrary.org/works/"; // Base URL for fetching book details from Open Library API

// BookDetails component to display detailed information about a specific book
const BookDetails = () => {
  const { id } = useParams(); // Extracting the book ID from the URL parameters
  const [loading, setLoading] = useState(false); // State to manage loading status
  const [book, setBook] = useState(null); // State to hold the book details
  const [showFullDescription, setShowFullDescription] = useState(false); // State to toggle full description visibility
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    setLoading(true); // Set loading to true while fetching data
    async function getBookDetails() {
      try {
        // Fetching book details from the Open Library API
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json(); // Parsing the response as JSON

        if (data) {
          // Extracting relevant fields from the fetched data
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const newBook = {
            description: description
              ? description.value // Use the description value if available
              : "No description found", // Fallback if no description exists
            title: title, // Book title
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg, // Fallback to default cover image
            subject_places: subject_places
              ? subject_places.join(", ") // Joining subject places into a string
              : "No subject places found", // Fallback if no subject places exist
            subject_times: subject_times
              ? subject_times.join(", ") // Joining subject times into a string
              : "No subject times found", // Fallback if no subject times exist
            subjects: subjects ? subjects.join(", ") : "No subjects found", // Joining subjects into a string
          };

          setBook(newBook); // Updating the book state with the new book details
        } else {
          setBook(null); // Setting book to null if no data is found
        }
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.log(error); // Logging any errors that occur during the fetch
        setLoading(false); // Ensuring loading is set to false on error
      }
    }

    getBookDetails(); // Invoking the function to fetch book details
  }, [id]); // Dependency array to refetch when the book ID changes

  if (loading) return <Loading />; // Display the Loading component while fetching data

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Back button to navigate to the previous page */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => navigate(-1)} // Navigating back to the previous page
            className="flex items-center text-blue-600 hover:text-blue-800 text-xl transition-colors"
          >
            <FaArrowLeft className="mr-3" />
            <span className="font-semibold">Back to Book List</span>
          </button>
        </div>

        {book && ( // Conditional rendering if book details are available
          <div className="max-w-[800px] mx-auto grid md:grid-cols-2 gap-8 md:gap-16 bg-white rounded-xl shadow-xl p-6 md:p-8">
            <div className="flex justify-center items-center">
              <img
                src={book.cover_img} // Displaying the book cover image
                alt={book.title} // Alt text for accessibility
                className="max-w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {book.title}
              </h2>

              <div className="bg-gray-100 p-4 md:p-6 rounded-lg">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                  Description
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {showFullDescription
                    ? book.description // Displaying the full description if toggled
                    : `${book.description.slice(0, 300)}...`}
                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)} // Toggling the full description
                    className="text-blue-600 hover:text-blue-800 font-semibold ml-2"
                  >
                    {showFullDescription ? "Show Less" : "Read More"}
                  </button>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    Subject Places
                  </h4>
                  <p className="text-base md:text-lg text-gray-600">
                    {book.subject_places}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    Subject Times
                  </h4>
                  <p className="text-base md:text-lg text-gray-600">
                    {book.subject_times}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  Subjects
                </h4>
                <p className="text-base md:text-lg text-gray-600">
                  {book.subjects}
                </p>
              </div>
            </div>
          </div>
        )}

        {!book && ( // Conditional rendering if book details are not found
          <div className="text-center">
            <p className="text-3xl text-gray-600">Book details not found</p>
          </div>
        )}
      </div>
    </section>
  );
};

// Exporting the BookDetails component for use in other parts of the application
export default BookDetails;
