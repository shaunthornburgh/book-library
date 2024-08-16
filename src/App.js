import logo from "./logo.svg";
import "./App.css";
import { BooksProvider } from "./BooksContext";
import Books from "./components/Books";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BookDetails from "./components/BookDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Navigate to={"/"} />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
