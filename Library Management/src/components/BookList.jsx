import React, { useEffect, useState } from "react";
import api from "../api";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get("/books"); // Adjust endpoint as per your backend
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="mb-2">
            {book.title} - {book.author} ({book.availability ? "Available" : "Borrowed"})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
