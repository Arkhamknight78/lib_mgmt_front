import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import BorrowReturn from "./components/BorrowReturn";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-slate-800 text-white p-4 flex justify-evenly">
        <ul className="flex space-x-4">
          <li className=""><Link to="/add-book" className="hover:underline">Add Book</Link></li>
          <li><Link to="/book-list" className="hover:underline">Book List</Link></li>
          <li><Link to="/borrow-return" className="hover:underline">Borrow/Return</Link></li>
        </ul>
      </nav>
      <div className="p-6">
        <Routes>
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/book-list" element={<BookList />} />
          <Route path="/borrow-return" element={<BorrowReturn />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
