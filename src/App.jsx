import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About.jsx";
import BookList from "./components/BookList/BookList.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import HomeLayout from "./Layout/HomeLayout.jsx";
import { AppProvider } from "./context/AppContext"; // Adjust the path as necessary

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookList />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
