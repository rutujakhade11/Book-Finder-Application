import { useGlobalContext } from "../../context/AppContext.jsx"; // Importing global context to access books and loading state
import Book from "../BookList/Book.jsx"; // Importing the Book component to display individual book details
import Loading from "../Loader/Loader.jsx"; // Importing the Loading component to show a loading spinner
import coverImg from "../../images/cover_not_found.jpg"; // Default image to display when a book cover is not found

// BookList component to display a list of books
const BookList = () => {
  // Destructuring books, loading state, and result title from the global context
  const { books, loading, resultTitle } = useGlobalContext();
  console.log("Books from context:", books);


  // Mapping through the books to create a new array with cover image URLs and modified IDs
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.id.replace("/works/", ""), // Removing "/works/" from the book ID
      cover_img: singleBook.cover_id // Constructing the cover image URL or using a default image if not available
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}.jpg`
        : coverImg,
    };
  });

  // If loading, display the Loading component
  if (loading) return <Loading />;

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto max-w-[1200px]">
        {/* Title section for the book list */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">{resultTitle}</h2>{" "}
          {/* Displaying the result title */}
        </div>

        {/* Grid layout for displaying books */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Mapping through the first 30 books to render Book components */}
          {booksWithCovers.slice(0, 30).map((item, index) => {
            return <Book key={index} {...item} />; // Passing book details as props to the Book component
          })}
        </div>
      </div>
    </section>
  );
};

// Exporting the BookList component for use in other parts of the application
export default BookList;
