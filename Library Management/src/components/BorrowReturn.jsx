import React, { useEffect, useState } from "react";
import api from "../api";

const BorrowReturn = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get("/books"); // Fetch books from backend
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleBorrowReturn = async (bookId, action) => {
    try {
      const endpoint = action === "borrow" ? `/borrow/${bookId}` : `/return/${bookId}`;
      const response = await api.post(endpoint); // Borrow or return book
      console.log(`${action} successful:`, response.data);
      alert(`${action === "borrow" ? "Borrowed" : "Returned"} successfully!`);
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === bookId ? { ...book, availability: action !== "borrow" } : book
        )
      );
    } catch (error) {
      console.error(`Error during ${action}:`, error);
      alert(`Failed to ${action} the book.`);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Borrow/Return Books</h1>
      <ul className="space-y-4">
        {books.map((book) => (
          <li key={book.id} className="flex justify-between items-center">
            <span>
              {book.title} - {book.availability ? "Available" : "Borrowed"}
            </span>
            {book.availability ? (
              <button
                onClick={() => handleBorrowReturn(book.id, "borrow")}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Borrow
              </button>
            ) : (
              <button
                onClick={() => handleBorrowReturn(book.id, "return")}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Return
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowReturn;
